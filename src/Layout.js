import { Outlet } from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"
import AuthContext from "./context/AuthProvider"
import { useContext } from "react"
import AdminHeader from "./components/admin-header"

const Layout = () => {
    const { auth } = useContext(AuthContext);

    return (
        auth?.role === 'seller' ?
            (
                <>
                    <AdminHeader />
                    <Outlet />
                    <Footer />
                </>

            ) : (
                <>
                    <Header />
                    <Outlet />
                    <Footer />
                </>
            )

    )
}

export default Layout;