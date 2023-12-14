import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
    display: flex;
    height: 75px;
    padding: 0 7rem;
    justify-content: space-between;
    align-items: center;
`

export const NavLinkContainer = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
`
export const NavLinkItems = styled.li`
    padding: 0 12px;
    text-decoration: none;
`
export const NavLinkTag = styled(NavLink)`
    text-decoration: none;
`
export const RightSideDiv = styled.div`
    display: flex;
`
export const Button = styled.button`

`