// components
import StyledNav from '../../../components/StyledNav/StyledNav';

// assets
import IMG1 from '../../../assets/slider-images/1.jpg';
import IMG2 from '../../../assets/slider-images/2.jpg';
import IMG3 from '../../../assets/slider-images/3.jpg';

// styles
import styles from './Lab1Page.module.css';

export default function Lab1Page() {
  return (
    <div className={styles.page_wrapper}>
      <StyledNav to="/lab1/1">
        Опис предметної галузі
      </StyledNav>

      <table>
        <tr>
          <td>name</td>
          <td>age</td>
          <td>gender</td>
        </tr>
        <tr>
          <td>Oleh</td>
          <td>20</td>
          <td>Male</td>
        </tr>
      </table>

      <form className={styles.form} action="">
        <input type="text" placeholder="name"/>
        <input type="text" placeholder="age"/>
        <input type="text" placeholder="gender"/>
        <button type="submit">Send</button>
      </form>

      <div className={styles.img_block}>
        <img src={IMG1} alt="1" />
        <img src={IMG2} alt="2" />
        <img src={IMG3} alt="3" />
      </div>
    </div>
  );
}
