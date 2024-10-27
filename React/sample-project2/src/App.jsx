
// function App(){
//     return(
//         <div>
//             Hello World
//         </div>
//     )
// }
//  export default App

// const App2 = () =>{
//     return(
//         <div>
//             Hello World
//         </div>
//     )
// }

// // export default App2

// // export{ App,App2}

//rafce

import Navbar from "./components/Navbar"

const App = () => {
    const data={
        appname: "Hello"
    }
    const logodata = "Mylogo"
    const test="hello world"
  return (
    <> 
        <p className="text-yellow-500">{test}</p>
        <Navbar appdata={data} logo={logodata} />
    </> 
  )
}

export default App