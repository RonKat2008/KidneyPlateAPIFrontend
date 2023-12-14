//import { Provider } from "react-redux";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import AboutUs from "./components/AboutUs";
import BrowseFoods from "./components/BrowseFoods";
import TermsAndPolicies from "./components/TermsAndPolicies";
import UsersFeedBack from "./components/UsersFeedBack";
import ContactUs from "./components/ContactUs";
const { Provider } = require("react-redux");

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/usersfeedback",
        element: <UsersFeedBack />,
      },
      {
        path: "/contact",
        element: <Footer />,
      },
      {
        path: "/browsefoods",
        element: <BrowseFoods />,
      },
      {
        path: "/termsandpolicies",
        element: <TermsAndPolicies />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
