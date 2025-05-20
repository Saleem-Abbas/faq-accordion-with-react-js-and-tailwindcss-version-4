import React, { useRef } from "react";

const FAQItem = ({ id, question, answer, onClick, isOpen }) => {
  const answerRef = useRef(null);

  return (
    <div
      className="border-b border-gray-200 dark:border-gray-700 last:border-none transition-colors duration-300 hover:bg-gradient-to-r hover:from-gray-50/50 hover:to-transparent dark:hover:from-gray-800/50 dark:hover:to-transparent"
      id={`faq-item-${id}`}
    >
      <button
        onClick={() => onClick(id)} // 👈 this line is important
        className="w-full py-5 px-4 flex items-center justify-between text-left focus:outline-none rounded-lg transition-all duration-200 cursor-pointer text-gray-900 dark:text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 dark:hover:from-indigo-400 dark:hover:to-purple-400"
      >
        <span className="text-lg font-medium pr-6">{question}</span>
        <div className="flex-shrink-0 flex items-center justify-center w-8 min-w-8 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-200">
          <i
            className={`bx ${
              isOpen ? "bx-minus" : "bx-plus"
            } text-gray-500 dark:text-gray-400`}
          ></i>
        </div>
      </button>

      <div
        className="overflow-hidden"
        id={`answer-${id}`}
        ref={answerRef}
        style={{
          maxHeight:
            isOpen && answerRef.current
              ? `${answerRef.current.scrollHeight}px`
              : "0px",
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out",
        }}
      >
        <div className="p-4 pt-0 pb-5 text-gray-600 dark:text-gray-300">
          <div className="p-3 rounded-lg overflow-y-auto max-h-[300px]">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
