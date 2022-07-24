import React from "react";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/28352818?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Caroline Amarante</strong>
            <span>Backend Developer</span>
          </div>
        </div>

        <time title="11 de Maio ás 8:13" dateTime="2022-05-11 08:13:30">
          Publicado a 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Oi Pessoal</p>

        <p>Acabei de subir mais um projeto no meu portifolio.</p>
        <p>
          É um projeto que fiz atraves do curso de Node.js que fiz na Udemy.{" "}
        </p>
        <p>
          👉 <a href="">github.com/carolineamarante</a>
        </p>
        <p>
          <a href="">#novoprojeto </a> <a href=""> #node</a>{" "}
          <a href=""> #backend</a>{" "}
        </p>
      </div>
    </article>
  );
}
