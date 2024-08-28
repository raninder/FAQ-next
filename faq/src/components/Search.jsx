import React, {useState} from 'react'

export default function Search({query}) {
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
