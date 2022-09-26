import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/loading";
import useSeeProfile from "../hooks/useSeeProfile";
import Home from "../screens/home";
import DashBoard from "./dashboard";

interface RouteInfo {
  path: string;
  element: React.ReactNode;
}

const customerRoutes: RouteInfo[] = [{ path: "/", element: <Home /> }];

const ownerRoutes: RouteInfo[] = [{ path: "/", element: <DashBoard /> }];

const getRoutes = (routes: RouteInfo[]): ReactNode[] => {
  return routes.map((route, index) => (
    <Route key={index} path={route.path} element={route.element} />
  ));
};

const PrivateRouter = () => {
  const { data, loading } = useSeeProfile();
  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Routes>
        {data?.seeProfile.result?.coffeeShop?.id
          ? getRoutes(ownerRoutes)
          : getRoutes(customerRoutes)}
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRouter;
