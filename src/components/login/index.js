import { useState } from "react";
import { CloseImg, ContainerHeader, DivLink, Input, LoginContainer, LoginForm, SignupDiv, Submit } from "./style";
import close_icon from '../../svgs/close_icon.svg'
import useFetch from "../../hooks/useFetch";

const Login = ({ isLoginModal, closeModal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const payload = {
        email: username,
        password: password
    }

    const {result, error, fetchData} = useFetch('login-user', 'POST', payload)
    console.log(result, error, fetchData);

    const handleSubmit = (e) => {
        // validate data from user and create a session if correct
        e.preventDefault();

        fetchData((res) => {
            console.log(res)
        })
        

        console.log('username:: ', username);
        console.log('password:: ', password);

    };


    return (
        <LoginContainer>
            <ContainerHeader>
                <h1>Login</h1>
                <CloseImg src={close_icon} alt="X" onClick={closeModal} />
            </ContainerHeader>
            <LoginForm onSubmit={handleSubmit} >
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Email" />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <Submit
                    type="submit"
                    value="Login" />
            </LoginForm>
            <SignupDiv>
                <DivLink onClick={isLoginModal}>Create Account</DivLink>
                <div>If you don't have an account</div>
            </SignupDiv>
        </LoginContainer>
    )
};

export default Login;