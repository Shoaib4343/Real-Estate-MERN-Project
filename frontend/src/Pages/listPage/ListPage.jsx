
// import React, { Suspense } from "react";
// import Filter from "../../Components/filter/Filter";
// import Card from "../../Components/card/Card";
// import Map from "../../Components/map/Map";
// import { Await, useLoaderData } from "react-router-dom";

// const ListPage = () => {
//   const data = useLoaderData();

//   return (
//     <div className="container mx-auto flex justify-between md:h-[calc(100vh-6rem)]  px-4  overflow-y-hidden">
//       {/* leftSideList */}
//       <div className="w-3/5  ">
//         <div className="pr-12 h-[100%]  hover:overflow-y-auto">
//           {/* filter component */}
//           <Filter />

//           <Suspense fallback={<h1>Loading</h1>}>
//             <Await
//               resolve={data.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) => postRespons.data.map(post=>(
//                 <Card key={post._id}  val={post} />
//               ))}
//             </Await>
//           </Suspense>
//         </div>
//       </div>

//       {/* rigth side List map section */}
//       <div className="bg-gray-300 w-2/5 h-[100%] box-border ">
//       <Suspense fallback={<h1>Loading</h1>}>
//             <Await
//               resolve={data.postRespons}
//               errorElement={<p>Error loading Posts</p>}
//             >
//               {(postRespons) => (
//                 <Map item={postRespons.data} /> 

//               )}
//             </Await>
//           </Suspense>
//       </div>
//     </div>
//   );
// };

// export default ListPage;





import React, { Suspense } from "react";
import Filter from "../../Components/filter/Filter";
import Card from "../../Components/card/Card";
import Map from "../../Components/map/Map";
import { Await, useLoaderData } from "react-router-dom";

const ListPage = () => {
  const data = useLoaderData();

  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between md:h-[calc(100vh-6rem)] px-4 overflow-y-hidden">
      {/* Left Side List */}
      <div className="w-full md:w-3/5 mb-6 md:mb-0">
        <div className="md:pr-12 h-[100%] hover:overflow-y-auto">
          {/* Filter component */}
          <Filter />

          <Suspense fallback={<h1>Loading</h1>}>
            <Await
              resolve={data.postRespons}
              errorElement={<p>Error loading Posts</p>}
            >
              {(postRespons) =>
                postRespons.data.map((post) => (
                  <Card key={post._id} val={post} />
                ))
              }
            </Await>
          </Suspense>
        </div>
      </div>

      {/* Right Side Map Section */}
      <div className="bg-gray-300 w-full md:w-2/5 h-[300px] md:h-[100%] box-border">
        <Suspense fallback={<h1>Loading</h1>}>
          <Await
            resolve={data.postRespons}
            errorElement={<p>Error loading Posts</p>}
          >
            {(postRespons) => <Map item={postRespons.data} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
