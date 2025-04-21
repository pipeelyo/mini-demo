// src/app/page.tsx
import './globals.css';
import client from '@/lib/apolloClient';
import { GET_PAGES_WITH_BLOCKS } from '@/graphql/queries';
import {
  HomePageProps,
  HomePageData,
} from '@/types/contentful';
import { fetchContentBlockDetails } from '@/lib/contentBlock';
import { Page as PageComponent } from '../stories/page/Page'; // Importa tu componente Page

// ... (opciones de renderMark/renderNode/renderInline)

async function getData(): Promise<HomePageProps> {
  try {
    const { data } = await client.query<HomePageData>({
      query: GET_PAGES_WITH_BLOCKS,
    });
    const pages = data?.pageCollection?.items || [];
    return { pages };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { pages: [] };
  }
}

async function getBlockDetails(blocks: any[]) {
  if (!blocks) return [];
  const detailedBlocks = await Promise.all(
    blocks.map(async (blockItem: any) => {
      if (blockItem.contentCollection?.items) {
        const detailedContents = await Promise.all(
          blockItem.contentCollection.items.map(async (contentItem: any) => {
            const details = await fetchContentBlockDetails(contentItem.sys.id);
            return { ...contentItem, details };
          })
        );
        return { ...blockItem, detailedContents };
      }
      return blockItem;
    })
  );
  return detailedBlocks;
}

export default async function HomePage() {
  const { pages } = await getData();
  const pagesWithDetailedBlocks = await Promise.all(
    pages.map(async (page) => {
      const detailedBlocks = await getBlockDetails(page.blocksCollection?.items || []);
      return { ...page, detailedBlocks };
    })
  );

  return (
    <div>
      <h1>Página Principal</h1>
      <PageComponent pages={pagesWithDetailedBlocks} /> {/* Pasar la data enriquecida */}
    </div>
  );
}