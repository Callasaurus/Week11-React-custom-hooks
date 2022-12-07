import './App.css';
import React from "react";
import useRandomNumber from "../RandomNumber/useRandomNumber.js"
import useRandomSentence from '../RandomSentence/useRandomSentence';
import useRandomImage from '../RandomImage/useRandomImage';
import useFunnyProgrammingMeme from '../ProgrammingMeme/useFunnyProgrammingMeme';

function App() {
  const [randomNumber, generateRandomNumber] = useRandomNumber();
  const [sentence, generateRandomSentence] = useRandomSentence();
  const [image, fetchRandomImage] = useRandomImage();
  const [memeImage, getRandomMemeImage] = useFunnyProgrammingMeme()

  return (
    <div className='app'>

      <div className='random-number'>
        <h1>Random Number: {randomNumber}</h1>
        <button className='buttons' onClick={generateRandomNumber}>Generate New Number & Update Document Title</button>
      </div>

      <div className='random-sentence'>
        <p>{sentence}</p>
        <button className='buttons' onClick={generateRandomSentence}>Generate Random Sentence</button>
      </div>

      <div className="random-image">
        <img id="img" src={image} alt="" />
        <button className='buttons' onClick={fetchRandomImage}>Fetch Random Image</button>
      </div>

      <div className="random-image">
        <img id="img" src={memeImage} alt="" />
        <button className='buttons' onClick={getRandomMemeImage}>Get Random Meme</button>
      </div>

    </div>
  );
}

export default App;
