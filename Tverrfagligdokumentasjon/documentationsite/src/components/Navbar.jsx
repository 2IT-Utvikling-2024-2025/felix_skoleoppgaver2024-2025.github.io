import React, { useState, useEffect } from 'react'
import { FiAlignJustify, FiX } from "react-icons/fi";
import { motion, stagger } from 'framer-motion';


const Navbar = ({ setPage }) => {

    const [open, setOpen] = useState(true);



    return (
        <>


            <FiAlignJustify size={40} className='primary def-padding pointer' onClick={() => setOpen(!open)} style={{ position: "absolute", left: "0px", top: "20px" }} />

            <motion.nav


                animate={open ? "open" : "closed"}



                variants={{ open: { width: "300px", transition: { staggerChildren: 0.5 } }, closed: { width: "0px", transition: { delay: 0.2 } } }}


                className='navbar '>
                <motion.div

                    animate={open ? "open" : "closed"}

                    variants={{ open: { opacity: 1, y: 0, transition: { delay: 0.2, staggerChildren: 0.5 } }, closed: { opacity: 0, y: -20, zIndex: -10 } }}

                    className='navbar-header margin-top '>
                    <FiX size={40} className='primary pointer' onClick={() => setOpen(!open)} style={{ position: "relative", left: "10px" }} /><motion.h1

                        variants={{ open: { opacity: 1, y: 0 }, closed: { opacity: 0, y: -20 } }}

                        className='header-1 roboto-bold primary'>Navigasjon</motion.h1>
                </motion.div>
                <motion.ul

                    variants={{ open: { transition: { staggerChildren: 0.5 } }, closed: { transition: { staggerChildren: 0.2 } } }}

                    animate={open ? "open" : "closed"}

                    className=''>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("introduction")}>Introduction</p></motion.li>

                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("planlegging")}>Planlegging</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("install")}>Installere ISO på USB</p></motion.li>

                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("booting")}>Boote Windows fra USB </p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("kablet")}>Koble opp mot kablet nettverk</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("ip")}>Konfigurere IP Adresser for PCene</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("ping")}>Åpne for ping requests</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("ftp")}>Sette opp en FTP server</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("fwkonfig")}>Konfigurere Firewall for FTP server</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("refleksjon")}>Refleksjon</p></motion.li>
                    <motion.li

                        variants={{ open: { opacity: 1, x: 0, transition: { delay: 0.3 } }, closed: { opacity: 0, x: -20 } }}

                        animate={open ? "open" : "closed"}

                        className='paragraph-1'><p className='primary pointer' onClick={() => setPage("guide")}>Brukerveiledning</p></motion.li>
                </motion.ul>
            </motion.nav >
        </>
    )
}

export default Navbar