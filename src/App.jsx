import { useState } from "react";
import { Post } from "./Post";
import { Header } from "./components/Header";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Isaac Gonçalves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore rerum, praesentium at ea amet officia eum nulla sequi dignissimos, reprehenderit nostrum itaque atque vel corrupti non eos impedit deserunt?"
          />
          <Post
            author="Caroline Amarante so que nao "
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore rerum, praesentium at ea amet officia eum nulla sequi dignissimos, reprehenderit nostrum itaque atque vel corrupti non eos impedit deserunt?"
          />
          <Post
            author="Caroline Amarante so que nao "
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime labore rerum, praesentium at ea amet officia eum nulla sequi dignissimos, reprehenderit nostrum itaque atque vel corrupti non eos impedit deserunt?"
          />
        </main>
      </div>
    </div>
  );
}
