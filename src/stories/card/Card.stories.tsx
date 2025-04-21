import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Card from './Card'; // Importa tu componente y su interfaz de props (si la tienes)
import { ContentBlock } from '../../types/contentful'; // Ajusta la ruta a tu interfaz ContentBlock

// Define la metadata para Storybook
export default {
  title: 'Componentes/Card', // Define la categoría y el nombre del componente en Storybook
  component: Card, // Asocia este archivo de historias con tu componente Card
  argTypes: {
    block: { control: 'object' }, // Permite editar la prop 'block' como un objeto en Storybook
  },
} as Meta;

// Crea una plantilla para tus historias
const Template: StoryFn<any> = (args:any) => <Card {...args} />;

// Historia para un bloque de contenido básico
export const Basico = Template.bind({});
Basico.args = {
  block: {
    details: {
      contentTitle: 'Título de Ejemplo',
      contentDescription: {
        json: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Esta es una descripción de ejemplo para la tarjeta.',
                  marks: [],
                },
              ],
            },
          ],
        },
      },
      contentImage: {
        url: 'https://via.placeholder.com/600x400', // URL de una imagen de ejemplo
        fileName: 'placeholder.png',
      },
    },
  } as ContentBlock,
};

// Historia para un bloque sin imagen
export const SinImagen = Template.bind({});
SinImagen.args = {
  block: {
    details: {
      contentTitle: 'Título sin Imagen',
      contentDescription: {
        json: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Esta tarjeta no tiene una imagen.',
                  marks: [],
                },
              ],
            },
          ],
        },
      },
    },
  } as ContentBlock,
};

// Historia para un bloque con texto enriquecido (si tu componente lo soporta)
export const ConTextoEnriquecido = Template.bind({});
ConTextoEnriquecido.args = {
  block: {
    details: {
      contentTitle: 'Título con Texto Enriquecido',
      contentDescription: {
        json: {
          nodeType: 'document',
          data: {},
          content: [
            {
              nodeType: 'paragraph',
              data: {},
              content: [
                {
                  nodeType: 'text',
                  value: 'Este texto tiene ',
                  marks: [],
                },
                {
                  nodeType: 'text',
                  value: 'negrita',
                  marks: [{ type: 'bold' }],
                },
                {
                  nodeType: 'text',
                  value: ' y un ',
                  marks: [],
                },
                {
                  nodeType: 'text',
                  value: 'enlace',
                  marks: [],
                  data: {
                    uri: 'https://www.ejemplo.com',
                  },
                },
                {
                  nodeType: 'text',
                  value: '.',
                  marks: [],
                },
              ],
            },
          ],
        },
      },
      contentImage: {
        url: 'https://via.placeholder.com/300x200',
        fileName: 'rich-text-image.png',
      },
    },
  } as ContentBlock,
};

// Puedes agregar más historias para cubrir diferentes estados y props de tu componente