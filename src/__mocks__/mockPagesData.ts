// __mocks__/mockPagesData.ts
import type { PageItem } from '../types/contentful';

const mockPagesData: PageItem[] = [
  {
    title: 'Página de Inicio Mock',
    slug: 'inicio-mock',
    content: {
      json: {
        nodeType: 'document',
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Contenido de inicio mock.',
                marks: [],
              },
            ],
          },
        ],
      },
      links: { assets: { hyperlink: { url: 'https://mock.com/home.jpg' } } },
    },
    blocksCollection: {
      __typename: 'BlockCollection', // Si tu Block es parte de una Collection
      total: 0, // Indica el número de bloques en este array 'items'
      items: [],
    },
  } as PageItem,
  {
    title: 'Otra Página Mock',
    slug: 'otra-pagina-mock',
    content: {
      json: {
        nodeType: 'document',
        content: [
          {
            nodeType: 'paragraph',
            content: [
              {
                nodeType: 'text',
                value: 'Otro contenido mock.',
                marks: [],
              },
            ],
          },
        ],
      },
      links: { assets: { hyperlink: { url: 'https://mock.com/otra.png' } } },
    },
    blocksCollection: {
      __typename: 'BlockCollection',
      total: 1,
      items: [
        {
          title: 'Bloque de Ejemplo',
          descripion: 'Un bloque de prueba',
          contentCollection: {
            __typename: 'ContentBlockCollection',
            total: 0,
            items: [],
          },
        } as any, // Cast to any if needed for complex Block structure
      ],
    },
  } as PageItem,
  // ... más objetos PageItem de ejemplo
];

export default mockPagesData;