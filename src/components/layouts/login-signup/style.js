import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`

export const HomeLink = styled(Link)`
    text-decoration: none;
    color: black;
`