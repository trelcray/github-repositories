import { Repository } from "../components/Repository"
import { useContext } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES_QUERY } from "../pages/Index"
import { SearchContext } from "../contexts";
import { CircleNotch } from "phosphor-react";

interface repositories {
  nodes: [{
    id: string;
    name: string;
    description: string;
    isPrivate: boolean;
    isArchived: boolean;
    updatedAt: Date;
  }]
}

interface Searchprops {
  search: string;
}

export function Repositories(search: Searchprops) {
  const { searchData, is, sort } = useContext(SearchContext)

  const isPrivacity = is
  const inName = searchData
  const sorted = sort
  const abc = `is:${isPrivacity} user:trelcray ${inName}in:name sort:${sorted}-asc`


  const { data, loading, error } = useQuery<{ search: repositories }>(GET_REPOSITORIES_QUERY, {
    variables: { query: `${abc}` }
  });
  const props = data?.search.nodes


  if (loading) return <div className="flex mt-20 items-center justify-center">
    <div className="animate-spin" role="status">
      <CircleNotch className="anime" size={46} color="#81d8f7" />
    </div>
    <p>Carregando...</p>
  </div>
  if (error) return `Error: ${error}`;

  return (
    <div>
      {props?.length ? props?.map(repository => {
        return (
          <Repository
            key={repository.id}
            title={repository.name}
            description={repository.description}
            updatedAt={repository.updatedAt}
            isPrivate={repository.isPrivate} />
        )
      }
      )
        :
        <div className="h-full mx-3 border-b-[1px]">
          <p className="py-6 ml-3 font-bold">Não possui dados ou filtro inválido!</p>
        </div>
      }

    </div>
  )
}