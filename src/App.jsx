import CardHero from "./components/CardHero"
import { dataHero } from "./api/dataHero"
import { useState } from "react";





function App() {
const [inputSearch,setInputSearch] = useState('')
const [dataCharacter,setDataCharacter] = useState([]);
const [errorPopUp,setErrorPopUp] = useState('');



const handleClick =  async ()=>{
      const data = await dataHero();  
        

      if (inputSearch.length < 1){

            setErrorPopUp('sila masukkan nama character !')
      }else{


 const jumpaData = data.data.find((hero)=> (
          hero.mal_id === Number(inputSearch)
        ))  


          
        

       
        if (jumpaData){
          console.log('dah jumpa !');
          console.log(jumpaData);
          
        }else{
          console.log('tak jumpa X');
          
        }

    
        
          // console.log(data.data);
        setInputSearch('')

        setDataCharacter([jumpaData]); //mapping perlu array

        // console.log(data.data[0]);
        


      }

       
}


//enter//

 const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  }









  return (
        <div className="flex flex-col justify-center items-center h-screen">
               <div className="flex flex-col items-center">
                   <h1 className="text-[50px] font-bold">Anime Character Search </h1>

                   {errorPopUp && (
                    <p id="error" className="p-2 bg-red-500 text-white m-2 rounded-2xl">{errorPopUp}</p>
                   )}
                   <input className='p-2 border w-[300px] rounded-2xl ' type="text" placeholder='Ur hero ? ' onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} onKeyDown={handleKeyPress}/>

                   <button  className="bg-green-300 rounded-2xl py-2 mt-2 text-[50px] mt-[10%] hover:bg-green-800 hover:text-white transition-all" onClick={ handleClick }>Find Them !</button>
               </div>

{dataCharacter &&(

   dataCharacter.map((para)=>(

       <CardHero key={para.mal_id}
          src={para.images.jpg.image_url}
          id={para.mal_id}
          nama={para.name}
          nickName={para.name_kanji}
          rating={para.favorites}
          
          
          />
   ))

)}

{/* <CardHero/> */}

<h1></h1>
          

        </div>
  )
}

export default App
