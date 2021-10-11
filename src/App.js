import styles from './App.module.css';
import Header from "./components/Header/Header";
import {Redirect, Route, Switch} from 'react-router-dom';
import Lab1 from './_pages/lab1/Lab1';

function App() {
  return (
    <div className="App">
        <Header/>
        <main className={styles.content_wrapper}>
          <Switch>
            <Route path="/lab1">
              <Lab1/>
            </Route>
            <Route path="/lab2">
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
