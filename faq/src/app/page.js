// github repo https://github.com/raninder/FAQ-next

'use client'

import React, {useState} from 'react'


 const questions = [
  {
      "question":"What is Next.js?",
      "answer":"Next.js is a React framework for building web applications.."
  },
  {
      "question":"How does Tailwind CSS work?",
      "answer":"Tailwind CSS is a utility-first CSS framework for rapidly building custom designs."
  },
  {
      "question":"What is the purpose of getStaticProps?",
      "answer":"getStaticProps is used to fetch data at build time in Next.js."
  },
  {
      "question":"How can you configure the build-id in Next.js",
      "answer":"To configure the build-id in Next.js, we must configure a static ID between our builds. So, we have to provide the 'generateBuildId' function with the following configuration."
  }
]

//Search bar
function Search({query}) {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) =>{
      setInputText(e.target.value)
      query(e.target.value)
  }
return (
  <div>
  <input
    type="text"
    placeholder="search FAQ"
    value={inputText}
    onChange= {handleChange}
    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 m-5"
  />
  </div>
)
}

export default function FAQ() {
 //for individual questiona
 const [expandedInd, setExpandedInd] = useState([]);

 //state for all questions
  const [expandAll, setExpandAll] = useState(false);

  //filtered  faq data
  const [filteredData, setFilteredData] = useState(questions)

  //expnad or collapse each faq

  const toggle = (index) => {
    setExpandedInd((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  //expnad all on button click
  const handleExpand = () => {
    setExpandAll(true);
    setExpandedInd(questions.map((_, index) => index));
  };

  //collapse all on button click
  const handleCollapse = () => {
    setExpandAll(false);
    setExpandedInd([]);
  };

  const handleSearch = (q) => {
    const searchText = q.toLowerCase();
    const filtered = questions.filter(ele =>
        ele.question.toLowerCase().includes(searchText) ||
        ele.answer.toLowerCase().includes(searchText)
      );
      setFilteredData(filtered);

  }

  return (
    <div className="max-w-xl mx-auto py-20 px-4">
      <h1 className="text-center uppercase tracking-widest font-bold mb-8">
       Frequently Asked Questions
        </h1>
        <Search query = {handleSearch}/>
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
        {filteredData.map((item, index) => (
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