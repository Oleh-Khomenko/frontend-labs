import styles from './Template.module.css';

export default function Template11() {
  return (
    <div className={styles.content_wrapper}>
      <div className={styles.header}>
        <p>Logo</p>
        <nav>
          navigation buttons
        </nav>
      </div>
      <div className={styles.main}>
        <section className={styles.section}>
          <p style={{background: 'darkorange'}}>photo</p>
        </section>
        <section className={styles.section}>
          <p style={{background: 'darkred', width: '80%'}}>title</p>
          <p style={{background: 'darkblue', width: '80%'}}>text</p>
        </section>
      </div>
      <div className={styles.footer}>
        FOOTER
      </div>
    </div>
  );
}
