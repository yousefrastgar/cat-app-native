import React from "react";
import styled, {keyframes} from "styled-components";
import Button from "../components/Button";
import headerBg from "../assets/images/headerbg.jpg";
import logo from "../assets/images/logo.png";

const Container = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
`;

const Hero = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100vh;
`;

const HeroImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    clip: rect(0, auto, auto, 0);
    background-image: url(${headerBg});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeroImageOverlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(121,85,72,0) 0%,rgba(121,85,72,0.17) 21%,rgba(121,85,72,0.5) 80%);
`;

const TitleIn = keyframes`
    0% {
        visibility: hidden;
        opacity: 0;
        transform: translateY(-25%);
    }
    100% {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

const HeroContent = styled.div`
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    z-index: 1;
    opacity: 0;
    text-align: center;
    animation: ${TitleIn} 800ms forwards ease-in-out 750ms;
    @media (max-width: 576px) {
        top: 15%;
    }    
`;

const Logo = styled.img`
    width: 50px;
`;

const HeroTitle = styled.h1`
    color: #FFFFFF;
    font-size: 60px;
    background: rgba(0,0,0,.25);
`;

const Header = () => {
    const scrollToGallery = () => {
        document.getElementById("home")?.scrollIntoView({behavior: "smooth"});
    }

    return (
        <Container>
            <Hero>
                <HeroImage>
                    <HeroImageOverlay/>
                    <HeroContent>
                        <HeroTitle>Welcome To The <Logo src={logo} alt="logo"/>Cats Gallery</HeroTitle>
                        <Button title="Explore Gallery" onClick={scrollToGallery}/>
                    </HeroContent>
                </HeroImage>
            </Hero>
        </Container>
    );
}

export default Header;
