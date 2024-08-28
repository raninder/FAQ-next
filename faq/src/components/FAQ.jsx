import React, {useState} from 'react'
import Image from 'next/image';
import {questions} from '../app/testQuestions'
import { FaAngleDown } from "react-icons/fa";



export default function FAQ() {
 //for individual questiona
 const [expandedInd, setExpandedInd] = useState([]);

 //state for all questions
  const [expandAll, setExpandAll] = useState(false);

  const toggle = (index) => {
    setExpandedInd((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const handleExpand = () => {
    setExpandAll(true);
    setExpandedInd(questions.map((_, index) => index));
  };

  const handleCollapse = () => {
    setExpandAll(false);
    setExpandedInd([]);
  };


  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-center uppercase tracking-widest font-bold mb-8">
       FAQ
        </h1>
        <div className="flex gap-4 mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleExpand}
        >
          Expand All
        </button>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={handleCollapse}
        >
          Collapse All
        </button>
      </div>

      <div className="space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-gray-200">
            <div
              className="cursor-pointer p-4 flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              <span className="font-semibold">{item.question}</span>
              <span className="text-gray-500">
                {expandedInd.includes(index) || expandAll ? '−' : '+'}
              </span>
            </div>
            {(expandedInd.includes(index) || expandAll) && (
              <div className="p-4">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}