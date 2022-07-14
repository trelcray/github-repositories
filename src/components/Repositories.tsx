interface repositoryProps {
  title: string;
  description: string;
  updatedAt: any;
  isPrivate: boolean;
}

export function Repositories(props: repositoryProps) {

  return (
    <div className="w-full h-full px-3">
      <div className="border-b-[1px]">

        <section className="flex flex-row mt-4">
          <h1 className="
                    text-blue-500 
                    font-bold 
                    text-lg"
          >
            {props.title}
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
              {props.isPrivate === true ? 'Privado' : 'Público'}
            </p>
          </span>

        </section>

        <p className="text-sm mb-2">{props.description}</p>

        <p className="text-xs mb-4">{props.updatedAt}</p>

      </div>
    </div>
  )
}
