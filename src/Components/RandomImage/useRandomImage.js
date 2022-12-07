import { useState } from 'react';

function useRandomImage() {
  const [image, setImage] = useState(null);

  function fetchRandomImage() {
    fetch("https://source.unsplash.com/random")
      .then(res => res.url)
      .then(url => setImage(url));
  };

  return [image, fetchRandomImage];
};

export default useRandomImage;