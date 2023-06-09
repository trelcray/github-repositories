import { Filters } from "../components/filters";
import { Repositories } from "../components/repositories";

export function Page() {
  return (
    <main className="flex flex-col px-3 py-2">
      <Filters />
      <Repositories />
    </main>
  );
}
