import { Route, Routes } from "react-router-dom";

import { Page } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Page />} />
    </Routes>
  );
}
