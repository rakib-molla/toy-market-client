import React from 'react';
import logo from '../../../../public/image/logo.jpg';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='mt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Address
                    </span>
                    <a className="link link-hover">Dhaka Bangladesh —</a>
                    <a className="link link-hover">785 15h Street, Office 478
                    </a>
                    <a className="link link-hover">Uttora Sector-12, De 81566

                    </a>
                    <a className="link link-hover">+8801700000</a>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
                <div className="items-center grid-flow-col">
                    <img src={logo} className='h-10 w-10' alt="logo" />
                    <p>Toy Store Ltd. <br />Providing reliable tech since 1992</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <Link target='blank' to="https://www.facebook.com/profile.php?id=100003378672202"> <FaFacebook className='h-6 w-6'/> </Link>
                        <Link target='blank' to="https://www.instagram.com/rakib9490/"> <FaInstagram className='h-6 w-6'/> </Link>
                        <Link target='blank' to="https://twitter.com/home"> <FaTwitter className='h-6 w-6'/> </Link>
                        <Link target='blank' to="https://www.youtube.com/"> <FaYoutube className='h-6 w-6'/> </Link>
                    </div>
                </div>
            </div>

            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;