import React from "react";
import { faqData } from "../constants";

function Faq() {
  return (
    <div>
      {" "}
      <h1 className="text-5xl mt-32 font-bold text-center py-10 z-10">
        Frequently asked questions
      </h1>
      <div className="p-8">
        <div className="grid grid-rows-2 md:grid-rows-2 gap-8">
          {faqData.map((section, sectionIndex) => (
            <div
              key={sectionIndex}
              className="bg-white rounded-lg shadow-md p-4"
            >
              <div className="font-semibold text-lg mb-4">
                {section.category}
              </div>
              <div className="space-y-2">
                {section.questions.map((question, questionIndex) => (
                  <div key={questionIndex} className="border-b py-2">
                    {question}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
