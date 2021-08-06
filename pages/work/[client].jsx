import Image from 'next/image';
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../../components/header.jsx';
import Ticker from '../../components/ticker.jsx';
import { clients } from '../../public/clients.js'
import style from '../../styles/Client.module.css';
export const getStaticProps = async(context) => {
  return {
    props: {
      client: clients[context.params.client]
    }
  }
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { client: 'auroraelixirs'} }, 
      { params: { client: 'barbari'} }, 
      { params: { client: 'chrome'} }, 
      { params: { client: 'demi'} }, 
      { params: { client: 'dickssportinggoods'} }, 
      { params: { client: 'dolphinmidwives'} }, 
      { params: { client: 'forestremedies'} }, 
      { params: { client: 'gazzybygazzo'} }, 
      { params: { client: 'aphex'} }, 
      { params: { client: 'munchies'} }, 
      { params: { client: 'newagedesign'} }, 
      { params: { client: 'nike'} }, 
      { params: { client: 'oliolab'} }, 
      { params: { client: 'potplant'} }, 
      { params: { client: 'stayover'} }, 
      { params: { client: 'wetdream'} }, 
    ],
    fallback: false // See the "fallback" section below
  };
}
const Client = (props) => {
  // const router = useRouter();
  // const {client} = router.query;
  // const thisClient = clients[client];
  console.log(props)
  const thisClient = props.client;

  return (
    <main className={style.container}>
      <Header fontColor='white' links={['home', 'about', 'work']} />
      <Ticker text={thisClient.header}/>
      <p className={style.copy}>{thisClient.copy}</p>
      <section className={style.photoContainer}>
        {thisClient.photos.map(photo => <div className={style.imageWrapper} key={photo.src} style={{maxWidth: photo.width}}><Image src={photo.src} width={photo.width} height={photo.height}/></div>)}
      </section>
    </main>
  )
}

export default Client;

