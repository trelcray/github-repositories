import { Filters } from "../components/FIlters"
import { Repositories } from "../components/Repositories"
import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client";

interface repositories {
  nodes: [{
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    isArchived: boolean;
    updatedAt: any;
  }]
}

const REPOSITORY = gql`
query repositories($queryString: string!){
search(query: "is:public archived:false user:trelcray  in:name sort:name-desc", type: REPOSITORY, first: 100) {
    nodes {
      ... on Repository{
        id
        name
        description
        isPrivate
        isArchived
      }
    }
}
}
`;

export function Index() {

const { data, loading, error} = useQuery<{ search: repositories }>(REPOSITORY)
const props = data?.search.nodes

  if (loading) return <p>carregando...</p>
  if (error) return <div>error</div>;

  return (
    <div>
      <Filters />
      {props?.map(repository => {
        return (
          <Repositories
            key={repository.id}
            title={repository.name}
            description={repository.description}
            updatedAt={repository.updatedAt}
            isPrivate={repository.isPrivate} />
        )
      }
      )
      }

    </div>
  )
}
