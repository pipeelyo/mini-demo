import { gql } from '@apollo/client';

export const GET_PAGES_WITH_BLOCKS = gql`
  query GetPagesWithBlocks {
    pageCollection(limit: 5) {
      total
      items {
        title
        slug
        content {
          json
          links {
            assets {
              hyperlink {
                url
              }
            }
          }
        }
        blocksCollection(limit: 5) {
          __typename
          total
          items {
            title
            descripion
            nameBlock
            contentCollection(limit: 5) {
              total
              items {
                __typename
                sys {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
`;