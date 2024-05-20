import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Suspense } from "react";

import NoteOverview from "./note/overview";
import NoteDetail from "./note/detail";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<NoteOverview />} />
        <Route path="note/:noteId" element={<NoteDetail />} />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

const Layout = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <main className="mt-5">
            <div className="">
              <div>
                <Outlet />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
