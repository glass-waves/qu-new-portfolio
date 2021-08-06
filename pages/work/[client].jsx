import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/header.jsx';
import Ticker from '../../components/ticker.jsx';
import { clients } from '../../public/clients.js'
import style from '../../styles/Client.module.css';

const Client = () => {
  const router = useRouter();
  const {client} = router.query;
  const thisClient = clients[client];
  return (
    <main className={style.container}>
      <Header fontColor='white' links={['home', 'about', 'work']} />
      <Ticker text={thisClient.header}/>
      <p className={style.copy}>{thisClient.copy}</p>
      <section className={style.photoContainer}>
        {thisClient.photos.map(photo => <div className={style.imageWrapper} style={{maxWidth: photo.width}}><Image src={photo.src} width={photo.width} height={photo.height}/></div>)}
      </section>
    </main>
  )
}

export default Client;

