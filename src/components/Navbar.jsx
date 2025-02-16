import { Link, NavLink } from "react-router-dom";
import { useStickyNav } from "../hooks/useStickyNav";
import Logo from "./Logo";
import { motion } from "framer-motion";

const variants = {
  offScreen: {
    y: "-140%",
  },
  onScreen: {
    y: 0,
  },
};

const navButtonVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: 5,
  },
};

const navLinks = {
  events: "/",
  "my tickets": "/my-tickets",
  about: "/about",
};
const MotionLink = motion(Link);
const MotionNavLink = motion(NavLink);

const Navbar = () => {
  const isHidden = useStickyNav();
  return (
    <motion.nav
      variants={variants}
      animate={isHidden ? "offScreen" : "onScreen"}
      className={`border-primary-dark font-myeongjo bg-background fixed top-0 left-1/2 z-[1000] mt-6 flex w-[calc(100%-48px)] max-w-6xl -translate-x-1/2 items-center justify-between gap-3 rounded-3xl border px-4 py-3`}
    >
      <Logo />
      <ul className="nav-list hidden items-center text-lg sm:flex">
        {Object.entries(navLinks).map(([name, link]) => (
          <li key={name}>
            <MotionNavLink
              to={link}
              whileHover={{
                scale: 1.05,
              }}
              className={({ isActive }) =>
                `block p-2.5 capitalize ${isActive ? "text-light" : "text-neutral active:scale-95"}`
              }
            >
              {name}
            </MotionNavLink>
          </li>
        ))}
      </ul>
      <div className="">
        <MotionLink
          initial="initial"
          whileHover="animate"
          whileTap={{ scale: 0.95 }}
          to={navLinks["my tickets"]}
          className="text-neutral-dark flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 uppercase"
        >
          My Tickets
          <motion.svg
            width="18"
            height="8"
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            variants={navButtonVariants}
          >
            <path
              d="M1 3.5C0.723858 3.5 0.5 3.72386 0.5 4C0.5 4.27614 0.723858 4.5 1 4.5V3.5ZM17.3536 4.35355C17.5488 4.15829 17.5488 3.84171 17.3536 3.64645L14.1716 0.464466C13.9763 0.269204 13.6597 0.269204 13.4645 0.464466C13.2692 0.659728 13.2692 0.976311 13.4645 1.17157L16.2929 4L13.4645 6.82843C13.2692 7.02369 13.2692 7.34027 13.4645 7.53553C13.6597 7.7308 13.9763 7.7308 14.1716 7.53553L17.3536 4.35355ZM1 4.5L17 4.5V3.5L1 3.5V4.5Z"
              fill="#0A0C11"
            />
          </motion.svg>
        </MotionLink>
      </div>
    </motion.nav>
  );
};

export default Navbar;
