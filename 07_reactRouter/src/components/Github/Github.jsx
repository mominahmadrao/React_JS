import React, { useEffect } from "react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    // Better approach for pre processing
    const data = useLoaderData()

//    const [data,setData] = useState([]);
   
//    useEffect(( ) =>{
//      fetch('https://api.github.com/users/mominahmadrao')
//      .then((response) => response.json() )
//      .then(data => {
//         console.log(data)
//         setData(data)
//      })
//    } , [])

//     return (
//     <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//       Github username: {data.login};
//       <img src={data.avatar_url} width={300} alt="" />
//     </div>
//   );


}


export default Github;


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mominahmadrao')
    return response.json()
}
