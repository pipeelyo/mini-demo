// src/types/contentful.d.ts
export interface HomePageProps {
    pages: PageItem[];
  }
  
  export interface HomePageData {
    pageCollection: PageCollection | undefined;
  }
  
  export interface PageCollection {
    total: number;
    items: PageItem[];
  }
  
  export interface PageItem {
    title: string | null;
    slug: string | null;
    content: Content | null;
    blocksCollection: Block | null;
  }
  
  export interface Block {
    __typename?: string;
    total: number;
    items: {
      title: string | null;
      descripion: string | null;
      contentCollection: {
        total: number;
        items: BlockContent[];
      } | null;
    }[];
  }
  
  export interface Content {
    json: any;
    links: ContentLink | null;
  }
  
  export interface ContentLink {
    assets: AssetLink | null;
  }
  
  export interface AssetLink {
    hyperlink: Hyperlink | null;
  }
  
  export interface Hyperlink {
    url: string | null;
  }
  
  export interface BlockContent {
    __typename?: string;
    sys: {
      id: string;
    };
  }

  export interface ContentBlockBase {
    contentTitle: string | null;
    contentImage: {
      url: string | null;
      fileName: string | null;
    } | null;
    contentDescription: {
      json: any;
    } | null;
  }
  
  export interface ContentBlock {
    sys: { id: string };
    __typename?: string;
    details: ContentBlockBase;
  }


// Interfaz para el bloque principal que incluye detailedContents
export interface Block {
  __typename?: string;
  title?: string;
  descripion?: string;
  nameblock?: string;
  contentCollection?: {
    __typename: string;
    total: number;
    items: ContentBlock[];
  };
  detailedContents?: ContentBlock[];  // Contiene los bloques con detalles
}