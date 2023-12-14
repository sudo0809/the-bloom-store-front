import React, { useContext } from 'react'
import useFetch from '../../hooks/useFetch';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthProvider';
import { Button, HeaderContainer, NavLinkContainer, NavLinkItems, NavLinkTag, RightSideDiv } from './style';

function AdminHeader() {

    const { setAuth, isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const useFetchResp = useFetch('logout', 'GET', {}, false);

    const handleLogout = () => {
        console.log("user wants to logout");
        useFetchResp.fetchData();
        localStorage.removeItem('token');
        setAuth({});
        setIsLoggedIn(false)
    }




    return (
        <HeaderContainer>
            <div className="logo">Admin</div>
            <NavLinkContainer>
                <NavLinkItems><NavLinkTag to="/products">Plants</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/create-product">Add Product</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/seeds">Seeds</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/accesories">Accessories</NavLinkTag></NavLinkItems>
            </NavLinkContainer>
            <RightSideDiv>
                {
                    isLoggedIn ?
                        <Button onClick={handleLogout}>Logout</Button> :
                        <Link to={'/login'}>
                            <Button>Login</Button>
                        </Link>
                }
            </RightSideDiv>


        </HeaderContainer>
    )
}

export default AdminHeader