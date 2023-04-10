import type { FC } from 'react';
import type { CSSProperties } from 'theme-ui';
type Props = {
  children: string;
  className?: string;
};

const charStyle: CSSProperties = {
  display: 'inline-block',
  marginRight: '-0.05em',
};

const wordStyle: CSSProperties = {
  display: 'inline-block',
  marginRight: '1em',
};

export const SplitText: FC<Props> = (props) => {
  const { children: text } = props;
  const words = text.split(' ');
  return (
    <span aria-label={text} className={'text-fuchsia-500'}>
      {words.map((word, wordIdx) => {
        return (
          <span
            key={`${word}-${wordIdx}`}
            className="word"
            style={wordStyle}
            aria-hidden="true"
          >
            {word.split('').map((char, charIdx) => {
              return (
                <span
                  key={`${char}-${charIdx}`}
                  className={'char'}
                  style={charStyle}
                  aria-hidden="true"
                >
                  {char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};
