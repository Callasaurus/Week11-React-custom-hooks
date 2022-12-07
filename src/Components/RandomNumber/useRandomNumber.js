import { useState, useEffect } from "react";

function useRandomNumber() {
  const [randomNumber, setRandomNumber] = useState(0);

  useEffect(() => {
    document.title = randomNumber;
  }, [randomNumber]);

  function generateRandomNumber() {
    setRandomNumber(Math.floor(Math.random() * 1000));
  };


  return [randomNumber, generateRandomNumber];
};

export default useRandomNumber;