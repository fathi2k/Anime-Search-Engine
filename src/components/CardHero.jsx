import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const CardHero = ({nama,rating,src,id,nickName}) => {



  //animation//

  useGSAP(()=>{
        gsap.fromTo('#kotakCard',{
          y : 200,
          opacity : 0,
          
          
        },{

            opacity : 1,
            y : 1
        })
  },[])


  return (


    <div id='kotakCard' className='mt-[5%] bg-red-400 rounded-2xl p-4 w-[400px] flex flex-col '>

          <img  className='' src={src} alt="" />
                <p>Id : <span className='text-white'>{id}</span></p>
             <h1>Nama : <span className='text-white'>{nama}</span></h1>
             <h1>NickName : <span className='text-white'>{nickName}</span></h1>
             <p>Rating : <span className='text-white'>{rating}🎇</span> </p>
            
    </div>
  )
}

export default CardHero
