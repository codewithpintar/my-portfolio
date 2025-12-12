import { motion } from 'framer-motion'
import React, { Fragment } from 'react'

const HomeBanner = () => {
    return (
        <Fragment>
            <section className='homeBanner'>
                <div className="container">
                    <div className="mainBanner">
                        <motion.div
                            className="leftContent"
                            initial={{ opacity: 0, x: -60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <motion.h4
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                            >
                                Hello 👋🏻
                            </motion.h4>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                I'm Pintar Sharma
                            </motion.h1>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                A <strong style={{ color: '#4774f9' }}>Software Developer</strong>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                I build fast, modern, and scalable web applications using React, Next.js,
                                Node.js, and MongoDB. Passionate about clean UI, strong performance, and
                                solving real-world problems with technology.
                            </motion.p>

                            <motion.div
                                className="bannerButton"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.a
                                    href="tel:8920297423"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <button className='bannerCallBtn'>Call Now</button>
                                </motion.a>

                                <motion.button
                                    className='getProjectBtn'
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Get A Projects
                                </motion.button>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="rightContent"
                            initial={{ opacity: 0, x: 60, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/banner.png" alt="Banner" />
                        </motion.div>

                    </div>

                </div>
            </section>
        </Fragment>
    )
}

export default HomeBanner
