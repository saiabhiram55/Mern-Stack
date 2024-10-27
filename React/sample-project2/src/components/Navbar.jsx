import React , { useState } from 'react'

const Navbar = ({ appdata, logo }) => {
    
    const [Numberstate, setNumberstate] =useState(0)
    const [stringstate, setstringstate] =useState("a")
    const [arraystate, setarraystate] =useState([1,"a",false])
    
    console.log(Numberstate)
    console.log(stringstate)
    console.log(arraystate)

  return (
    <>
        {appdata.appname} {logo}
    </>
  )
}

export default Navbar