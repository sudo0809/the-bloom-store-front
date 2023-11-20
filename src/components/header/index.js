import { useState } from "react";
import { NavLinkTag, HeaderContainer, NavLinkContainer, NavLinkItems, RightSideDiv, Button, } from "./style";
// import Modal from "../modal";
import ReactModal from "react-modal";
import Login from "../login";
import Signup from "../signup";

const Header = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [isLoginModal, setIsLoginModal] = useState(true);

    const handleModalOpen = () => {
        setModalOpen(true)
    };

    const modalStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: '#f0f0f0',
        }
    };
    return (
        <HeaderContainer>
            <div className="logo">Logo</div>
            <NavLinkContainer>
                <NavLinkItems><NavLinkTag to="/">Home</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/plants">Plants</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/seeds">Seeds</NavLinkTag></NavLinkItems>
                <NavLinkItems><NavLinkTag to="/accesories">Accessories</NavLinkTag></NavLinkItems>
            </NavLinkContainer>
            <RightSideDiv>
                <Button onClick={handleModalOpen}>Login</Button>
            </RightSideDiv>
            <ReactModal
                isOpen={modalOpen}
                onRequestClose={() => { setModalOpen(false) }}
                style={modalStyle}
                contentLabel="Signin Modal"
            >
                {isLoginModal ?
                    <Login
                        isLoginModal={() => setIsLoginModal(false)}
                        closeModal={() => setModalOpen(false)} /> :
                    <Signup
                        isLoginModal={() => setIsLoginModal(true)}
                        closeModal={() => setModalOpen(false)} />
                }
            </ReactModal>
        </HeaderContainer>
    )
}

export default Header;