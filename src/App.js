import { Redirect, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header/Header';
import Lab1 from './pages/lab1/Lab1';
import Lab2 from './pages/lab2/Lab2';
import Lab3 from './pages/lab3/Lab3';
import Lab4 from './pages/lab4/Lab4';

// styles
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <main className={styles.content_wrapper}>
        <Switch>
          <Route path="/lab1">
            <Lab1/>
          </Route>
          <Route path="/lab2">
            <Lab2/>
          </Route>
          <Route path="/lab3">
            <Lab3/>
          </Route>
          <Route path="/lab4">
            <Lab4/>
          </Route>
          <Route path="*">
            <Redirect to="/lab1">
              <Lab1/>
            </Redirect>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
