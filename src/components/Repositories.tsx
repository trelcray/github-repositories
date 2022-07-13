import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client";

interface repositories {
  id: string;
  name: string;
  description: string;
  updatedAt: any;
}

export function Repositories() {

  

  const REPOSITORY = gql`
  query REPO {
    repository(owner: "trelcray", name: "expo-agac") {
      id
      name
      description
      updatedAt
    }
  }
`;

const { data, loading } = useQuery<{repository: repositories}> ( REPOSITORY )
console.log(data?.repository.name)

if (loading) {
  return <p>carregando...</p>
}



  return (
    <div className="w-full h-full px-3 mt-4">
      <div className="border-y-[1px]">

        <section className="flex flex-row mt-4">
          <h1 className="
                    text-blue-500 
                    font-bold 
                    text-lg"
          >
            Titulo do repositorio
          </h1>

          <span className="flex items-center">
            <p className="
                        text-xs
                        border 
                        border-solid 
                        rounded-2xl 
                        px-2
                        ml-2"
            >
              Public
            </p>
          </span>

        </section>

        <p className="text-sm mb-2">Descrição</p>

        <p className="text-xs mb-4">update 16 days ago</p>

      </div>
      <p>{data?.repository.name}</p>
    </div>
  )
}
