import { motion } from "framer-motion";

interface MotionTextProps {
    text: string;
    className?: string;
}

export default function MotionText({ text, className }: MotionTextProps) {
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