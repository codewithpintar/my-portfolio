import { motion } from 'framer-motion'
import React, { Fragment } from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            role: "CEO, BetterLYF Wellness",
            image: "./images/avatar-1.png",
            text: "Pintar delivered an exceptional wellness platform that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient."
        },
        {
            name: "Amit Singh",
            role: "Manager, Fieldking",
            image: "./images/avatar-2.png",
            text: "Working with Pintar was a great experience. He built our warranty system with precision and delivered on time. Highly recommended for any web development project."
        },
        {
            name: "Priya Sharma",
            role: "Product Manager",
            image: "./images/avatar-3.png",
            text: "Pintar's ability to understand requirements and translate them into functional, beautiful applications is remarkable. He's a talented developer who truly cares about quality."
        }
    ]

    return (
        <Fragment>
            <section className='testimonialsSection'>
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        What Clients Say
                    </motion.h2>

                    <motion.hr
                        className="centerHrline"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "160px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    />

                    <motion.div
                        className="testimonialsGrid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="testimonialCard"
                                variants={{
                                    hidden: { opacity: 0, y: 30 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="quoteIcon">
                                    <FaQuoteLeft />
                                </div>
                                <p className="testimonialText">{testimonial.text}</p>
                                <div className="testimonialAuthor">
                                    <div className="authorInfo">
                                        <h4>{testimonial.name}</h4>
                                        <p>{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </Fragment>
    )
}

export default Testimonials
