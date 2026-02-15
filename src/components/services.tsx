import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { FaCode, FaMobile, FaServer, FaPaintbrush, FaDatabase, FaRocket } from 'react-icons/fa6'

const Services = () => {
    const services = [
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Building responsive, fast, and scalable web applications using modern technologies like React, Next.js, and TypeScript."
        },
        {
            icon: <FaMobile />,
            title: "Responsive Design",
            description: "Creating mobile-first, pixel-perfect designs that work seamlessly across all devices and screen sizes."
        },
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Developing robust APIs and server-side applications with Node.js, Express, and MongoDB for reliable performance."
        },
        {
            icon: <FaPaintbrush />,
            title: "UI/UX Design",
            description: "Designing intuitive and beautiful user interfaces with focus on user experience and modern design principles."
        },
        {
            icon: <FaDatabase />,
            title: "Database Design",
            description: "Architecting efficient database structures with MongoDB and MySQL for optimal data management and scalability."
        },
        {
            icon: <FaRocket />,
            title: "Performance Optimization",
            description: "Optimizing applications for speed, SEO, and user experience with best practices and modern techniques."
        }
    ]

    return (
        <Fragment>
            <section className='servicesSection'>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Services I Offer
                    </motion.h2>

                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    <motion.p
                        className='servicesDesc'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        Comprehensive web development solutions tailored to your business needs
                    </motion.p>

                    <motion.div
                        className="servicesGrid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="serviceCard"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="serviceIcon">
                                    {service.icon}
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </Fragment>
    )
}

export default Services
