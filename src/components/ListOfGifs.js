import React, {useEffect, useState} from 'react';
import Gifs from "./Gifs";
import getGifs from '../services/getGifs';


export default function ListOfGifst ({params}){

  const {keyword} = params

    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        getGifs({keyword}).then(gifs => setGifs(gifs))  
    }, [keyword] )

return <div>
  {
  gifs.map(gif => 
     <Gifs 
       key={gif.id}
       title={gif.title}
       url={gif.url}
       id={gif.id}
     />
   )
      }
  
</div>


}
    