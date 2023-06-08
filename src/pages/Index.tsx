import { Filters } from "../components/Filters";
import { Repositories } from "../components/Repositories";

export function Index() {
  return (
    <main className="flex flex-col px-3 py-2">
      <Filters />
      <Repositories />
    </main>
  );
}
