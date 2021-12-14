// styles
import styles from './Template.module.css';

export default function Template() {
  return (
    <div className={styles.app_wrapper}>
      <div className={styles.header}>
        <input type="text" />
        <p>1</p>
      </div>
      <div className={styles.main}>
        <div style={{ background: 'blue' }}>2</div>
        <div style={{ background: 'red' }}>3</div>
        <div style={{ background: 'white' }}>4</div>
        <div style={{ background: 'red' }}>5</div>
      </div>
      <div className={styles.footer}>
        6
      </div>
    </div>
  );
}
