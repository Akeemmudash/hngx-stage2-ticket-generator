import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { mapLocationtoStepNumber } from "../utils/mapLocationToStepNumber";
import { stepLinks } from "../data";

const FormStepLayout = ({ children }) => {
  const { pathname } = useLocation();
  const stepNumber = mapLocationtoStepNumber(pathname, stepLinks);
  const title = Object.keys(stepLinks)[stepNumber - 1] || "Ticket Selection";
  console.log("stepLinks", stepLinks);
  console.log("stepNumber", stepNumber);
  return (
    <article className="w-full">
      <header>
        <div className="mb-3 flex w-full items-baseline justify-between">
          <h1 className="font-myeongjo text-3xl capitalize">{title}</h1>
          <p className="text-light">
            {" "}
            <span>Step</span>{" "}
            <span aria-label="form progress">{stepNumber}/3</span>
          </p>
        </div>
        <motion.div
          aria-describedby="form progress"
          className="bg-secondary-light h-1 rounded-full"
        >
          <motion.span
            aria-label="progress bar"
            className="bg-primary block h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${(100 / 3) * stepNumber}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.span>
        </motion.div>
      </header>
      <section className="form-step__body">{children}</section>
    </article>
  );
};

export default FormStepLayout;
