// modules
import { Route, Switch } from 'react-router-dom';

// components
import Main from '../../components/Main/Main';
import Aside from '../../components/Aside/Aside';
import StyledNav from '../../components/StyledNav/StyledNav';
import Template3 from './problem3/Template3';

// assets
import POM_HTML from '../../assets/lab3/pomorova_html.png';
import KHO_HTML from '../../assets/lab3/khomenko_html.png';
import POM_CSS from '../../assets/lab3/pomorova_css.png';
import KHO_CSS from '../../assets/lab3/khomenko_css.png';
import TEMP from '../../assets/lab3/template.png';
import HTML from '../../assets/lab3/html.png';
import GRID from '../../assets/lab3/grid.png';
import FLEX from '../../assets/lab3/flex.png';

// styles
import styles from './Lab3.module.css';

export default function Lab3() {
  return (
    <div className={styles.content_wrapper}>
      <Aside className={styles.aside}>
        <StyledNav to="/lab3/problem3">
          Завдання номер 3
        </StyledNav>
        <StyledNav to={'/lab3/1'}>
          Тема Мета Місце розташування Лаб3
        </StyledNav>
        <StyledNav to={'/lab3/2'}>
          Зовнішній вигляд макету
        </StyledNav>
        <StyledNav to={'/lab3/3'}>
          HTML-код макету
        </StyledNav>
        <StyledNav to={'/lab3/4'}>
          Розмітка сторінки за допомогою grid
        </StyledNav>
        <StyledNav to={'/lab3/5'}>
          Розмітка сторінки за допомогою flexbox
        </StyledNav>

        <StyledNav to={'/lab3/6'} className={styles.list}>
          HTML-код сторінки завдання
          <StyledNav to={'/lab3/6/1'}>
            Поморова
          </StyledNav>
          <StyledNav to={'/lab3/6/2'}>
            Хоменко
          </StyledNav>
        </StyledNav>

        <StyledNav to={'/lab3/7'} className={styles.list}>
          CSS-код сторінки завдання
          <StyledNav to={'/lab3/7/1'}>
            Поморова
          </StyledNav>
          <StyledNav to={'/lab3/7/2'}>
            Хоменко
          </StyledNav>
        </StyledNav>

        <StyledNav to={'/lab3/8'}>
          Висновки
        </StyledNav>
      </Aside>

      {/* Routes */}
      <Main>
        <Switch>
          <Route path="/lab3/problem3">
            <Template3/>
          </Route>
          <Route path="/lab3/1">
            Тема: БЛОЧНА ВЕРСТКА HTML-ДОКУМЕНТУ ЗА МАКЕТОМ. ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX.
            <br/>
            <br/>
            Мета:
            <ul>
              <li>
                придбати практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих
                елементів,
                з’ясувати переваги та недоліки типів макетів веб-сторінок
              </li>
              <li>
                придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
              </li>
            </ul>
            <a
              style={{color: 'blue'}}
              target="_blank"
              rel="noreferrer"
              href="https://kind-goldberg-805e93.netlify.app"
            >
              https://kind-goldberg-805e93.netlify.app
            </a>
            <br/>
            <a
              style={{color: 'blue'}}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Oleh-Khomenko/frontend-labs"
            >
              https://github.com/Oleh-Khomenko/frontend-labs
            </a>
          </Route>

          <Route path="/lab3/2">
            <img src={TEMP} alt="template"/>
          </Route>

          <Route path="/lab3/3">
            <img src={HTML} alt="html"/>
          </Route>

          <Route path="/lab3/4">
            <img src={GRID} alt="grid"/>
          </Route>

          <Route path="/lab3/5">
            <img src={FLEX} alt="flex"/>
          </Route>

          <Route path={['/lab3/6', '/lab3/6/1', '/lab3/6/2']}>
            <Route path={['/lab3/6', '/lab3/6/1']} exact>
              <img src={POM_HTML} alt="pomorova html"/>
            </Route>
            <Route path={['/lab3/6', '/lab3/6/2']} exact>
              <img src={KHO_HTML} alt="khomenko html"/>
            </Route>
          </Route>

          <Route path={['/lab3/7', '/lab3/7/1', '/lab3/7/2']}>
            <Route path={['/lab3/7', '/lab3/7/1']} exact>
              <img src={POM_CSS} alt="pomorova css"/>
            </Route>
            <Route path={['/lab3/7', '/lab3/7/2']} exact>
              <img src={KHO_CSS} alt="khomenko css"/>
            </Route>
          </Route>

          <Route path="/lab3/8">
            <ul>
              <li>
                <p>1. Для чого використовуються каскадні таблиці стилів</p>
                <p>Каскадні таблиці стилів спеціальна мова, яку використовують для запису оформлення сторінок, написаних
                  мовами розмітки даних. Таблиці стилів дають змогу спростити процес створення сторінок і поліпшити їх
                  зовнішній вигляд.</p>
              </li>
              <li>
                <p>2. Які методи визначення стилів HTML-документів ви знаєте.</p>
                <p>Всередині тега style, зовнішній файл .css .scss .sass .less</p>
              </li>
              <li>
                <p>3. У чому різниця між принципами каскадування і спадкування?</p>
                <p>
                  Наслідування в CSS - механізм, за допомогою якого значення властивостей елемента-батька передаються
                  його елементам-нащадкам.
                </p>
                <p>
                  Каскадність означає, що до одного і того ж елементу може застосовуватися кілька CSS-правил (наборів
                  CSS-властивостей). Серед цих властивостей можуть бути і конфліктуючі між собою. Тому існують
                  інструкції, які визначають, яким буде фінальний набір властивостей елемента.</p>
              </li>
              <li>
                <p>4. Як в HTML-документі оформлюються селектори тегу і класу?</p>
                <p>.class {'{}'}</p>
                <p>main {'{}'}</p>
              </li>
              <li>
                <p>5. Для чого використовується ідентифікатор?</p>
                <p>
                  Вказує стильовий ідентифікатор — унікальне ім`я елемента, яке використовується для зміни його стилю та
                  звернення до нього через скрипти. Ідентифікатор у коді документа має бути в єдиному екземплярі, іншими
                  словами, зустрічатися лише один раз.
                </p>
              </li>
              <li>
                <p>6. Що таке псевдокласи і псевдоелементи?</p>
                <p>
                  Псевдокласи - це селектори, які визначають стан вже існуючих елементів, яке може змінюватися за
                  певних умов.
                </p>
                <p>
                  Псевдоелементи - це селектори, які визначають областьелементов. яка спочатку відсутня в дереві
                  документа. Ця область створюється штучно за допомогою CSS.
                </p>
              </li>
              <li>
                <p>7. Навести приклади оформлення текстових елементів.</p>
                <p className={styles.colored_text}>
                  РОЗФАРБОВАНИЙ ТЕКСТ
                </p>
                <p className={styles.gradient_text}>
                  ГРАДІЄНТНИЙ ТЕКСТ
                </p>
                <p className={styles.shadow_text}>
                  ТЕКСТ З ТІНЯМИ
                </p>
              </li>
            </ul>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
