import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

  const dummyArray = [
    {
      title: "This is my first card",
      domain: "first card"
    },
    {
      title: "This is my second card",
      domain: "second card"
    },
    {
      title: "This is my third card",
      domain: "third card"
    },
    {
      title: "This is my fourth card",
      domain: "fourth card"
    }
  ]

  const [paramsValue, setParamsValue] = useState(null)
  const navigate = useNavigate()

  const clickHandler = (i) => {
    const formattedDomain = i.replace(/\s+/g, '-');
    navigate(`?value=${formattedDomain}`)
    setParamsValue(i)
  }

  return (
    <>
      {
        dummyArray.map((obj, index) => {
          return (
            <h2 className={`cursor-pointer ${obj.domain === paramsValue ? 'text-[#2f00ffaa]' : ''}`} onClick={() => clickHandler(obj.domain)} key={index}>{obj.title}</h2 >
          )
        })
      }
    </>
  )
}

export default Contact