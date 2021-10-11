import Aside from '../../components/Aside/Aside';
import StyledNav from '../../components/StyledNav/StyledNav';
import styles from './Lab1.module.css';
import Main from '../../components/Main/Main';
import {Route, Switch} from 'react-router-dom';

export default function Lab1() {
  return (
    <div className={styles.content_wrapper}>
      <Aside>
        <StyledNav to={'/lab1/1'}>
          Опис предметного середовища
        </StyledNav>
        <StyledNav to={'/lab1/2'}>
          Тема Мета Місце розташування Лаб1
        </StyledNav>
        
        <StyledNav to={'/lab1/3'} className={styles.list}>
          Структура документа
          <a href="#">HTML-код ТАБЛИЦЬ</a>
          <a href="#">HTML-код ФОРМИ</a>
          <a href="#">HTML-код ЗОБРАЖЕННЯ</a>
        </StyledNav>
        
        <StyledNav to={'/lab1/4'}>
          Висновки
        </StyledNav>
      </Aside>
      <Main>
        <Switch>
          <Route path="/lab1/1">
            <div>
              Опис предметного середовища
            </div>
          </Route>
          
          <Route path="/lab1/2">
            <div>
              Місце
            </div>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
