import React from 'react'
import {listData} from "../../lib/listDummydata"
import Card from '../card/Card'

const List = () => {
  return (
    <div>
        {listData.map((val)=>(
            <Card key={val.id} val={val} />
        ))}
        
    </div>
  )
}

export default List