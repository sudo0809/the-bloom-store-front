import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignupContainer = styled.div`
    width: 400px;
    background: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, .2);
`

export const ContainerHeader = styled.div`
    padding-bottom: 10px;
`

export const Dash = styled.div`
    content: '';
    width: 100%;
    border-top: 1px solid #9c9c9c;
`

export const SignupForm = styled.form`
    display:flex;
    flex-direction: column;
`

export const Label = styled.label`
    display: flex;
    flex-direction: column;
`
export const Input = styled.input`
    padding: 0.6rem 0;
    margin: 0.5rem 0;
    text-indent: 1.5rem;
    border: 1px solid;
    border-radius: 8px;
`
export const Submit = styled.input`
    margin: 0.5rem 0;
    padding: 0.6rem 0;
    background-color: green;
    border-radius: 2rem;
    color: white;
`

export const LoginDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivLink = styled(Link)`
    cursor: pointer;
    color: green;
    padding-right: 0.4rem;
    text-decoration: None;
    font-weight: 800;
`