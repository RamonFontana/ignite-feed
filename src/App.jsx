import { Post } from "./components/Post";
import { Header } from "./components/Header";

import './global.css'

import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/RamonFontana.png',
      nome: 'Ramon Fontana',
      role: 'Front End - Take 5 LMS'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-08-29 9:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/RenanMarx144.png',
      nome: 'Ramon Fontana',
      role: 'FullStack - ProEduca'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-06-29 9:00:00')
  },
]

export function App() {

  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
      </div>
  )
}

