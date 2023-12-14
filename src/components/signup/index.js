import { useState } from "react";
import { ContainerHeader, Dash, DivLink, Input, Label, LoginDiv, SignupContainer, SignupForm, Submit } from "./style";
import useFetch from "../../hooks/useFetch";
import { Navigate } from "react-router-dom";

const Signup = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSignedUp, setIsSignedUp] = useState(false)

    const payload = {
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password
    }

    const { error, fetchData } = useFetch('create-user', 'POST', payload, false);


    const handleSubmit = async (e) => {
        // validate data from user and create a session if correct
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match. Please check again");
            return;
        }

        const fetchResponse = await fetchData()

        if (fetchResponse.data) {
            setIsSignedUp(true);
        }

    }

    return (
        <SignupContainer>
            <ContainerHeader>
                <h1>Signup</h1>
                <Dash></Dash>
            </ContainerHeader>
            <SignupForm onSubmit={handleSubmit} >
                {error ? error : <></>}
                {isSignedUp ? <Navigate to="/" replace={true} /> : <></>}
                <Label>
                    First Name
                    <Input
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                    />
                </Label>
                <Label>
                    Last Name
                    <Input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </Label>
                <Label>
                    Email
                    <Input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                <Label>
                    Confirm Password
                    <Input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Label>

                <Submit
                    type="submit"
                    value="Signup" />
            </SignupForm>
            <LoginDiv>
                <DivLink to="/login">Login</DivLink>
                <div>If you already have an account</div>
            </LoginDiv>
        </SignupContainer>
    )
};

export default Signup; 