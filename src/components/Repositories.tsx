import { FC, useContext } from "react";

import { useQuery } from "@apollo/client";
import { CircleNotch } from "phosphor-react";

import { Irepositories } from "../@types/repositories";
import { Repository } from "../components/Repository";
import { SearchContext } from "../contexts";
import { GET_REPOSITORIES_QUERY } from "../graphql/query";
import { useDebounce } from "../hooks/UseDebounce";

export const Repositories: FC = () => {
  const { searchData, isType, isSort } = useContext(SearchContext);
  const debouncedName = useDebounce(searchData);

  const abc = `is:${isType} user:trelcray ${debouncedName}in:name sort:${isSort}-asc`;

  const { data, loading, error } = useQuery<{ search: Irepositories }>(
    GET_REPOSITORIES_QUERY,
    {
      variables: { query: `${abc}` },
    }
  );
  const repositories = data?.search.nodes ?? [];

  if (loading) {
    return (
      <div className="mt-20 flex items-center justify-center">
        <div className="animate-spin" role="status">
          <CircleNotch size={46} color="#81d8f7" />
        </div>

        <p>Loading...</p>
      </div>
    );
  }

  if (error) return <p>error: There was an error loading the data</p>;

  return (
    <div>
      {repositories.length ? (
        repositories.map((repository, i) => {
          return (
            <a
              className="cursor-pointer"
              target="_blank"
              rel="noreferrer"
              href={repository.url}
              key={i}
            >
              <Repository
                key={repository.id}
                title={repository.name}
                description={repository.description}
                updatedAt={repository.updatedAt}
                isPrivate={repository.isPrivate}
              />
            </a>
          );
        })
      ) : (
        <div className="mx-3 h-full border-b-[1px]">
          <p className="ml-3 py-6 font-bold">Has no data to show!</p>
        </div>
      )}
    </div>
  );
};
