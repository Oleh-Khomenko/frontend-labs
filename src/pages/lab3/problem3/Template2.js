// styles
import styles from './Template2.module.css';

export default function Template2() {
  return (
    <div className={styles.template_wrapper}>
      <h1>ЩО ВИ ОПАНУЄТЕ?</h1>
      <div>
        <div className={styles.nav}>
          <p>ФОРСИ НАВЧАННЯ</p>
        </div>
        <div className={styles.nav}>
          <p>ЗАХОДИ</p>
        </div>
        <div className={styles.nav}>
          <p>ПРО АКАДЕМІЮ</p>
        </div>
        <div className={styles.nav}>
          <p>КОНТАКТИ</p>
        </div>
        <div className={styles.nav}>
          <select name="s" id="s">
            <option value="NAME" defaultValue>КИЇВ</option>
          </select>
        </div>
      </div>
      <div className={styles.content_block}>
        ПРОГРАМА КУРСУ REACT
      </div>
      <div className={styles.content_block}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={styles.footer}>
        <div>Навчайся зараз <br/> Сплачуй потім</div>
        <div>Дізнатися більше</div>
      </div>
      <div className={styles.footer}>
        <div>Комплексний курс тестування</div>
        <div>IMG</div>
      </div>
    </div>
  );
}
