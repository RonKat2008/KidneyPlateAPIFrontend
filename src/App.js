//import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./assets/css/style.css";
import Body from "./components/Body";
import Head from "./components/Head";
import Footer from "./components/Footer";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import AboutUs from "./components/AboutUs";

const {Provider} = require('react-redux');

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
