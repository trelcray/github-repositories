import { gql } from "@apollo/client";
import { useState } from "react";
import { Filters } from "../components/Filters"
import { Repositories } from "../components/Repositories"

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


export function Index() {
  const [query, setQuery] = useState("");

  function searchData(event: any) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <Filters setSearch={searchData}/>
      <Repositories search={query}/>
      {query}
    </div>
  )
}
