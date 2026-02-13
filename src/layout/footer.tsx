import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { CONTACT } from '@/constants/contact'

const Footer = () => {
    return (
        <Fragment>
            <footer className='footerMain'>
                <div className="container">
                    <h1>Pintar Sharma</h1>
                    <h4>Software Developer</h4>

                    <p>
                        I build fast, modern, and scalable web applications using React, Next.js,
                        Node.js, and MongoDB. Passionate about clean UI, strong performance, and
                        solving real-world problems with technology.
                    </p>

                    <motion.div
                        className="bannerButton"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{ justifyContent: 'center' }}
                    >
                        <motion.a
                            href={`tel:${CONTACT.PHONE}`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='bannerCallBtn'>Call Now</button>
                        </motion.a>

                        <motion.a
                            href={'/our-projects'}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <button className='getProjectBtn'>View Projects</button>
                        </motion.a>
                    </motion.div>

                    <ul className="footerIcon">
                        <li>
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
                    </ul>

                </div>
            </footer>

        </Fragment>
    )
}

export default Footer
