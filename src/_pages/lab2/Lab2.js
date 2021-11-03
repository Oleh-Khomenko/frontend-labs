// modules
import {Route, Switch} from 'react-router-dom';

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
      <Aside>
        <StyledNav to={'/lab2/1'}>
          Тема Мета Місце розташування Лаб1
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
            <div>
              Місце тема мета
            </div>
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
            <img style={{float: 'left'}} src="" alt="<some image>"/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ea et fuga laudantium ut!
              Aspernatur
              beatae dolorum et facilis, fuga impedit iusto laborum magni nesciunt nostrum odit quibusdam sed, tempore
              ut
              vel veritatis voluptatum! Architecto libero mollitia optio quo vitae!
            </p>
            <img src={FLOAT} alt="float"/>
          </Route>
          
          <Route path="/lab2/6/1">
            <p>p {'{ '} style_property {' }'} {'<'}- селектор тегу</p>
            <p>.class {'{ '} style_property {' }'} {'<'}- селектор класу</p>
            <img src={SELECTORS} alt="selectors"/>
          </Route>
          <Route path="/lab2/6/2">
            <p>* {'{ '} style_property {' }'} {'<'}- універсальний селектор</p>
            <p>.class > div {'{ '} style_property {' }'} {'<'}- селектор дочірнього div</p>
            <p>input[type=button] {'{ '} style_property {' }'} {'<'}- селектор атрибута</p>
          </Route>
          <Route path="/lab2/6/3">
            <p>.class1, .class2, tag1, tag2 {'{ '} style_property {' }'} {'<'}- групування селекторів</p>
          </Route>
          <Route path="/lab2/6">
            <p>p {'{ '} style_property {' }'} {'<'}- селектор тегу</p>
            <p>.class {'{ '} style_property {' }'} {'<'}- селектор класу</p>
            <img src={SELECTORS} alt="selectors"/>
            <p>* {'{ '} style_property {' }'} {'<'}- універсальний селектор</p>
            <p>.class > div {'{ '} style_property {' }'} {'<'}- селектор дочірнього div</p>
            <p>input[type=button] {'{ '} style_property {' }'} {'<'}- селектор атрибута</p>
            <p>.class1, .class2, tag1, tag2 {'{ '} style_property {' }'} {'<'}- групування селекторів</p>
          </Route>
          
          <Route path="/lab2/7">
            Conclusion
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
