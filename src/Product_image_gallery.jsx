import React, { useRef } from 'react'

export default function Product_image_gallery(params) {
    let imgs = params.imgs
    let imgref = useRef()
    let imgsui = imgs.map((i)=><img src={i} className='w-20 h-20' onClick={()=> imgref.current.src=i} />)
  return (
    <div>
        <img src={imgs[0]} ref={imgref}/>
        <div className='flex'>
{imgsui}
        </div>
    </div>
  )
}
