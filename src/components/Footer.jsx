import React from 'react';
import { NavLink } from 'react-router-dom';
import {Button} from "../styles/Button";
import styled from 'styled-components';
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (<Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>
                    <div>
                        <Button className='btn hireme-btn'>
                            <NavLink to="/contact">
                                GetStarted
                            </NavLink>
                        </Button>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Adithya N G</h3>
                        <p>We are committed to providing our customers with exceptional service, competitive prices, and a hassle-free shopping experience.</p>
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe to get more updates</h3>
                        <form action="#">
                            <input type="email" name="email" placeholder='Email' />
                            <input type="submit" style={{backgroundColor:"rgb(33, 85, 205)"}} value="Subscribe" />
                        </form>
                    </div>
                    <div className="footer-socials">
                        <h3>Follow us</h3>
                        <div className="footer-social--icons">
                            <div className="icons">
                            <a href="https://www.linkedin.com/in/adithya-ng-baba34226/" target='_blank' rel="noopener noreferrer">
                            <FaLinkedin className='icons' />
                            </a>
                            </div>
                            <div className="icons">
                            <a href="https://www.instagram.com/__adithya_n__g/" target='_blank' rel="noopener noreferrer">
                            <FaInstagram className='icons' />
                            </a>
                            </div>
                            <div className="icons">
                            <a href="https://twitter.com/_Adithya_n_g" target='_blank' rel="noopener noreferrer">
                            <FaTwitter className='icons' />
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call us</h3>
                        <h3>+91 6362223700</h3>
                    </div>
                </div>
                <div className="footer-bottom--section">
                    <hr/>
                    <div className="container grid grid-two-column">
                        <p>@{new Date().getFullYear} Adithya N G. All rights reserved </p>
                        <div>
                            <p>
                                PRIVACY POLICY
                            </p>
                            <p>
                                TERMS & CONDITIONS
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
    </Wrapper>

  )
};
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;
      .grid div:last-child {
        justify-self: center;
      }
    }
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;