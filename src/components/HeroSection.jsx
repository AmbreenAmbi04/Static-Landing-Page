import { motion } from 'framer-motion';

const HeroSection = () => {
return (
    <motion.div class="container mt-5 mb-4">
        <motion.div class="row text-center">
            <motion.h2 className= "fw-bold fs-1 text-danger">Welcome to Our Service</motion.h2>
        <motion.p className= "fw-semibold fs-4 text-muted mt-4 mb-5">
            Discover our range of products and services designed to deliver value, innovation, and reliability. We provide tailored solutions to meet your needs, ensuring quality, efficiency, and customer satisfaction at every step.
        </motion.p>
        <motion.div className= "d-flex justify-content-center">
            <motion.button class= "btn btn-danger w-auto fs-4 d-inline-block">Get Started</motion.button>
        </motion.div>
        </motion.div>
        
    </motion.div>
)
}

export default HeroSection;