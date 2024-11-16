
// import axios from "axios"
// export const singlePageLoader = async ({params})=>{
//   const res = await axios.get("http://localhost:8800/post/"+params.id,{withCredentials:true})
//   return res.data
// }
// export const listPageLoader = async ({request,params})=>{
//  const query = request.url.split("?")[1]
//   const res = await axios.get("http://localhost:8800/post?"+query,{withCredentials:true})
//   return res.data
// }


import {defer} from "react-router-dom"
import axios from "axios"
export const singlePageLoader = async ({params})=>{
  const res = await axios.get("http://localhost:8800/post/"+params.id,{withCredentials:true})
  return res.data
}
export const listPageLoader = async ({request,params})=>{
 const query = request.url.split("?")[1]
  const postPromise =  axios.get("http://localhost:8800/post?"+query,{withCredentials:true})
  return defer({
    postRespons: postPromise
  })
}


