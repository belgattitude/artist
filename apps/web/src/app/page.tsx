import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: FC = () => {
  return (
    <div className={'border-1 container mx-auto flex flex-row gap-5 p-5'}>
      <div className={''}>
        <h1>Sébastien Vanvelthem</h1>
        <p>Dancer | Instant composition | Project</p>
        <p>New website coming soon</p>
      </div>
      <div>
        <Image
          priority={true}
          src={img}
          width={800}
          height={400}
          alt={'Butoh picture'}
        />
      </div>
    </div>
  );
};

export default HomePage;
