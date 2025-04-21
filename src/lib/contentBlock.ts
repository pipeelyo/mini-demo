// src/lib/contentful.ts
import { gql } from '@apollo/client';
import client from './apolloClient';
import {
  ContentBlock, // Si tienes una interfaz específica para ContentBlock
} from '@/types/contentful'; // Ajusta la ruta si es necesario

export async function fetchContentBlockDetails(id: string): Promise<ContentBlock | null> {
  try {
    const { data } = await client.query<{
      contentBlock: ContentBlock | null;
    }>({
      query: gql`
        query GetContentBlockDetails($id: String!) {
          contentBlock(id: $id) {
            contentTitle
            contentImage {
              url
              fileName
            }
            contentDescription {
              json
            }
          }
        }
      `,
      variables: { id },
    });
    return data?.contentBlock;
  } catch (error) {
    console.error(`Error fetching content block ${id}:`, error);
    return null;
  }
}

// Puedes agregar otras funciones relacionadas con Contentful aquí (e.g., obtener todas las páginas, etc.)