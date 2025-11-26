import { NewtonsCradle } from "@uiball/loaders";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

type RouteModel = Readonly<{
  path: string;
  name: string;
  component: React.LazyExoticComponent<any>;
}>;

export const routesToPages: RouteModel[] = [
  {
    path: "/",
    name: "home",
    component: React.lazy(() => import("../pages/wishlist/wishlist-page")),
  },
  {
    path: "/sint",
    name: "sint",
    component: React.lazy(() => import("../pages/sint/sint-page")),
  },
  {
    path: "/wishlist",
    name: "whishlist",
    component: React.lazy(() => import("../pages/wishlist/wishlist-test-page")),
  },
];

export const renderPages = (routes: RouteModel[]) => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={
            <Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NewtonsCradle size={100} speed={1.4} color="#ee8677" />
                </div>
              }
            >
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  </BrowserRouter>
);
