import { motion } from "framer-motion";


export default function MotionText({ text, className }: any) {
    return (
        <motion.h1
            className={className}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            {text}
        </motion.h1>
    );
}