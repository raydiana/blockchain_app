import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <h1 style={{ color: "black",
                textAlign: "center",
                marginTop: "-50px" }}>
                BeSport
            </h1>
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Career</Heading>
                        <FooterLink href="#">Opportunities</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
