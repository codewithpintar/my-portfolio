import { motion } from 'framer-motion'
import React, { Fragment } from 'react'

const Timeline = () => {
    const experiences = [
        {
            year: "2023 - Present",
            title: "Full Stack Developer",
            company: "Freelance",
            description: "Building modern web applications for clients worldwide. Specializing in React, Next.js, Node.js, and MongoDB stack."
        },
        {
            year: "2022 - 2023",
            title: "Web Developer",
            company: "Fieldking",
            description: "Developed warranty activation system and corporate website. Implemented OTP authentication, admin dashboards, and responsive UI."
        },
        {
            year: "2021 - 2022",
            title: "Frontend Developer",
            company: "BetterLYF Wellness",
            description: "Created wellness platform with therapist booking system, payment integration, and real-time chat support."
        },
        {
            year: "2020 - 2021",
            title: "Junior Developer",
            company: "Various Projects",
            description: "Started professional journey building websites and learning modern web technologies. Focused on HTML, CSS, JavaScript, and PHP."
        }
    ]

    return (
        <Fragment>
            <section className='timelineSection'>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Experience Timeline
                    </motion.h2>

                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    <div className="timelineContainer">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                className="timelineItem"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="timelineContent">
                                    <span className="timelineYear">{exp.year}</span>
                                    <h3>{exp.title}</h3>
                                    <h4>{exp.company}</h4>
                                    <p>{exp.description}</p>
                                </div>
                                <div className="timelineDot"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Timeline
