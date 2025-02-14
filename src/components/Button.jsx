import { cn } from "../utils/cn";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const Button = ({
  buttonVariant = "solid",
  buttonType,
  children,
  className,
  ...props
}) => {
  const buttonVariants = {
    solid: "bg-primary text-white",
    outline: "border-primary border text-primary",
  };
  const generalClasses = `px-6 block text-center align-middle font-myeongjo rounded-lg py-3 cursor-pointer flex-1`;
  const variantClasses =
    buttonVariants[buttonVariant] || "bg-primary text-white";

  return buttonType !== "link" ? (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(generalClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </motion.button>
  ) : (
    <MotionLink
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(generalClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </MotionLink>
  );
};

export default Button;
