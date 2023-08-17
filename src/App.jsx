import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css'

export function App() {

  return (
      <div>
        <Header />

        <Post 
          author="Ramon Fontana" 
          content="Culpa consequat dolor nostrud tempor nulla exercitation duis sit est consectetur consequat. Nostrud eu et eiusmod aliquip ut ea aliqua aliquip irure velit pariatur. Duis sunt tempor mollit irure ad irure laborum ullamco labore consequat dolore laborum deserunt exercitation." 
        />

        <Post 
          author="Ramon Fontana" 
          content="Culpa consequat dolor nostrud tempor nulla exercitation duis sit est consectetur consequat. Nostrud eu et eiusmod aliquip ut ea aliqua aliquip irure velit pariatur. Duis sunt tempor mollit irure ad irure laborum ullamco labore consequat dolore laborum deserunt exercitation." 
        />
      </div>
  )
}

