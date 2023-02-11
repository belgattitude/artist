import Image from 'next/image';
import type { FC } from 'react';
const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
const HomePage: FC = () => {
  return (
    <div className={'border-1 container p-5'}>
      <h1>Sébastien Vanvelthem</h1>
      <p>Dancer | Instant composition | Project</p>

      <p>New website coming soon</p>
      <Image
        priority={true}
        src={img}
        width={800}
        height={400}
        alt={'Butoh picture'}
      />
    </div>
  );
};

export default HomePage;
