import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.cover}>
        <img
          src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
          alt="Isaac Gonçalves"
        />
      </div>
      <div className={styles.profile}>
        <img src="https://avatars.githubusercontent.com/u/82903174?v=4"></img>
        <strong>Isaac Correia Gonçalves</strong>
        <span>Web Developer (On the Making)</span>
      </div>
      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </aside>
  );
}
