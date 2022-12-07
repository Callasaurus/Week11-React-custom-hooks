import { useState, useEffect } from 'react';

function useRandomImage() {
  const [image, setImage] = useState(null);

  function fetchRandomImage() {
    fetch("https://source.unsplash.com/random")
      .then(res => res.url)
      .then(url => setImage(url));
  };

  useEffect(() => {
    fetchRandomImage();
  }, []);

  return [image, fetchRandomImage];
};

export default useRandomImage;