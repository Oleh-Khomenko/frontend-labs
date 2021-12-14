import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

// components
import Aside from '../../components/Aside/Aside';
import StyledNav from '../../components/StyledNav/StyledNav';
import Main from '../../components/Main/Main';

// assets
import TABLE from '../../assets/lab1/table.png'
import FORM from '../../assets/lab1/form.png'
import IMG from '../../assets/lab1/img.png'

// styles
import styles from './Lab1.module.css';

export default function Lab1({ className }) {
  return (
    <div className={classNames(styles.content_wrapper, className)}>
      <Aside className={styles.aside}>
        <StyledNav to={'/lab1/1'}>
          Опис предметного середовища
        </StyledNav>
        <StyledNav to={'/lab1/2'}>
          Тема Мета Місце розташування Лаб1
        </StyledNav>

        <StyledNav to={'/lab1/3'}>
          Структура документа
          <StyledNav to="/lab1/3/1" className={styles.nav}>HTML-код ТАБЛИЦЬ</StyledNav>
          <StyledNav to="/lab1/3/2" className={styles.nav}>HTML-код ФОРМИ</StyledNav>
          <StyledNav to="/lab1/3/3" className={styles.nav}>HTML-код ЗОБРАЖЕННЯ</StyledNav>
        </StyledNav>

        <StyledNav to={'/lab1/4'}>
          Висновки
        </StyledNav>
      </Aside>
      <Main>
        <Switch>
          <Route path="/lab1/1">
            <div>
              <p>Обрана предметна галузь: сайт по підбору красивих картинок по ваших даних</p>

              <p>Функціональні вимоги:</p>
              <ul>
                <li>
                  Користувач повинен мати змогу:
                  ввести свої дані в форму,
                  отримати підібрані картинки
                </li>
                <li>
                  Система повинен надавати змогу переглядати користувачу потрібну інформацію:
                  приклад введення даних в таблицю,
                  приклад картинок які можуть йому підібрати,
                  підібрані картинки
                  та інше
                </li>
              </ul>

              <p>
                Застосовність:
                Користувач отримує підібрані фотографії в найближчий час, як тільки дані надійдуть
                на сервер, штучний інтелект почне їх оброблювати і після цього відправить
                користувачеві
              </p>

              <p>
                Надійність:
                Сервіс ананоміно відправляє дані в захищеному виді, ніхто не дізнається вашу
                особисту інформацію, а також картинки які ви отримали
              </p>

              <p>
                Продуктивність:
                Система повинна швидко реагувати на можливі виключення, має бути стійкою до збоїв.
                Програма буде мати
                можливість обробляти інформацію без перебоїв та з прийнятною для користувача
                швидкістю.
              </p>
            </div>
          </Route>

          <Route path="/lab1/2">
            <div>
              <p>
                Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ.
                РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, ФОРМАМИ в HTML-ДОКУМЕНТІ.
                <br />
                <br />
                Мета: придбати практичні навички роботи з HTML-документом, таблицями,формами,
                зображеннями, посиланнями.
                Створити шаблон звітного HTML-документом для відображення результатів роботи всіх
                лабораторних робіт.
              </p>
              <a
                style={{ color: 'blue' }}
                target="_blank"
                rel="noreferrer"
                href="https://kind-goldberg-805e93.netlify.app"
              >
                https://kind-goldberg-805e93.netlify.app
              </a>
              <br />
              <a
                style={{ color: 'blue' }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Oleh-Khomenko/frontend-labs"
              >
                https://github.com/Oleh-Khomenko/frontend-labs
              </a>
              <p>Хід роботи</p>
              <p>
                На свій розсуд вибрати любу предметну галузь або частину цієї галузі. Виконати опис
                бізнес-логіки вашого WEB-додатку а саме описати у текстовому форматі, що буде
                виконуватись у ньому. Після цього представити функціонал WEB-додатку у вигляді
                списку.
              </p>
              <p>
                У любому текстовому редакторі (наприклад Notepad++, або звичайний Блокнот) написати
                HTML-код головної сторінки майбутнього WEB-застосунку. Зберігти з розширення .html.
                (Ця сторінка може змінюватись під час виконання наступних лабораторних робіт).
                Примітка: Можно використовувати любий редактор для написання HTML-коду
              </p>
              <p>
                Запустити даний документ у любому браузері для перевірки
              </p>
              <p>
                На головній сторінці створеного документу розмістити на свій розсуд:
                посилання на сторінку с описом предметної галузі
                таблицю
                форму.
                зображеня (або декілька зображень).
              </p>
              <p>
                Запустити у любому браузері для перевірки.
              </p>
              <p>
                Створити шаблон звітного HTML-документу ( приклад надається)
              </p>
              <p>
                До лабораторної роботи №1 у звітному HTML-документу розмістити:

                опис предметного середовища;
                тему, мету, місце розташування WEB-застосунунка та місце звітного HTML-документу;
                стркутуру головної сторінки WEB-застосунунка, яка містить HTML-код таблиці,
                зображення, списків, посилань
                окремо розмістити HTML-код таблиці та скрин-шот цієї таблиці. Додати теорію про теги
                та атрибути, які застосовуються при створенні таблиць
                окремо розмістити HTML-код зображення та скрин-шот цього зображення. Додати теорію
                про атрибути даного тегу.
                окремо розмістити HTML-код списків та скрин-шот ціх списків. Додати теорію про теги
                та атрибути, які застосовуються при створенні списків.
                висновки;

              </p>
            </div>
          </Route>

          <Route path={['/lab1/3', '/lab1/3/1', '/lab1/3/2', '/lab1/3/3']}>
            <Route path={['/lab1/3', '/lab1/3/1']} exact>
              <img src={TABLE} alt="table" />
            </Route>

            <Route path={['/lab1/3', '/lab1/3/2']} exact>
              <img src={FORM} alt="form" />
            </Route>

            <Route path={['/lab1/3', '/lab1/3/3']} exact>
              <img src={IMG} alt="img" />
            </Route>
          </Route>

          <Route path="/lab1/4">
            <ul>
              <li>
                <p>1. Структура HTML-документу</p>
                <pre>
                  <code>
                    html
                    <br />  head
                    <br />    metadata
                    <br />    fonts
                    <br />    styles
                    <br />  body
                    <br />    header
                    <br />      img "logo"
                    <br />    nav
                    <br />      a href=""
                    <br />    main
                    <br />      div.content
                    <br />    aside
                    <br />      a href=""
                    <br />    footer
                    <br />      div.disclaimer
                    <br />      div.copyright
                  </code>
                </pre>
              </li>
              <li>
                <p>2. Дати визначення тега</p>
                <p>Тег - це елемент стандартного мови розмітки тексту в Інтернеті — мови HTML.
                  Даними елементами
                  супроводжується початок і закінчення кожної виділеної частини документа.</p>
              </li>
              <li>
                <p>3. Які теги використовуються при роботі з таблицями</p>
                <p>table, tr, td, thead, tbody, tfoot, col, colgroup</p>
              </li>
              <li>
                <p>4. Які теги використовуються при роботі з зображеннями</p>
                <p>img src="URL" alt="альтернативний текст"</p>
              </li>
              <li>
                <p>Які теги використовуються при роботі зі списками</p>
                <p>ol, ul, li</p>
              </li>
              <li>
                <p>6. Перерахувати засоби опису таблиць в html</p>
                <p>
                  nowrap, colspan, rowspan, width, unit, colspec, dp, cellpadding, align, valign,
                  border,
                  cellspacing
                </p>
              </li>
            </ul>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
