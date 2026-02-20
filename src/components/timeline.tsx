import { motion } from 'framer-motion'
import React, { Fragment } from 'react'

const Timeline = () => {
    const experiences = [
        {
            year: "2022 - Present",
            title: "Web Developer",
            company: "Fieldking & BetterLYF",
            description: "Building modern web applications for clients worldwide. Specializing in React, Next.js, Node.js, and MongoDB stack."
        },
        {
            year: "2021 - 2022",
            title: "Web Developer",
            company: "Wagnistrip Private Limited",
            description: "Developed a travel booking website for air tickets, holiday packages, and hotel reservations using PHP Laravel, HTML, CSS, and Bootstrap, ensuring responsive design and smooth user experience."
        },
       
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
