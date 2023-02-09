import Image from 'next/image';
import Content from './message.mdx';
const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';
export default function HomePage() {
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
      <Content />
    </div>
  );
}
