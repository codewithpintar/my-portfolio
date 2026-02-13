import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import { FaBarsStaggered, FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { IoCloseSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { CONTACT } from '@/constants/contact'

const Header = () => {

    const [sideOpen, setSideOpen] = useState(false)

    useEffect(() => {
        document.body.style.overflow = sideOpen ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [sideOpen]);

    return (
        <Fragment>
            <header className='desktopHeader'>
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <Link href={'/'}>
                                <h2>PINTAR</h2>
                            </Link>
                        </div>
                        <ul className='menu'>
                            <Link href={'/'}>
                                <li>Home</li>
                            </Link>
                            <Link href={'/about-us'}>
                                <li>About Us</li>
                            </Link>
                            <Link href={'/our-projects'}>
                                <li>Our Projects</li>
                            </Link>
                            <Link href={`tel:${CONTACT.PHONE}`}>
                                <li className='callButton'>
                                    Call Now
                                </li>
                            </Link>

                        </ul>
                    </div>
                </div>
            </header>
            <div className="mobileHeader">
                <div className="mobileLog">
                    <Link href={'/'}>
                        <h2>PINTAR</h2>
                    </Link>
                </div>
                <div className="mobileMenu">
                    {!sideOpen && (
                        <span onClick={() => setSideOpen(true)}>
                            <FaBarsStaggered />
                        </span>
                    )}
                    {sideOpen && (
                        <span onClick={() => setSideOpen(false)}>
                            <IoCloseSharp />
                        </span>
                    )}
                </div>
            </div>
            {sideOpen && (
                <motion.ul
                    className="sideMenuList"
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "-100%" }}
                    transition={{ duration: 0.3 }}
                >
                    <Link href={'/'}>
                        <li>Home</li>
                    </Link>
                    <Link href={'/about-us'}>
                        <li>About Us</li>
                    </Link>
                    <Link href={'/our-projects'}>
                        <li>Our Projects</li>
                    </Link>

                    <li className='contactIcon'>
                        <Link href={`mailto:${CONTACT.EMAIL}`}>
                            <span><MdEmail /></span>
                        </Link>
                        <Link href={CONTACT.GITHUB} target="_blank" rel="noopener noreferrer">
                            <span><FaGithub /></span>
                        </Link>
                        <Link href={CONTACT.LINKEDIN} target="_blank" rel="noopener noreferrer">
                            <span><FaLinkedinIn /></span>
                        </Link>
                    </li>
                </motion.ul>
            )}
        </Fragment>
    )
}

export default Header
