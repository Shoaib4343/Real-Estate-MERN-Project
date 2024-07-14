import React from 'react'
import { listData } from '../../lib/listDummydata'
import Filter from '../../Components/filter/Filter'
import Card from '../../Components/card/Card'
import Map from '../../Components/map/Map'

const ListPage = () => {
    const data = listData;
    
  return (
    <div className='container mx-auto flex justify-between md:h-[calc(100vh-6rem)]  px-4  overflow-y-hidden'>
        {/* leftSideList */}
        <div className='w-3/5  '>
          <div className="pr-12 h-[100%]  hover:overflow-y-auto">
            {/* filter component */}
           <Filter />

            {/* map funtion and pass props to the cards components */}
            {
              data.map((val)=>(
                <Card key={val.id} val={val} />
              
              ))
            }
          </div>
        </div>

        {/* rigth side List map section */}
        <div className='bg-gray-300 w-2/5 h-[100%] box-border '>
         <Map item={data} />
        </div>
    </div>
  )
}

export default ListPage