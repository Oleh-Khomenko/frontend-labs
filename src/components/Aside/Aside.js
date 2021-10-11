import styles from './Aside.module.css';

export default function Aside({children}) {
  return (
    <aside className={styles.aside}>
      {children}
    </aside>
  );
}
