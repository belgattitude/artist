import type { Metadata } from 'next';
import type { FC } from 'react';
import { WordList } from '@/components/words/WordList';
export const metadata: Metadata = {};

const HomePage: FC = () => {
  return (
    <div className={'mx-auto mt-5 flex flex-col gap-5'}>
      <div className={'p-5 font-text-primary'}>
        <h1 className={'mb-5 font-family-elika-gorika text-3xl tracking-wider'}>
          URQL test
        </h1>
      </div>
      <div
        className={
          'absolute right-0 z-10 m-5 -scale-100 border-2 bg-black p-5 font-family-monoton text-3xl text-white [writing-mode:vertical-lr]'
        }
      >
        <p>Which makes art inevitable</p>

        <div className={'text-3xl font-extrabold'}>
          It's to be in that wonderful state
        </div>
        <p className={'text-3xl'}>The object is not to make art</p>
      </div>

      <div className={``}>
        <WordList />
      </div>
    </div>
  );
};

export default HomePage;
