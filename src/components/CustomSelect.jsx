import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const options = Array.from({ length: 5 }, (_, i) => i + 1);

export default function CustomSelect() {
  const [selected, setSelected] = useState(() => options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKeyDown(event) {
      if (!isOpen) return;

      const currentIndex = options.indexOf(selected);
      if (event.key === "ArrowDown") {
        setSelected(options[(currentIndex + 1) % options.length]);
      } else if (event.key === "ArrowUp") {
        setSelected(
          options[(currentIndex - 1 + options.length) % options.length],
        );
      } else if (event.key === "Enter") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selected]);

  return (
    <div className="relative w-full" ref={selectRef}>
      <button
        className="not-even: border-secondary-dark flex w-full items-center justify-between rounded-xl border px-4 py-2 text-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z"
              fill="white"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="bg-light text-primary-dark absolute left-0 mt-2 mb-6 w-full overflow-hidden rounded-lg shadow-lg"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 ${
                selected === option
                  ? "bg-primary-light text-white"
                  : "hover:bg-overlay-primary"
              }`}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
}
