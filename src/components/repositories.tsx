import { FC, useContext } from "react";

import { useQuery } from "@apollo/client";
import { CircleNotch } from "phosphor-react";

import { Irepositories } from "../@types/repositories";
import { Repository } from "../components/repository";
import { SearchContext } from "../contexts";
import { GET_REPOSITORIES_QUERY } from "../graphql/query";
import { UseCreatePagination } from "../hooks/use-create-pagination";
import { useDebounce } from "../hooks/use-debounce";
import { Button } from "./ui/button";

export const Repositories: FC = () => {
  const { searchData, isType, isSort } = useContext(SearchContext);
  const debouncedName = useDebounce(searchData);

  const queryString = `is:${isType} user:trelcray ${debouncedName}in:name sort:${isSort}-asc`;

  const { data, loading, error } = useQuery<{ search: Irepositories }>(
    GET_REPOSITORIES_QUERY,
    {
      variables: { query: `${queryString}` },
    }
  );

  const repositories = data?.search.nodes ?? [];

  const { pagination, visibleResults, totalPages } = UseCreatePagination(
    repositories,
    5
  );

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
      {visibleResults.length > 0 ? (
        visibleResults?.map((repository, i) => {
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
        <div className="h-full border-b-[1px]">
          <p className="ml-3 py-6 font-bold">Has no data to show!</p>
        </div>
      )}
      {visibleResults.length > 0 && (
        <div className="mt-2 flex w-full justify-end gap-4">
          <Button
            disabled={pagination.active === 1}
            onClick={pagination.previous}
          >
            Prev
          </Button>
          <Button
            disabled={pagination.active === totalPages}
            onClick={pagination.next}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
