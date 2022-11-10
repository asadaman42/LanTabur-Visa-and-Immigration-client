import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center bg-secondary bg-opacity-25">
            <div className="container p-4 pb-0" >
                <section className="mb-4">
                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#3b5998' }}
                        role="button">
                        <FaFacebook />
                    </Link>

                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#55acee' }}
                        role="button">
                        <FaTwitter />
                    </Link>

                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#dd4b39' }}
                        role="button">
                        <FaGoogle />
                    </Link>

                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#ac2bac' }}
                        role="button">
                        <FaInstagram />
                    </Link>

                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#0082ca' }}
                        role="button">
                        <FaLinkedinIn />
                    </Link>

                    <Link
                        className="btn text-white btn-floating m-1"
                        style={{ backgroundColor: '#333333' }}
                        role="button">
                        <FaGithub />
                    </Link>
                </section >
            </div >

            <div className="text-center p-3" >
                © 2022 Copyright:
                <Link> developed by Asad</Link>
            </div >
        </footer >
    );
};

export default Footer;