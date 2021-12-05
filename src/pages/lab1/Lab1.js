import Aside from '../../components/Aside/Aside';
import StyledNav from '../../components/StyledNav/StyledNav';
import styles from './Lab1.module.css';
import Main from '../../components/Main/Main';
import { Route, Switch } from 'react-router-dom';
import classNames from 'classnames';

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
              <p>Обрана предметна галузь: сайт по доставці їжі з кафе та ресторанів</p>
              
              <p>Функціональні вимоги:</p>
              <ul>
                <li>
                  Користувач повинен мати змогу потрібний заклад для покупки
                </li>
                <li>
                  Система повинен надавати змогу переглядати користувачу потрібну інформацію про товар: ціну, вагу,
                  склад
                  та інше
                </li>
                <li>
                  Користувач повинен мати змогу виконувати навігацію по сайту, добавити товар у корзину, зробити
                  замовлення
                </li>
                <li>
                  Кожне замовлення повинно бути забезпечене унікальним ідентифікатором, який буде зберігатись в
                  особистому
                  кабінеті
                </li>
              </ul>
              
              <p>
                Застосовність:
                Час, який необхідно затратити на навчання менеджерів приблизно дорівнює 2 робочих дні. Час для відгуку
                на
                типові задачі – не більше 3 секунд. Середній час безвідмовної роботи -30 днів.
              </p>
              
              <p>
                Надійність:
                Сервіс надає можливість замовити потрібну їжу В разі випадкового небажаного виходу з сторінки користувач
                має змогу проглянути своє замовлення в особистому кабінеті, тобто дані не втрачаються.
              </p>
              
              <p>
                Продуктивність:
                Система повинна швидко реагувати на можливі виключення, має бути стійкою до збоїв. Програма буде мати
                можливість обробляти тести без перебоїв та з прийнятною для користувача швидкістю.
              </p>
            </div>
          </Route>
          
          <Route path="/lab1/2">
            <div>
              <p>
                Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ.
                РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, ФОРМАМИ в HTML-ДОКУМЕНТІ.
                <br/>
                <br/>
                Мета: придбати практичні навички роботи з HTML-документом, таблицями,формами, зображеннями, посиланнями.
                Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.
              </p>
              <a
                style={{ color: 'blue' }}
                target="_blank"
                rel="noreferrer"
                href="https://kind-goldberg-805e93.netlify.app"
              >
                https://kind-goldberg-805e93.netlify.app
              </a>
              <br/>
              <a
                style={{ color: 'blue' }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Oleh-Khomenko/frontend-labs"
              >
                https://github.com/Oleh-Khomenko/frontend-labs
              </a>
            </div>
          </Route>
          
          <Route path={['/lab1/3', '/lab1/3/1', '/lab1/3/2', '/lab1/3/3']}>
            <Route path={['/lab1/3', '/lab1/3/1']} exact>
              {'<table><tr><th></th></tr></table>'}
              <br/>
            </Route>
            
            <Route path={['/lab1/3', '/lab1/3/2']} exact>
              {'<form><input/><button type="submit"></button></form>'}
              <br/>
            </Route>
            
            <Route path={['/lab1/3', '/lab1/3/3']} exact>
              {'<img src="" alt=""/>'}
              <br/>
            </Route>
          </Route>
          
          <Route path="/lab1/4">
            <ul>
              <li>
                <p>1. Структура HTML-документу</p>
                <pre>
                  <code>
                    html
                    <br/>  head
                    <br/>    metadata
                    <br/>    fonts
                    <br/>    styles
                    <br/>  body
                    <br/>    header
                    <br/>      img "logo"
                    <br/>    nav
                    <br/>      a href=""
                    <br/>    main
                    <br/>      div.content
                    <br/>    aside
                    <br/>      a href=""
                    <br/>    footer
                    <br/>      div.disclaimer
                    <br/>      div.copyright
                  </code>
                </pre>
              </li>
              <li>
                <p>2. Дати визначення тега</p>
                <p>Тег - це елемент стандартного мови розмітки тексту в Інтернеті — мови HTML. Даними елементами
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
                  nowrap, colspan, rowspan, width, unit, colspec, dp, cellpadding, align, valign, border,
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
