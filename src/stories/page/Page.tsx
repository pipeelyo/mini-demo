"use client";
import React, { useState } from 'react';
import { Header } from '../header/Header';
import './page.css';
import { PageItem, ContentBlock } from '../../types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import Card from '../card/Card';
import { References } from '../references/References';

type User = {
  name: string;
};

export interface PageWithDetailedBlocks extends PageItem {
  detailedBlocks?: Array<{
    nameBlock?: string[];
    detailedContents?: ContentBlock[];
  }>;
}

interface PageProps {
  pages: PageWithDetailedBlocks[];
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: React.ReactNode) => <p className="mb-4">{children}</p>,
    [BLOCKS.HEADING_2]: (_node: any, children: React.ReactNode) => (
      <h2 className="text-2xl font-bold mb-3">{children}</h2>
    ),
  },
  renderInline: {
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        {children}
      </a>
    ),
  },
};

export const Page: React.FC<PageProps> = ({ pages }) => {
  const [user, setUser] = useState<User>();

  return (
    <article>
      <Header
        user={user}
        onLogin={() => setUser({ name: 'Jane Doe' })}
        onLogout={() => setUser(undefined)}
        onCreateAccount={() => setUser({ name: 'Jane Doe' })}
      />

      <section className="storybook-page">
        <h2>Lista de Páginas desde Contentful</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pages.map((page) => (
            <div key={page.slug || page.title || `page-${Date.now()}`}>
              <h3 className="text-xl font-bold">{page.title}</h3>
              <p className="mb-2 text-gray-600">Slug: {page.slug}</p>

              {page.content?.json && (
                <div className="rich-text-content mb-4">
                  {documentToReactComponents(page.content.json, options)}
                </div>
              )}

              <div>
                {page.detailedBlocks?.map((blockGroup: any, index: number) => {
                  const blockType = blockGroup.nameBlock?.[0] || 'Card';
                  
                  return (
                    <div key={`block-group-${index}`}>
                      <div key={`row-${index}`} className="flex flex-row flex-wrap gap-4">
                        {blockGroup.detailedContents?.map((contentBlock:any, idx:number) => (
                          <Card 
                            key={`card-${contentBlock.sys.id}-${idx}`} 
                            block={contentBlock} 
                          />
                        ))}
                      </div>
                      {blockType === "References" && (
                        <References key={`references-${index}`} desciption={blockGroup.descripion}  textColor={blockGroup.textColor}/>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

export default Page;