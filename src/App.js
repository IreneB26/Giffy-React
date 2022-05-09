import React, {useState} from 'react';
import './App.css';
import ListOfGifst from './components/ListOfGifs';



function App() {
  const [keyword, setKeyword] = useState('panda');

  
  return (
    <div className="App">
      <section className="App-content">

      <button onClick={ () =>   setKeyword('mapache')}>Panda</button>
        
        
        <ListOfGifst ListOfGifst keyword={keyword} />
        
        
      </section>
    </div>
  );
}

export default App;
