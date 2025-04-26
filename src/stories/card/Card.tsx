import React from 'react';
import Image from 'next/image';
import { ContentBlock } from '../../types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import './Card.css';

interface BlockCardProps {
  block: ContentBlock;
  isDarkMode?: boolean;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong className="font-bold">{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
      <p className="mb-3 last:mb-0">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
      <h2 className="text-xl font-bold mb-3">{children}</h2>
    ),
  },
  renderInline: {
    [INLINES.HYPERLINK]: (node: { data: { uri: string } }, children: React.ReactNode) => (
      <a 
        href={node.data.uri} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        {children}
      </a>
    ),
  },
};

const Card: React.FC<BlockCardProps> = ({ block, isDarkMode = false }) => {
  const details = block.details;
  
  // Clases dinámicas basadas en el modo oscuro
  const cardClasses = [
    'cardContainer',
    'rounded-lg',
    'overflow-hidden',
    'shadow-md',
    'transition-all',
    'hover:shadow-lg',
    isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
  ].join(' ');

  const descriptionClasses = [
    'cardDescription',
    isDarkMode ? 'text-gray-300' : 'text-gray-600'
  ].join(' ');

  const readMoreClasses = [
    'readMoreLink',
    'inline-block',
    'mt-2',
    'font-medium',
    isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
  ].join(' ');

  return (
    <div className={cardClasses}>
      <a href="#" className="block overflow-hidden">
        {details?.contentImage?.url && (
          <div className="relative h-48 w-full">
            <Image
              src={details.contentImage.url}
              alt={details.contentImage.fileName || details.contentTitle || 'Card image'}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={false}
            />
          </div>
        )}
      </a>
      
      <div className="p-4">
        <a href="#" className="block mb-2">
          <h3 className="text-lg font-semibold hover:text-blue-600 transition-colors">
            {details?.contentTitle || 'Título del Bloque'}
          </h3>
        </a>

        {details?.contentDescription?.json ? (
          <div className={descriptionClasses}>
            {documentToReactComponents(details.contentDescription.json, options)}
          </div>
        ) : (
          <p className={descriptionClasses}>
            Descripción del Bloque
          </p>
        )}

        <a
          href="#"
          className={readMoreClasses}
          aria-label="Leer más sobre este contenido"
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

export default Card;