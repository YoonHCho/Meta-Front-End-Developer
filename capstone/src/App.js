import "./App.css";
import React from "react";
// or import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SharedPage from "./pages/SharedPage";
// import Home from "./pages/Home";
// import About from "./pages/About"; // line 11
// import Menu from "./pages/Menu";
// import Reserve from "./pages/Reserve";
// import ConfirmRes from "./pages/ConfirmRes";
// import Error from "./pages/Error";
import Loading from "./pages/Loading";
const LazySharedPage = React.lazy(() => import("./pages/SharedPage"));
const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyAbout = React.lazy(() => import("./pages/About"));
const LazyMenu = React.lazy(() => import("./pages/Menu"));
const LazyReserve = React.lazy(() => import("./pages/Reserve"));
const LazyConfirmRes = React.lazy(() => import("./pages/ConfirmRes"));
const LazyError = React.lazy(() => import("./pages/Error"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* HOME, ABOUT, MENU, RESERVATION, ORDER ONLINE LOGIN */}
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
              path="reserve-confirm"
              element={
                <React.Suspense fallback={<Loading />}>
                  <LazyConfirmRes />
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
      </BrowserRouter>
    </>
  );
}

export default App;
