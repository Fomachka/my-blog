import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Transition = ({ children }) => {
  const { asPath } = useRouter();

  const blogPageTransitionVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 },
    transition: {
      type: "tween",
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  };

  const selectedVariants = blogPageTransitionVariants;

  return (
    <div className="effect-1">
      <AnimatePresence initial={true} mode="wait">
        <motion.div
          key={asPath}
          initial={selectedVariants.initial}
          animate={selectedVariants.animate}
          exit={selectedVariants.exit}
          transition={selectedVariants.transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
