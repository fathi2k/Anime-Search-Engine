



export const dataHero = async ()=>{
  const res = await fetch('https://api.jikan.moe/v4/characters');
  const resJson = await res.json();
  

  return resJson;

}



// export const dataHero = async () => {
//   try {
//     const res = await fetch('https://api.jikan.moe/v4/characters');
    
//     // Check if response is ok
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
    
//     const resJson = await res.json();
//     console.log(resJson);
//     return resJson;
    
//   } catch (error) {
//     console.error('Fetch failed:', error);
//     return null;
//   }
// }



