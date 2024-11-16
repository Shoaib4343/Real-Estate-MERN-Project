// import React from 'react'
// import Filter from '../../Components/filter/Filter'
// import Card from '../../Components/card/Card'
// import Map from '../../Components/map/Map'
// import { useLoaderData } from 'react-router-dom'

// const ListPage = () => {
//   const post = useLoaderData();

    
//   return (
//     <div className='container mx-auto flex justify-between md:h-[calc(100vh-6rem)]  px-4  overflow-y-hidden'>
//         {/* leftSideList */}
//         <div className='w-3/5  '>
//           <div className="pr-12 h-[100%]  hover:overflow-y-auto">
//             {/* filter component */}
//            <Filter />

//             {/* map funtion and pass props to the cards components */}
//             {
//               post.map((val)=>(
//                 <Card key={val.id} val={val} />
              
//               ))
//             }
//           </div>
//         </div>

//         {/* rigth side List map section */}
//         <div className='bg-gray-300 w-2/5 h-[100%] box-border '>
//          <Map item={post} />
//         </div>
//     </div>
//   )
// }

// export default ListPage


import React, { Suspense } from "react";
import Filter from "../../Components/filter/Filter";
import Card from "../../Components/card/Card";
import Map from "../../Components/map/Map";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto flex justify-between md:h-[calc(100vh-6rem)]  px-4  overflow-y-hidden">
      {/* leftSideList */}
      <div className="w-3/5  ">
        <div className="pr-12 h-[100%]  hover:overflow-y-auto">
          {/* filter component */}
          <Filter />

          <Suspense fallback={<h1>Loading</h1>}>
            <Await
              resolve={data.postRespons}
              errorElement={<p>Error loading Posts</p>}
            >
              {(postRespons) => postRespons.data.map(post=>(
                <Card key={post._id}  val={post} />
              ))}
            </Await>
          </Suspense>
        </div>
      </div>

      {/* rigth side List map section */}
      <div className="bg-gray-300 w-2/5 h-[100%] box-border ">
      <Suspense fallback={<h1>Loading</h1>}>
            <Await
              resolve={data.postRespons}
              errorElement={<p>Error loading Posts</p>}
            >
              {(postRespons) => (
                <Map item={postRespons.data} /> 

              )}
            </Await>
          </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
