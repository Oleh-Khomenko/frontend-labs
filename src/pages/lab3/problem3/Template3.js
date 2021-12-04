// styles
import styles from './Template3.module.css';

export default function Template3() {
  return (
    <div className={styles.template_wrapper}>
      <h1>ЩО ВИ ОПАНУЄТЕ?</h1>
      <div className={styles.nav}>
        <div>
          <img src="" alt="html/css"/>
          <p>html/css</p>
        </div>
        <div>
          <img src="" alt="js"/>
          <p>js</p>
        </div>
        <div>
          <img src="" alt="react"/>
          <p>react</p>
        </div>
        <div>
          <img src="" alt="angular"/>
          <p>angular</p>
        </div>
      </div>
      <div className={styles.content_block}>
        <h2>
          МИ ГАРАНТУЄМО НАШИМ ПРАЦІВНИКАМ ПРАЦЕВЛАШТУВАННЯ
        </h2>
      </div>
      <div className={styles.content_block}>
        <h2>
          JAVA З ПРАЦЕВЛАШТУВАННЯМ
        </h2>
      </div>
      <div className={styles.footer}>
        <div></div>
        <div>
          <img src="" alt="facebook"/>
          <img src="" alt="VK"/>
          <img src="" alt="telegram"/>
          <img src="" alt="youtube"/>
        </div>
      </div>
    </div>
  );
}
