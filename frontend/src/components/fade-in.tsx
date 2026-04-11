'use client';

import { motion } from 'framer-motion';

export function FadeIn({
    children,
    delay = 0,
    className = '',
    direction = 'up'
}: {
    children: React.ReactNode,
    delay?: number,
    className?: string,
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}) {
    const getInitialY = () => {
        if (direction === 'up') return 30;
        if (direction === 'down') return -30;
        return 0;
    };

    const getInitialX = () => {
        if (direction === 'left') return 30;
        if (direction === 'right') return -30;
        return 0;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: getInitialY(), x: getInitialX() }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
