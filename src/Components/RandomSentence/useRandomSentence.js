import { useState } from 'react';

function useRandomSentence() {
  const [sentence, setSentence] = useState('');

  const generateRandomSentence = () => {
    const nouns = ['cat', 'dog', 'horse', 'elephant', 'tree'];
    const verbs = ['runs', 'jumps', 'hops', 'skips', 'twirls'];
    const adverbs = ['quickly', 'slowly', 'frantically', 'gracefully', 'carefully'];
    const adjectives = ['happy', 'sad', 'angry', 'lazy', 'energetic'];

    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const adverb = adverbs[Math.floor(Math.random() * adverbs.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];

    setSentence(`The ${adjective} ${noun} ${verb} ${adverb}.`);
  };

  return [sentence, generateRandomSentence];
}

export default useRandomSentence