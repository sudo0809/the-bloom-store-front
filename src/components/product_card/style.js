import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
    width: 250px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
`

export const CardLink = styled(Link)`
    text-decoration: None;
`

export const CardUpperDiv = styled.div`
    height: 300px;
`

export const CardImg = styled.img`
    object-fit: cover;
    max-width: 100%;
    height: 100%
`

export const CardBottomDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`

export const CardBottomLeftDiv = styled.div`
    color: black;
`

export const ProductName = styled.div`
    font-weight: 700;
`

export const CartImg = styled.img`
    width: 30px;
    height: 30px;
`
