import React, {useState} from 'react';
import './App.css';
import ListOfGifst from './components/ListOfGifs';
import {Link, Route} from 'wouter';


function App() {

  
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to="/gif/panda" >Panda</Link>
        <Link to="/gif/rick" >Rick</Link>
        <Link to="/gif/morty" >Morty</Link>


        <Route path='/gif/:keyword' component={ListOfGifst} />

        {/* <ListOfGifst ListOfGifst keyword='panda' /> */}

      </section>
    </div>
  );
}

export default App;
