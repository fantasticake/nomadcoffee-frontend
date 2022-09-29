import { gql } from "@apollo/client";
import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/loading";
import { useSeeProfileQuery } from "../generated/graphql";
import CreateShop from "../screens/createShop";
import DeleteShop from "../screens/deleteShop";
import EditShop from "../screens/editShop";
import Home from "../screens/home";
import ShopDetail from "./shopDetail";

gql`
  query SeeProfile {
    seeProfile {
      ok
      result {
        id
        username
        email
        coffeeShop {
          id
        }
      }
      error
    }
  }
`;

interface RouteInfo {
  path: string;
  element: React.ReactNode;
}

const customerRoutes: RouteInfo[] = [{ path: "/add", element: <CreateShop /> }];

const ownerRoutes: RouteInfo[] = [
  { path: "/shop/:id/edit", element: <EditShop /> },
  { path: "/shop/:id/delete", element: <DeleteShop /> },
];

const getRoutes = (routes: RouteInfo[]): ReactNode[] => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};

const PrivateRouter = () => {
  const { data, loading } = useSeeProfileQuery();
  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/shop/:id"} element={<ShopDetail />} />
        {data?.seeProfile.result?.coffeeShop?.id
          ? getRoutes(ownerRoutes)
          : getRoutes(customerRoutes)}
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRouter;
