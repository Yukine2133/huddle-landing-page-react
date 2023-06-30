export const slideIn = (direction: string, delay: number) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? "-100%" : direction === "right" ? "50%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      type: "spring",
      stiffness: 150,
      damping: 22,
    },
  },
});

export const variants = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        duration: 1,
        delay: 1,
      },
    },
  },
  children: {
    hidden: { opacity: 0, x: "-100%" },
    show: { opacity: 1, x: 0 },
  },
};
