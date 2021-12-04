import styles from './Header.module.css';
import AVATAR1 from '../../assets/avatar1.jpg';
import AVATAR2 from '../../assets/avatar2.jpg';
import StyledNav from '../StyledNav/StyledNav';

export default function Header() {
  return (
    <header className={styles.header_wrapper}>
      <h1 className={styles.title}>
        <p>ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ</p>
        <p>З ДИСЦИПЛІНИ "ОСНОВИ FRONT-END ТА BACKEND РОЗРОБОК"</p>
      </h1>
      <p className={styles.student_info}>
        <span>БРИГАДА №15</span>
        <span>Студенти групи ІВ-92</span>
        <span>Хоменко Олег Олександрович</span>
        <span>Поморова Марія Русланівна</span>
        <img className={styles.avatar} src={AVATAR1} alt="ava" width={70} height={70}/>
        <img className={styles.avatar} src={AVATAR2} alt="ava" width={70} height={70}/>
      </p>
      <div className={styles.labs_tabs}>
        <StyledNav
          to="/lab1"
          className={styles.tab}
        >
          Лабораторна робота №1
        </StyledNav>
        
        <StyledNav
          to="/lab2"
          className={styles.tab}
        >
          Лабораторна робота №2
        </StyledNav>
  
        <StyledNav
          to="/lab3"
          className={styles.tab}
        >
          Лабораторна робота №3
        </StyledNav>
  
        <StyledNav
          to="/lab4"
          className={styles.tab}
        >
          Лабораторна робота №4
        </StyledNav>
      </div>
    </header>
  );
}
