import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Page } from './Page';
import type { PageItem, Block } from '../../types/contentful'; // Importa la interfaz Block
import mockPagesData from '../../__mocks__/mockPagesData';

const meta = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {
  args: {
    pages: [],
  },
};

export const LoggedIn: Story = {
  args: {
    pages: mockPagesData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const WithContentfulData: Story = {
  args: {
    pages: [
      {
        title: 'Página de Ejemplo 1',
        slug: 'ejemplo-1',
        content: {
          json: {
            nodeType: 'document',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Este es el contenido de la página 1.',
                    marks: [],
                  },
                ],
              },
            ],
          },
          links: { assets: { hyperlink: { url: 'https://ejemplo.com/imagen.jpg' } } },
        },
        blocksCollection: {
          __typename: 'BlockCollection', // Si tu Block es parte de una Collection
          total: 1, // Añade la propiedad total
          items: [
            {
              title: 'Bloque 1',
              descripion: 'Descripción del bloque 1',
              contentCollection: {
                total: 1, // Añade total también si contentCollection es una Collection
                items: [
                  { __typename: 'TextBlock', sys: { id: '123' } },
                ],
              },
            } as any, // Cast to any if the Block type is more complex
          ],
        },
      } as PageItem,
      {
        title: 'Página de Ejemplo 2',
        slug: 'ejemplo-2',
        content: {
          json: {
            nodeType: 'document',
            content: [
              {
                nodeType: 'paragraph',
                content: [
                  {
                    nodeType: 'text',
                    value: 'Este es el contenido de la página 2.',
                    marks: [],
                  },
                ],
              },
            ],
          },
          links: { assets: { hyperlink: { url: 'https://ejemplo.com/otro.png' } } },
        },
        blocksCollection: {
          __typename: 'BlockCollection',
          total: 0,
          items: [],
        } as any,
      } as PageItem,
    ],
  },
};