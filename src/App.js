import "./App.css";
import React from "react";
// or import { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loading from "./pages/Loading";
const LazySharedPage = React.lazy(() => import("./pages/SharedPage"));
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyMenu = React.lazy(() => import("./pages/Menu"));
const LazyReserve = React.lazy(() => import("./pages/Reserve"));
const LazyError = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazySharedPage />
              </React.Suspense>
            }
          >
            {/* the index will always match the path="/" */}
            <Route
              index
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyHome />
                </React.Suspense>
              }
            />
            <Route
              path="about"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyAbout />
                </React.Suspense>
              }
            />
            <Route
              path="menu"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyMenu />
                </React.Suspense>
              }
            />
            <Route
              path="reserve"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyReserve />
                </React.Suspense>
              }
            />
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyError />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
