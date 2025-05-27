import { motion } from 'framer-motion';

const directions = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

const FadeInSection = ({ children, delay = 0,  direction = 'up' }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default FadeInSection;