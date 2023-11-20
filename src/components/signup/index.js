import { useState } from "react";
import { CloseImg, ContainerHeader, DivLink, Input, LoginDiv, SignupContainer, SignupForm, Submit } from "./style";
import close_icon from '../../svgs/close_icon.svg';
import useFetch from "../../hooks/useFetch";

const Signup = ({ isLoginModal, closeModal }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const payload = {
        name: username,
        email: email,
        password: password
    }

    const { result, error, fetchData } = useFetch('create-user', 'POST', payload, false);


    const handleSubmit = (e) => {
        // validate data from user and create a session if correct
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password does not match. Please check again");
            return;
        }

        const fetchResult = fetchData();
        console.log('fetchResult => ', fetchResult);
        console.log('error => ', error);

    };

    return (
        <SignupContainer>
            <ContainerHeader>
                <h1>Signup</h1>
                <CloseImg src={close_icon} alt="X" onClick={closeModal} />
            </ContainerHeader>
            <SignupForm onSubmit={handleSubmit} >
                <Input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Name" />
                <Input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" />
                <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" />
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password" />
                <Submit
                    type="submit"
                    value="Signup" />
            </SignupForm>
            {result ? result : <h5>Loading...</h5>  }
            <LoginDiv>
                <DivLink onClick={isLoginModal}>Login</DivLink>
                <div>If you already have an account</div>
            </LoginDiv>
        </SignupContainer>
    )
};

export default Signup; 