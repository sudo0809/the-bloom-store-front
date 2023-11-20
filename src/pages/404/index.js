import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './style'

const PageNotFound = () => {
    return (
        <Container>
            <h1>404! Page not found</h1>
            <Link to='/'>Return to Home {'->'}</Link>
        </Container>
    )
}

export default PageNotFound