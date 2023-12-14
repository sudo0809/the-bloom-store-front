import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Contact from "./pages/contact";
import PageNotFound from "./pages/404";
import Login from "./components/login";
import Signup from "./components/signup";
import RoleContextLayout from "./components/layouts/role-context";
import LoginSignupLayout from "./components/layouts/login-signup";
import CreateProduct from "./pages/create-product";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RoleContextLayout />} >
        
        <Route element={<LoginSignupLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route >

        <Route element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='contact' element={<Contact />} />

          <Route path="create-product" element={<CreateProduct />} />
        </Route>

      </Route>



      <Route path='*' element={<PageNotFound />} />
    </>
  )
)

export default App;
