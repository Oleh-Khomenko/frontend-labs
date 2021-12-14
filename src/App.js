import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Lab3 from './pages/lab3/Lab3';
import Lab4 from './pages/lab4/Lab4';
import Lab5 from './pages/lab5/Lab5';
import Lab6 from './pages/lab6/Lab6';

// pages
import Lab1Page from './pages/lab1/Page/Lab1Page';
import Lab2Page from './pages/lab2/Page/Lab2Page';
import Template from './pages/lab3/problem2/Template';
import Template1 from './pages/lab3/problem2/Template1';
import Template11 from './pages/lab3/problem1/Template11';
import Template2 from './pages/lab3/problem3/Template2';
import Template3 from './pages/lab3/problem3/Template3';

// styles
import styles from './App.module.css';

function App() {
  return (
    <>
      <div>
        <Route path="/pages/lab1">
          <Lab1Page />
        </Route>
        <Route path="/pages/lab2">
          <Lab2Page />
        </Route>

        <Route exact path="/pages/lab3/3">
          <Template3 />
        </Route>
        <Route exact path="/pages/lab3/2">
          <Template2 />
        </Route>
        <Route exact path="/pages/lab3/11">
          <Template11 />
        </Route>
        <Route exact path="/pages/lab3/1">
          <Template1 />
        </Route>
        <Route exact path="/pages/lab3/0">
          <Template />
        </Route>

        <Route path="/pages/lab4">
          <Lab1Page />
        </Route>
        <Route path="/pages/lab5">
          <Lab1Page />
        </Route>
        <Route path="/pages/lab6">
          <Lab1Page />
        </Route>
      </div>
      <Route path="/lab*">
        <div className={styles.App}>
          <Header />
          <main className={styles.content_wrapper}>
            <Switch>
              <Route path="/lab1">
                <Lab1 />
              </Route>
              <Route path="/lab2">
                <Lab2 />
              </Route>
              <Route path="/lab3">
                <Lab3 />
              </Route>
              <Route path="/lab4">
                <Lab4 />
              </Route>
              <Route path="/lab5">
                <Lab5 />
              </Route>
              <Route path="/lab6">
                <Lab6 />
              </Route>
              <Route path="/lab*">
                <Redirect to="/lab1">
                  <Lab1 />
                </Redirect>
              </Route>
            </Switch>
          </main>
        </div>
      </Route>
    </>
  );
}

export default App;
