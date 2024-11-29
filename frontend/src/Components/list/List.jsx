import React from 'react'
import Card from '../card/Card'

const List = ({post,deleteHandler}) => {
  return (
    <div>
        {post.map((val)=>(
            <Card key={val.id} val={val} deleteHandler={deleteHandler} />
        ))}
        
    </div>
  )
}

export default List