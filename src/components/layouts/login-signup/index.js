import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container, HomeLink } from './style'

function LoginSignupLayout() {
    return (
        <Container>
            <HomeLink to="/">
                <h1>The Bloom Store</h1>
            </HomeLink>
            <Outlet />
        </Container>
    )
}

export default LoginSignupLayout;