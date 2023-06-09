import { FC } from "react";

import { format } from "date-fns";

import { Irepository } from "../@types/repository";

export const Repository: FC<Irepository> = ({
  description,
  isPrivate,
  title,
  updatedAt,
}) => {
  const dateFormatted = format(
    new Date(updatedAt),
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm"
  );

  return (
    <div className="h-full w-full">
      <div className="border-b-[1px]">
        <section className="mt-2 flex flex-row">
          <h1 className="text-lg font-bold text-blue-500">{title}</h1>

          <span className="flex items-center">
            <p className="ml-2 rounded-2xl border border-solid px-2 text-xs">
              {isPrivate === true ? "Private" : "Public"}
            </p>
          </span>
        </section>

        <p className="mb-2 text-sm">{description}</p>

        <p className="mb-2 text-xs">{dateFormatted}</p>
      </div>
    </div>
  );
};
