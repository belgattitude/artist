import type { Metadata } from 'next';
import Image from 'next/image';
import type { FC } from 'react';
import { VideoPlayer } from '@/components/player/VideoPlayer';

const img = 'https://media.failwell.be/pictures/butoh-picture.jpg';

export const metadata: Metadata = {
  title: 'Home',
};

const HomePage: FC = () => {
  const videoUrl = 'https://media.failwell.be/dark.mp4';
  return (
    <div className={'border-1 container mx-auto flex flex-col gap-5 p-5'}>
      <div className={'text-white'}>
        <h1 className={'text-xl'}>Sébastien Vanvelthem</h1>
        <p>Dancer | Instant composition | Choreography</p>
        <p>New website coming soon</p>
      </div>
      <div className={'text-white'}>
        <p>
          Non préméditation, attente du nouveau né, renonciation à l'acte de
          renouveller. Sans pensée, sans tâche, les larmes naissantes, écriture
          automatique amplifiée par l'événement de l'indécision. Cela semble
          émerger d'une terre rouge oubliée. Idéal évolué en serpents qui se
          joignent à l'accélération d'une particule élémentaire. Perfusion de
          sagesse. Prendre l'apparence trompeuse d'un danseur circulaire,
          s'appuyer sur le vide, Je glisse, le décor tombe. Ne reste que
          l'imaginaire d'un tableau de la renaissance italienne
        </p>
        <p className={'mt-5 pt-5'}>
          Alors vient une tentative, un élan reçu, échangé. Initié pieds nus
          dans l'immense surface des sables. Pas à pas sur les traces délaissées
          du silence. Le talon s'enfonce, la paume effleure d'un mouvement qui
          se prolonge jusqu'au dernier morceau de monde. Celui de l'imaginaire,
          par delà le connu. Puis reviens près de toi, à nouveau intime et
          délicat. Sur la peau, cela fait mal. Ensuite, une femme passe et son
          sang ne coule plus le long de ses jambes (car la douleur est
          éphémère). Elle regarde. Il ne reste plus qu'à attendre, là, nu, dans
          le présent. Ne se décider que lorsque le SOLEIL nous BRÛLE. Tout cela
          se traduit dans la danse par un arrêt dans la chute, une absence de
          mouvement. (du moins visible)
        </p>
        <p className={'mt-5 pt-5'}>
          Parfois j'envenime le présent par une présence trop contrôlée, avec la
          torpeur d'un object inanimé. (Par seulement une aide précipitée, elle
          lave l'assombrissement flêtri d'un souvenir ancien.) C'est là, à cet
          endroit précis, suspendu entre deux cîmes d'arbres que la couleur
          prends forme conique, sphérique, scénique. Puis un autre jour,
          différenciation par le sourire d'un soleil levant. Il y a un souffle
          divin caché entre les lignes du destin en courbe et prolongations, le
          décor enseveli, redécoré en quadrillages symmétriques semble se
          courber afin de former un lit de rivière Elle emprunte, l'eau, les
          dessins fermentés d'un angle contrarié. Au sommet d'un souterrain.
          Transfiguration déraisonnée de sagesse aux accents de tendresse
          délibérée. Dé-libérée, aimante, amante. Profondeur de cette nuit Ici
          et maintenant, Un réveil
        </p>
      </div>
      <div className={''}>
        <Image
          priority={true}
          src={img}
          width={800}
          height={400}
          alt={'Butoh picture'}
        />
      </div>
      <div className={'grow-1 aspect-[2/1] w-full bg-black'}>
        <VideoPlayer
          url={videoUrl}
          muted={true}
          loop={true}
          playsinline={true}
          light={false}
          playbackRate={0.3}
          controls={false}
          playing={true}
          width={'100%'}
          height={'100%'}
        />
      </div>
    </div>
  );
};

export default HomePage;
