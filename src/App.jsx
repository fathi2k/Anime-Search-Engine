import CardHero from "./components/CardHero"
import { dataHero } from "./api/dataHero"
import { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect,useRef } from "react";



function App() {
const [inputSearch,setInputSearch] = useState('')
const [dataCharacter,setDataCharacter] = useState([]);
const [errorPopUp,setErrorPopUp] = useState('');

const refCard = useRef();

const handleClick =  async ()=>{
      const data = await dataHero();  
        

      if (inputSearch.length < 1){

            setErrorPopUp('letak jee number random !')
      }else{


 const jumpaData = data.data.find((hero)=> (
          hero.mal_id === Number(inputSearch)
        ))  


          
        
//untuk tengok kat console //
       
        // if (jumpaData){
        //   console.log('dah jumpa !');
        //   console.log(jumpaData);
          
        // }else{
        //   console.log('tak jumpa X');
          
        // }

    if (jumpaData){

 setDataCharacter([jumpaData]); //mapping perlu array
    }else{
      setErrorPopUp('number tak dikenali')
    }
        
          // console.log(data.data);
        setInputSearch('')

       

        // console.log(data.data[0]);
        


      }



   
       
}

// useEffect(()=>{
//      //animation//



// },[])


//animation bila result keluar

useGSAP(()=>{

  if (dataCharacter.length > 0){
        
  gsap.from('#kotak-center',{
    x : 200,
    duration : 1
  })

  if (refCard.current){

 gsap.from(refCard.current,{
        y : 200,
        duration : 1,
        rotate : '360'
      })


  }

 
  }else{


     gsap.from('#kotak-center',{
    y : 200,
    duration : 1
  })


  }

},[dataCharacter])



// //animation result //

// useGSAP(()=>{
  
    
// },[])



// useGSAP(()=>{
//       gsap.to('#kotak-center',{
//         x : -200
//       })
// },[dataCharacter])




 



//enter//

 const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }









  return (
        <div className="flex  justify-center items-center h-screen lg:gap-[10%] md:gap-[5%]">
               <div id="kotak-center" className="flex flex-col items-center  bg-white/60  p-2 h-[500px] justify-center">
                   <h1 className=" sm:text-[30px]  md:text-[40px] lg:text-[60px]  font-bold ">Anime Character Search </h1>


      <div className="flex flex-col mt-[10%]">
                 {errorPopUp && (
                    <p id="error" className="font-bold bg-red-500 text-white px-2 py-2 mb-2 rounded-2xl w-[250px]">{errorPopUp}</p>
                   )}
                   <input className='p-4 border w-[400px] rounded-2xl ' type="text" placeholder='Search By Number ' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} onKeyDown={handleKeyPress}/>

                   <button  className="bg-red-400 rounded-2xl py-2 mt-2 text-[50px] mt-[10%] hover:bg-red-800 hover:text-white transition-all" onClick={ handleClick }>Find Them !</button>

      </div>
              
               </div>

     {/* div jawapan */}
{dataCharacter.length>0 &&(

<div ref={refCard}>

 {dataCharacter.map((para)=>(

       <CardHero key={para.mal_id}
          src={para.images.jpg.image_url}
          id={para.mal_id}
          nama={para.name}
          nickName={para.name_kanji}
          rating={para.favorites}
          
          
          />
   ))}
  
</div>
  

)}


          

        </div>
  )
}

export default App
