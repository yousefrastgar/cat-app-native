import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import styled from "styled-components";

const FooterText = styled.p`
    margin: 1.5rem 0;
    padding: 1rem 0;
    text-align: center;
    border-top: 1px solid #dee2e6;
`;

const Footer = () => {
    return (
        <FooterText>made with <FontAwesomeIcon icon={faHeart} color="#e31b23"/> by Yousef</FooterText>
    );
}

export default Footer;
