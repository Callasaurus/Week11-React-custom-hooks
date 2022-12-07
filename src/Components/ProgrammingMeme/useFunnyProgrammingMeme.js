import { useState, useEffect } from 'react';

const memeImages = [
    "https://media-exp1.licdn.com/dms/image/C5622AQGmXNM16xTekw/feedshare-shrink_2048_1536/0/1664539554683?e=2147483647&v=beta&t=am689dPkqZ2yC5jzbQowOhfU7-3ujEMUE0yzEI-kyDA",
    "https://miro.medium.com/max/439/1*ZYyXvhYDGvELzYoXYpPLMg.png",
    "https://codingbootcamps.io/wp-content/uploads/m1.png",
    "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be846cf9e0ad057035a_oaVMYWTVDbSobpm1nXr8S9ERSmhLz8iYF3u2t12bmluiRBaHH4YZ6FGWajs1T9yDSAT-BpnVOjkxFE5blXakKWmtztAM1K-_5PSnHKMNxRei3VjvJHp7Hvt8mSikLqCdlopkHZHf.png",
    "https://devs.lol/uploads/2021/11/meme-dev-humor-when-you-are-in-love-with-programming-176.jpg"
  ];
  
function useFunnyProgrammingMeme() {
    const [memeImage, setMemeImage] = useState(null);

    function getRandomMemeImage() {
      const randomIndex = Math.floor(Math.random() * memeImages.length);
      setMemeImage(memeImages[randomIndex]);
    }
  
    useEffect(() => {
      getRandomMemeImage();
    }, []);
  
    return [memeImage, getRandomMemeImage];

};

export default useFunnyProgrammingMeme;