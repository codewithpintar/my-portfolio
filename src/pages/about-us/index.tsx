import Footer from '@/layout/footer'
import Header from '@/layout/header'
import React, { Fragment } from 'react'
import styles from '../../styles/modules/aboutUs.module.css'
import { motion } from 'framer-motion'

const AboutUs = () => {
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
                        About Us
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
                        Transforming ideas into modern, functional, and beautiful digital experiences.
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

            <section className={styles.objectiveSection}>
                <div className="container">

                    {/* Heading Animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Objective
                    </motion.h2>

                    {/* HR Animation */}
                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Paragraph Animation */}
                    <motion.p
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={styles.objectiveText}
                    >
                        My objective is to grow as a highly capable Software Developer and work on meaningful
                        products that make a real difference. I want to be part of a team where I can contribute
                        with clean code, problem-solving, and creative thinking. My goal is to build applications
                        that are fast, stable, and genuinely useful for users.
                        <br /><br />
                        I am constantly improving my skills, learning new tools, and understanding better ways
                        to design and develop modern software. I want to take on challenging projects, learn
                        from experienced people, and build a strong, long-term career where I add real value
                        through my work.
                    </motion.p>

                </div>
            </section>

            <section className={styles.objectiveSection}>
                <div className="container">

                    {/* Title Animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        About Me
                    </motion.h2>

                    {/* HR Line Animation */}
                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* FIRST PARAGRAPH */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        I’m Pintar Sharma, a passionate Software Developer who enjoys building practical,
                        user-friendly, and modern digital products. I work with technologies like Next.js,
                        React.js, Node.js, Express.js, MongoDB, and PHP. I love the entire process of
                        development—from understanding the idea, planning the structure, designing clean UI,
                        and writing code that runs smoothly.
                    </motion.p>

                    {/* SECOND PARAGRAPH */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.45 }}
                    >
                        I always focus on clarity, performance, and user experience. For me, development is
                        not just writing code, but creating something meaningful that works in the real world.
                        I believe in discipline, continuous learning, and personal growth. Every project I work
                        on helps me evolve as a better developer and a stronger person.
                    </motion.p>

                </div>
            </section>

            <section className={styles.objectiveSection}>
                <div className="container">

                    {/* Floating Appearing Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Tech Skills
                    </motion.h2>

                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Skills Grid (Stagger Animation) */}
                    <motion.ul
                        className={styles.skillsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.06,
                                },
                            },
                        }}
                    >
                        {[
                            "Next.js",
                            "React.js",
                            "JavaScript (ES6+)",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "REST APIs",
                            "PHP",
                            "MySQL",
                            "HTML5",
                            "CSS3",
                            "Framer Motion",
                            "Redux / State Management",
                            "Git & GitHub",
                            "Responsive UI/UX",
                            "Authentication (JWT / OTP)",
                            "API Integration",
                            "Deployment",
                            "Figma",
                            "Photoshop",
                            "Illustrator",
                            "Postman",
                            "Bootstrap",
                            "Tailwind"
                        ].map((skill, i) => (
                            <motion.li
                                key={i}
                                className={styles.skillItem}
                                variants={{
                                    hidden: { opacity: 0, y: 15, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                whileHover={{ scale: 1.05, y: -4 }}
                                transition={{ type: "spring", stiffness: 150 }}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </motion.ul>

                </div>
            </section>


            <section className={styles.objectiveSection}>
                <div className="container">

                    {/* Title Animation */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Soft Skills
                    </motion.h2>

                    {/* HR Animation */}
                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    {/* Skills Grid with Stagger Animation */}
                    <motion.ul
                        className={styles.skillsGrid}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.07,
                                },
                            },
                        }}
                    >
                        {[
                            "Problem Solving",
                            "Communication",
                            "Team Collaboration",
                            "Adaptability",
                            "Time Management",
                            "Critical Thinking",
                            "Creativity",
                            "Leadership",
                            "Attention to Detail",
                            "Self-Motivation",
                            "Decision Making",
                            "Project Ownership"
                        ].map((skill, i) => (
                            <motion.li
                                key={i}
                                className={styles.skillItem}
                                variants={{
                                    hidden: { opacity: 0, y: 15, scale: 0.9 },
                                    visible: { opacity: 1, y: 0, scale: 1 },
                                }}
                                whileHover={{ scale: 1.06, y: -4 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 160,
                                }}
                            >
                                {skill}
                            </motion.li>
                        ))}
                    </motion.ul>

                </div>
            </section>

            <Footer />
        </Fragment>
    )
}

export default AboutUs
