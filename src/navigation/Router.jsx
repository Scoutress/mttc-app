import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage.jsx";
import Routes from "./Routes";
import Root from "./Root";
// import HomePage from "../pages/home-page/HomePage";

const Router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // {
      //   path: Routes.repairPage.link,
      //   element: <RepairPage />,
      // },
      // {
      //   path: Routes.inputPage.link,
      //   element: <InputPage />,
      // },
      // {
      //   path: Routes.partsPage.link,
      //   element: <PartsPage />,
      // },
      // {
      //   path: Routes.salaryPage.link,
      //   element: <SalaryPage />,
      // },
      // {
      //   path: Routes.activeRepairsPage.link,
      //   element: <ActiveRepairsPage />,
      // },
      // {
      //   path: Routes.repairsSharingPage.link,
      //   element: <RepairsSharingPage />,
      // },
      // {
      //   path: Routes.personalWarehousePage.link,
      //   element: <PersonalWarehousePage />,
      // },
      {
        path: Routes.errorPage.link,
        element: <ErrorPage />,
      },
    ],
  },
]);

export default Router;
