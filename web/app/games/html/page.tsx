'use client';

import styles from './styles.module.scss';
import { useState, useEffect } from 'react';

const htmlTags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'search',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'template',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr',
];

export default function Page() {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [correct, setCorrect] = useState<string[]>([]);
  const [keypress, setKeypress] = useState(false);
  const [gameState, setGameState] = useState('idle');

  useEffect(() => {
    document.querySelector('body')?.classList.add('loaded');
  }, []);

  function guessTag(e) {
    e.preventDefault();

    let guess = e.target.guess.value;
    guess = guess.toLowerCase();

    setGuesses((guesses) => [...guesses, guess]);

    if (htmlTags.includes(guess)) {
      setCorrect((correct) => [...correct, guess]);
      htmlTags.splice(htmlTags.indexOf(guess), 1);

      setGameState('correct');

      setTimeout(() => {
        setGameState('playing');
      }, 800);
    } else {
      setGameState('error');

      setTimeout(() => {
        setGameState('playing');
      }, 800);
    }

    e.target.reset();

    const item = document.querySelector('ol li:last-of-type') as HTMLElement | null;

    if (item !== null) {
      item.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      // window.scrollTo(0, document.body.scrollHeight);
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      setKeypress(true);

      setTimeout(() => {
        setKeypress(false);
      }, 300);
    }
  }

  return (
    <section className={styles.game} data-game-state={gameState}>
      <div className={styles.wrapper}>
        {gameState === 'idle' ? (
          <div className={styles.start} data-section="start">
            <h1>HTML Tag Guessing Game</h1>
            <p>There are {htmlTags.length + 1} html tags. How many can you name from memory?</p>

            <button
              onClick={() => {
                setGameState('playing');
              }}
            >
              I am ready!
            </button>
          </div>
        ) : (
          <>
            <div className={styles.search} data-section="guess">
              <h1>HTML Tag Guessing Game</h1>

              <form autoComplete="off" onSubmit={guessTag} data-keypress={keypress}>
                <input type="hidden" autoComplete="false" />
                <input
                  id="guess"
                  type="text"
                  name="guess"
                  autoComplete="off"
                  placeholder="Tag"
                  autoFocus
                  onKeyDown={handleKeyPress}
                />
                <kbd>{gameState === 'playing' ? `Enter` : gameState === 'correct' ? `Correct!` : `Nooo!`}</kbd>
              </form>
            </div>

            <div className={styles.list}>
              {correct.length > 0 && (
                <>
                  <div className={styles.toolbar}>
                    <h4>Correct ({correct.length > 0 && correct.length})</h4>
                    <button
                      className={styles.sort}
                      onClick={() => {
                        setCorrect((correct) => [...correct].sort());
                      }}
                    >
                      Sort:
                      <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.92176 8.15918H0.237915L2.8036 0.727051H4.82856L7.39062 8.15918H5.70677L3.84511 2.42541H3.78705L1.92176 8.15918ZM1.81652 5.23786H5.79387V6.46445H1.81652V5.23786Z"
                          fill="black"
                        />
                        <path
                          d="M0.756316 16.3346V15.4369L4.74765 10.4281H0.748505V9.18115H6.8722V10.0788L2.87696 15.0876H6.88001V16.3346H0.756316Z"
                          fill="black"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.1081 13.9069V0.727051H12.3855V13.9069L13.85 12.4531L14.7533 13.3498L11.7468 16.3345L8.74042 13.3498L9.64367 12.4531L11.1081 13.9069Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </div>
                  <ol>
                    {correct.map((item, i) => {
                      return <li key={item + i}>{i + 1 + `: <` + item + `>`}</li>;
                    })}
                  </ol>
                </>
              )}
            </div>
            <div className={styles.meta} data-section="meta">
              <div className={styles.blank}></div>
              <p>
                <span>{htmlTags.length + 1}</span> tags left to guess
                {correct.length > 0 && <progress max={111} value={correct.length}></progress>}
              </p>
              <div className={styles.guesses}>{guesses.length}</div>
            </div>
          </>
        )}
      </div>

      <div className={styles.grid}></div>
      <div className={styles.gridlet}></div>
    </section>
  );
}
