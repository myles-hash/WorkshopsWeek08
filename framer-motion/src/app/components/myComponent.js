"use client";

import { motion } from "framer-motion";

export default function MyComponent() {
    return (
        <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        >
            <h1>Hell worl</h1>
        </motion.div>
    );
}