import React from 'react';
import { ContentBlock } from '../../types/contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';
import Image from 'next/image';
import './Card.css'; // Importa los estilos globales

interface BlockCardProps {
  block: ContentBlock;
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: React.ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: React.ReactNode) => <span>{children}</span>,
    [BLOCKS.HEADING_2]: (node: any, children: React.ReactNode) => <h2 className="cardTitle">{children}</h2>, // Usa directamente la clase
  },
  renderInline: {
    [INLINES.HYPERLINK]: (node: any, children: React.ReactNode) => (
      <a href={node.data.uri} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

const Card: React.FC<BlockCardProps> = ({ block }) => {
  const details = block.details;
  const isDarkMode = false; // Lógica para modo oscuro

  const cardClassName = isDarkMode ? `cardContainer darkCardContainer` : 'cardContainer';
  const descriptionClassName = isDarkMode ? `cardDescription darkCardDescription` : 'cardDescription';
  const readMoreClassName = isDarkMode ? `readMoreLink darkReadMoreLink` : 'readMoreLink';

  return (
    <div className={cardClassName}>
      <div style={{ position: 'relative', width: '100%', height: '200px' }}>
        <Image
          src={details?.contentImage?.url || ''}
          alt={details?.contentImage?.fileName || ''}
          fill
          className="cardImage"
          unoptimized={true}
        />
      </div>
      <div className="cardContent">
        <a href="#" className="cardTitleLink">
          <h5 className="cardTitle">
            {details?.contentTitle || 'Título del Bloque'}
          </h5>
        </a>
        {details?.contentDescription?.json ? (
          <div className={descriptionClassName}>
            {documentToReactComponents(details.contentDescription.json, options)}
          </div>
        ) : (
          <p className={descriptionClassName}>
            Descripción del Bloque
          </p>
        )}
        <a
          href="#"
          className={readMoreClassName}
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default Card;