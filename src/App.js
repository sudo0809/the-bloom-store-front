import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='contact' element={<Contact />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
    </>
  )
)

export default App;
