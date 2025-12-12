import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

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
                            href="tel:8920297423"
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


                        {/* <motion.button className='getProjectBtn' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                     View Project
                                   </motion.button> */}
                    </motion.div>

                    <ul className="footerIcon">
                        <li>
                            {/* Email */}
                            <Link href="mailto:devpintar22@gmail.com">
                                <span><MdEmail /></span>
                            </Link>
                            {/* GitHub */}
                            <Link href="https://github.com/codewithpintar" target="_blank">
                                <span><FaGithub /></span>
                            </Link>
                            {/* LinkedIn */}
                            <Link href="https://www.linkedin.com/in/pintar1994/" target="_blank">
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
