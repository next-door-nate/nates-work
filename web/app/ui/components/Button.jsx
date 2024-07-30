'use client';
import styles from './Button.module.scss';

import { useState, useEffect } from 'react';

export default function Button({ type, children }) {
  const [pending, setPending] = useState(false);
  const [letters, setLetters] = useState(false);
  const [loadingLetters, setLoadingLetters] = useState(false);

  useEffect(() => {
    let text = children.split('');
    setLetters(text);

    let loadingText = 'Loading...'.split('');
    setLoadingLetters(loadingText);
  }, []);

  return (
    <>
      <button
        popovertarget="my-popover"
        className={styles.button}
        onClick={() => setPending(!pending)}
        data-button-type={type || `default`}
      >
        {pending
          ? loadingLetters &&
            loadingLetters.map((letter, i) => {
              return (
                <span key={letter + i} style={{ '--index': i }}>
                  {letter}
                </span>
              );
            })
          : letters &&
            letters.map((letter, i) => {
              return (
                <span key={letter + i} style={{ '--index': i }}>
                  {letter}
                </span>
              );
            })}
      </button>
    </>
  );
}
