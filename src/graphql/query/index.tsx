import { gql } from "@apollo/client";

export const GET_REPOSITORIES_QUERY = gql `
query search($query: String!){
  search(query: $query, type: REPOSITORY, first: 100) {
      nodes {
        ... on Repository{
          id
          name
          description
          isPrivate
          isArchived
          updatedAt
        }
      }
  }
}
`