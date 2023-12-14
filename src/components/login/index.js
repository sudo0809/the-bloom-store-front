import { useContext, useState } from "react";
import { ContainerHeader, Dash, DivLink, Input, Label, LoginContainer, LoginForm, SignupDiv, Submit } from "./style";
import useFetch from "../../hooks/useFetch";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    const payload = {
        email: username,
        password: password
    }

    const { setAuth,isLoggedIn, setIsLoggedIn } = useContext(AuthContext)

    const { error, fetchData } = useFetch('login', 'POST', payload)

    const handleSubmit = async (e) => {
        // validate data from user and create a session if correct
        e.preventDefault();

        try{
            const fetchResponse = await fetchData()
            if (fetchResponse.error) {
                console.log('error :: ',fetchResponse.error)
            } else {
                setIsLoggedIn(true);
                setAuth({role: fetchResponse.data.role});
                localStorage.setItem('token', `Bearer ${fetchResponse.data.token}`)
            }
        } catch (err) {
            console.log(err);
        } 

    }

    return (
        <LoginContainer>
            <ContainerHeader>
                <h1>Login</h1>
                <Dash></Dash>
            </ContainerHeader>
            <LoginForm onSubmit={handleSubmit} >
                {error && <p>{error}</p>}
                {isLoggedIn && (
                    <Navigate to="/" replace={true} />
                )}
                <Label>
                    Email
                    <Input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Label>
                <Label>
                    Password
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Label>
                <Submit
                    type="submit"
                    value="Login" />
            </LoginForm>
            <SignupDiv>
                <DivLink to="/signup">Create Account</DivLink>
                <div>If you don't have an account</div>
            </SignupDiv>
        </LoginContainer>
    )
};

export default Login;