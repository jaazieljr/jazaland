import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";

import styles from './App.module.css'
import './global.css'



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jaazieljr.png',
      name: 'Jaaziel Junior',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Olá meus amigos do JazaLand' },
      { type: 'paragraph', content: 'Queria avisar que meu projeto ja está em funcionamento. É um projeto que fiz na formação em Rundamentos do React, certificação da Rocketseat. O nome do projeto é JazaLand' },
      { type: 'link', content: 'https://github.com/jaazieljr' }
    ],

    publishedAt: new Date('2024-07-23 21:17:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/Diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [

      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-07-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/jaqueuchoab.png',
      name: 'Jaqueline Uchôa',
      role: 'Desenvolvedora Front-end Web Júnior'
    },
    content: [

      { type: 'paragraph', content: 'Fala Devs' },
      { type: 'paragraph', content: 'No meu GitHub tem uma ferramenta desenvolvida para calcular o Fluxo de Caixa de uma empresa específica.' },
      { type: 'paragraph', content: 'Confere lá!' },
      { type: 'link', content: 'https://github.com/jaqueuchoab/EasyCaixa' },
      { type: 'link', content: 'https://www.instagram.com/jaqueuchoab_' },
    ],
    publishedAt: new Date('2024-06-10 20:00:00'),
  },
];




export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>

        <Sidebar />

        <main>

          {posts.map(post=>{
            return(
            <Post
                key={post.id}
                author={post.author}
                publishedAt={post.publishedAt} 
                content = {post.content}   

                       />

                      )})}

        </main>

      </div>





    </div>
  )
}

