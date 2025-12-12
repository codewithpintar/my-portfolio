import HomeBanner from '@/components/homeBanner'
import Footer from '@/layout/footer'
import Header from '@/layout/header'
import { motion } from 'framer-motion'
import React, { Fragment } from 'react'

const Home = () => {
  return (
    <Fragment>
      <Header />
      <HomeBanner />
      <section className='skillsSections'>
        <div className="container">
          <ul className='skillsList'>
            <li>HTML5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
        </div>
      </section>


      <section className='aboutUsSection'>
        <div className="container">
          <div className="aboutMain">
            {/* LEFT CONTENT */}
            <motion.div
              className="leftAbout"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h4 >About Me</h4>
              <hr className='hrLine' />
              <p>
                I’m Pintar Sharma, a developer who believes in building purposeful technology.
                I convert concepts into beautiful and functional products using modern frameworks like Next.js, React.js, Node.js, and MongoDB.
              </p>

              <h3>Clean design. Clean code. Real impact.</h3>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {[
                  "High-performance apps",
                  "APIs & backend systems",
                  "Dashboards",
                  "Business automation tools",
                  "E-commerce and wellness tech",
                  "Scalable architectures"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <h5>
                My mission is to build digital experiences that are fast, intuitive, and reliable — products people love to use.
              </h5>
            </motion.div>


            {/* RIGHT IMAGE */}
            <motion.div
              className="rightAbout"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img loading="lazy" src="./images/about-us-2.png" alt="About" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="ourProjectSection">
        <div className="container">

          <h4>Our Projects</h4>
          <hr className='centerHrline' />

          <h5>
            We build scalable digital products that solve real-world problems using modern web technologies.
          </h5>

          {/* 1st Project Start */}
          <div className="ourProjectMain">

            {/* LEFT CONTENT */}
            <motion.div
              className="leftOurProjects"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2>BetterLYF Wellness</h2>

              <motion.ul
                className='techUse'
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {["Node.js", "Express.js", "MongoDB", "Next.js", "HTML", "CSS"].map((tech, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>

              <p>
                <strong>
                  A wellness and counseling platform where users can explore therapists, book sessions, and access emotional well-being support services.
                </strong>
              </p>
              <p>
                The system includes secure authentication, session scheduling, chat support, and integrated payment features for a smooth user experience.
              </p>

              <motion.ol
                className='listOl'
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[
                  "User registration and secure login",
                  "Therapist listing with filters",
                  "Session booking system",
                  "Integrated payment gateway",
                  "Chat support and dashboard system"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ol>

              <motion.div
                className="bannerButton"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="tel:8920297423"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className='bannerCallBtn'>Call Now</button>
                </motion.a>

                <motion.a
                  href={'https://www.betterlyf.com/'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target='_blank'
                >
                  <button className='getProjectBtn'>View Project</button>
                </motion.a>

              </motion.div>

            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="rightOurProjects"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              animate={{ y: [0, -14, 0] }}
            >
              <img loading="lazy" src="./images/betterlyf-dash.png" alt="BetterLYF Clone Preview" />
            </motion.div>

          </div>
          {/* 1st Project End */}

          {/* 2nd Project Start */}
          <div className="ourProjectMain ourProjectMain2">

            {/* RIGHT IMAGE */}
            <motion.div
              className="rightOurProjects"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              animate={{ y: [0, -14, 0] }}
            >
              <img loading="lazy" src="./images/fieldking-dash.png" alt="Warranty System Preview" />
            </motion.div>


            {/* LEFT CONTENT */}
            <motion.div
              className="leftOurProjects"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >

              <h2>Fieldkin Warranty Activation System</h2>

              <motion.ul
                className='techUse'
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {["Node.js", "Express.js", "MongoDB", "Next.js", "HTML", "CSS"].map((tech, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -15 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>

              <p>
                <strong>
                  A secure warranty activation system where users log in using their mobile number, receive an OTP, and submit warranty requests with invoice details.
                </strong>
              </p>
              <p>
                Admins verify invoices, approve or reject requests, and users instantly receive email notifications along with a warranty certificate in their dashboard.
              </p>

              <motion.ol
                className='listOl'
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
              >
                {[
                  "Mobile number login with OTP verification",
                  "Warranty request submission with invoice upload",
                  "Admin approval/rejection with validation",
                  "Email notification for updates",
                  "User dashboard with downloadable warranty certificate"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ol>

              <motion.div
                className="bannerButton"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.a
                  href="tel:8920297423"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className='bannerCallBtn'>Call Now</button>
                </motion.a>

                <motion.a
                  href={'https://warranty.fieldking.com/warranty-activation'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target='_blank'
                >
                  <button className='getProjectBtn'>View Project</button>
                </motion.a>
              </motion.div>

            </motion.div>


          </div>
          {/* 2nd Project End */}

          {/* 3rd Project Start */}
          <div className="ourProjectMain">

            <motion.div
              className="leftOurProjects"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Fieldking Agricultural Equipment</h2>

              <motion.ul
                className='techUse'
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {["PHP", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"].map((tech, i) => (
                  <motion.li
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -15 }, visible: { opacity: 1, x: 0 } }}
                  >
                    {tech}
                  </motion.li>
                ))}
              </motion.ul>

              <p>
                <strong>
                  Fieldking is a product-focused agricultural equipment website built using PHP, HTML, and CSS, designed to showcase farm machinery in a clean and easy-to-browse layout.
                </strong>
              </p>

              <p>
                It features structured product categories, detailed product pages, responsive UI, and optimized performance to help users explore equipment effectively.
              </p>

              <motion.ol
                className='listOl'
                initial="hidden"
                whileInView="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {[
                  "Dynamic product pages using PHP",
                  "Clean and responsive UI",
                  "Category-based navigation",
                  "Fast loading & SEO-friendly structure",
                  "Optimized product display experience"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ol>

              <motion.div
                className="bannerButton"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >

                <motion.a
                  href="tel:8920297423"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button className='bannerCallBtn'>Call Now</button>
                </motion.a>

                <motion.a
                  href={'https://www.fieldking.com/'}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  target='_blank'
                >
                  <button className='getProjectBtn'>View Project</button>
                </motion.a>


                {/* <motion.button className='getProjectBtn' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  View Project
                </motion.button> */}
              </motion.div>
            </motion.div>

            <motion.div
              className="rightOurProjects"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              animate={{ y: [0, -14, 0] }}
            >
              <img loading="lazy" src="./images/fieldking.png" alt="Fieldking PHP Website Preview" />
            </motion.div>

          </div>
          {/* 3rd Project End */}

        
        </div>
      </section>

      <section className='expertiseSection'>
        <div className="container">
          <div className="expertiseMain">

            <motion.div
              className="rightExpertise"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img loading="lazy" src="./images/expertise.png" alt="Expertise" />
            </motion.div>

            {/* LEFT CONTENT */}
            <motion.div
              className="leftExpertise"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h4>My Expertise</h4>
              <hr className='hrLine' />

              <p>
                I specialize in creating modern, high-performance digital experiences.
                From clean UI designs to full-scale web applications, I turn ideas into
                elegant and functional products using cutting-edge technologies.
              </p>

              <h3>Design. Development. Performance.</h3>

              <motion.ul
                initial="hidden"
                whileInView="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {[
                  "Web Design (UI/UX)",
                  "Modern Web Development",
                  "Web Applications",
                  "Frontend Architecture",
                  "Backend APIs & Integrations",
                  "Responsive and Scalable Systems"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <h5>
                I focus on delivering high-quality, user-friendly, and performance-driven
                solutions that create real business growth.
              </h5>
            </motion.div>

            {/* RIGHT IMAGE */}


          </div>
        </div>
      </section>


      <Footer />
    </Fragment>
  )
}

export default Home
