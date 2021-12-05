// modules
import { Route, Switch } from 'react-router-dom';

// components
import Main from '../../components/Main/Main';
import Aside from '../../components/Aside/Aside';
import StyledNav from '../../components/StyledNav/StyledNav';

// assets
import LIST from '../../assets/lab2/list.png';
import ID from '../../assets/lab2/id.png';
import RET from '../../assets/lab2/retreat.png';
import FLOAT from '../../assets/lab2/float.png';
import SELECTORS from '../../assets/lab2/class_tag_selector.png';


// styles
import styles from './Lab2.module.css';

export default function Lab2() {
  return (
    <div className={styles.content_wrapper}>
      <Aside className={styles.aside}>
        <StyledNav to={'/lab2/1'}>
          Тема Мета Місце розташування Лаб2
        </StyledNav>
        <StyledNav to={'/lab2/2'}>
          Списки
        </StyledNav>
        <StyledNav to={'/lab2/3'}>
          Ідентифікатори
        </StyledNav>
        <StyledNav to={'/lab2/4'}>
          Відступи
        </StyledNav>
        <StyledNav to={'/lab2/5'}>
          Плаваючі елементи
        </StyledNav>
        
        <StyledNav to={'/lab2/6'} className={styles.list}>
          Селектори
          <StyledNav to="/lab2/6/1">Селектори тегу і класу</StyledNav>
          <StyledNav to="/lab2/6/2">Інші селектори</StyledNav>
          <StyledNav to="/lab2/6/3">Групування селекторів</StyledNav>
        </StyledNav>
        
        <StyledNav to={'/lab2/7'}>
          Висновки
        </StyledNav>
      </Aside>
      <Main>
        <Switch>
          <Route path="/lab2/1">
            <p>
              Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В
              HTML-ДОКУМЕНТАХ.
              <br/>
              <br/>
              Мета: придбати практичні навички роботи з селекторами,ідентифікаторами, списками, різноманітними
              властивостями кольору і фону, зовнішними та внутрішними відступами, плаваючими елементами, оформленням
              текстових елементів
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
          </Route>
          
          <Route path="/lab2/2">
            <ul>
              <li>
                Не нумерований список
              </li>
            </ul>
            <ol>
              <li>
                Нумерований список
              </li>
            </ol>
            <img src={LIST} alt="list"/>
          </Route>
          
          <Route path="/lab2/3">
            <p>
              #obj_name {`{ `}
              style_properties
              {` }`}
            </p>
            <img src={ID} alt="id"/>
          </Route>
          
          <Route path="/lab2/4">
            <img src={RET} alt="retreat"/>
          </Route>
          
          <Route path="/lab2/5">
            <p>.class {'{ '} float: [side] {' }'}</p>
            <img style={{ float: 'left' }} src="" alt="img"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea et fuga laudantium ut!
              Aspernatur
              beatae dolorum et facilis, fuga impedit iusto laborum magni nesciunt nostrum odit quibusdam sed, tempore
              ut
              vel veritatis voluptatum! Architecto libero mollitia optio quo vitae!
            </p>
            <img src={FLOAT} alt="float"/>
          </Route>
          
          <Route path={['/lab2/6', '/lab2/6/1', '/lab2/6/2', '/lab2/6/3']}>
            <Route path={['/lab2/6', '/lab2/6/1']} exact>
              <p>p {'{ '} style_property {' }'} {'<'}- селектор тегу</p>
              <p>.class {'{ '} style_property {' }'} {'<'}- селектор класу</p>
              <img src={SELECTORS} alt="selectors"/>
            </Route>
            <Route path={['/lab2/6', '/lab2/6/2']} exact>
              <p>* {'{ '} style_property {' }'} {'<'}- універсальний селектор</p>
              <p>.class > div {'{ '} style_property {' }'} {'<'}- селектор дочірнього div</p>
              <p>input[type=button] {'{ '} style_property {' }'} {'<'}- селектор атрибута</p>
            </Route>
            <Route path={['/lab2/6', '/lab2/6/3']} exact>
              <p>.class1, .class2, tag1, tag2 {'{ '} style_property {' }'} {'<'}- групування селекторів</p>
            </Route>
          </Route>
          
          <Route path="/lab2/7">
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
