import Footer from '@/layout/footer'
import Header from '@/layout/header'
import React, { Fragment } from 'react'
import styles from '../../styles/modules/ourProjects.module.css'
import { motion } from 'framer-motion'

const OurProjects = () => {
    return (
        <Fragment>
            <Header />
            <section className={styles.aboutBanner}>
                <div className="container">

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Projects
                    </motion.h1>

                    <motion.hr
                        className={styles.aboutHrLine}
                        initial={{ opacity: 0, width: "0%" }}
                        whileInView={{ opacity: 1, width: "160px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Sub Text */}
                    <motion.h5
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        Building modern, scalable, and user-centric web applications with clean design and powerful functionality.
                    </motion.h5>

                    {/* Banner Image Floating Animation */}
                    <motion.img
                        src="./images/about-banner-2.png"
                        alt="About Banner"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        animate={{
                            y: [0, -12, 0], // floating effect
                        }}
                        style={{ marginTop: "20px" }}
                    />
                </div>
            </section>

            <section className={styles.ourProjectSection}>
                <div className="container">

                    {/* Section Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Our Projects
                    </motion.h2>

                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    <motion.p
                        className={styles.projectDescription}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Explore a collection of real-world projects built with modern technologies.
                        Each project reflects my focus on clean design, strong performance, and
                        practical problem-solving to create meaningful digital experiences.
                    </motion.p>

                    {/* PROJECT CARDS WITH STAGGER ANIMATION */}
                    <motion.div
                        className={styles.ourProjectMain}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.12,  // animate each card one by one
                                },
                            },
                        }}
                    >

                        {/* CARD TEMPLATE (repeated) */}
                        {[
                            {
                                title: "BetterLYF Wellness Platform",
                                url: "https://www.betterlyf.com/",
                                img: "./images/betterlyf-dash.png",
                                tech: ["Node.js", "Express.js", "MongoDB", "Next.js", "HTML", "CSS"],
                                desc: "A mental wellness platform offering therapy sessions, emotional support, and self-help tools with secure user dashboards."
                            },

                            {
                                title: "Fieldking Warranty Activation Portal",
                                url: "https://warranty.fieldking.com/",
                                img: "./images/fieldking-dash.png",
                                tech: ["Node.js", "Express.js", "MongoDB", "Next.js", "HTML", "CSS"],
                                desc: "A warranty registration system that allows customers and dealers to activate product warranties with real-time data validation."
                            },

                            {
                                title: "Fieldking Agricultural Equipment Website",
                                url: "https://www.fieldking.com/",
                                img: "./images/fieldking.png",
                                tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
                                desc: "Corporate website showcasing agricultural machinery with optimized performance, multilingual content, and SEO enhancements."
                            },

                            {
                                title: "Beroni Agricultural Solutions",
                                url: "https://www.beroni.in/",
                                img: "./images/beroni.png",
                                tech: ["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
                                desc: "Brand website for Beroni farming equipment, built with responsive UI, fast navigation, and optimized product showcases."
                            },
                        ].map((project, i) => (
                            <motion.div
                                key={i}
                                className={styles.card}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.8, y: 20 },
                                    visible: { opacity: 1, scale: 1, y: 0 }
                                }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <img src={project.img} alt="Project" className={styles.cardImage} />

                                <div className={styles.cardOverlay}>
                                    <h3>{project.title}</h3>

                                    <h4>Technologies:</h4>
                                    <ul>
                                        {project.tech.map((t, index) => <li key={index}>{t}</li>)}
                                    </ul>

                                    <p>{project.desc}</p>

                                    <button
                                        className="getProjectBtn"
                                        onClick={() => window.open(project.url, "_blank")}
                                    >
                                        View Project
                                    </button>
                                </div>
                            </motion.div>
                        ))}

                    </motion.div>
                </div>
            </section>
            <Footer />
        </Fragment>
    )
}

export default OurProjects
