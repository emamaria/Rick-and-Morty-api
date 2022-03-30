import { useState, useEffect} from "react";
import { Button } from "./Button/Button";
import { Characters } from "./Characters/Characters";
import "./main.scss";


function App() {


  const [characters, setCharacters] = useState([]);
  
  const [page, setPage] = useState(1);

  const urlPage = `https://rickandmortyapi.com/api/character?page=${page}`

  console.log(page);

  useEffect(()=>{

    let mounted = true;

    fetch(urlPage).then((resp)=> {
         resp.json().then(characters =>{
          setCharacters(characters.results)
          console.log(characters);
         })
       })
       .catch(console.warn)

       return () => {
        mounted = false;
      };

  }, [urlPage])

  return (
    <div className="App">

{(page > 1) &&<Button buttonName="Prev" onClick={()=> setPage(page - 1)}/>}
 {(page < 43)&&<Button buttonName="Next" onClick={()=> setPage(page + 1)}/>} 
 
    {
      characters&&characters.map(character => {
         return <Characters key={character.id} name={character.name}  image={character.image}/>
      })
      
    }
      
    </div>
  );
}


export default App;
