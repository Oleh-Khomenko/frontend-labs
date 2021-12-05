import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';

// components
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';
import StyledNav from '../../components/StyledNav/StyledNav';
import Slider from '../../components/Slider/Slider';

// helpers
import selectionSort from '../../helpers/selection-sort';

// assets
import sliderImages from '../../assets/slider-images';

// styles
import styles from './Lab4.module.css';

export default function Lab4() {
  const [count, setCount] = useState(1);
  const [arr, setArr] = useState([]);
  const [sortedArr, setSortedArr] = useState([]);
  const [minArrValue, setMinArrValue] = useState({});
  const [maxArrValue, setMaxArrValue] = useState({});
  
  function handleSetCount(ev) {
    let count = ev.target.value;
    if (count > 5000) {
      count = 5000;
    }
    if (count < 1) {
      count = 1;
    }
    setCount(count);
  }
  
  function createArray() {
    const temp_arr = [];
    for (let i = 0; i < count; i++) {
      temp_arr.unshift(+(Math.random() * 100 - 50).toFixed(3));
    }
    setArr(temp_arr);
    setSortedArr(selectionSort(temp_arr));
    setMinArrValue(
      {
        min: Math.min(...temp_arr.filter((_, index) => index % 2 === 1)),
        minPaired: Math.min(...temp_arr.filter((_, index) => index % 2 === 0)),
      },
    );
    setMaxArrValue(
      {
        max: Math.max(...temp_arr.filter((_, index) => index % 2 === 1)),
        maxPaired: Math.max(...temp_arr.filter((_, index) => index % 2 === 0)),
      },
    );
  }
  
  return (
    <div className={styles.content_wrapper}>
      <Aside className={styles.aside}>
        <StyledNav to="/lab4/1">
          Постановка задачі
        </StyledNav>
        <StyledNav to="/lab4/2">
          Способи функціонального застосування JS
        </StyledNav>
        <StyledNav to="/lab4/3">
          Масиви
        </StyledNav>
        <StyledNav to="/lab4/4">
          Виконання 6 пункту
        </StyledNav>
        <StyledNav to="/lab4/5">
          Висновки
        </StyledNav>
      </Aside>
      
      {/* routes */}
      <Main>
        <Switch>
          <Route path="/lab4/1">
          
          </Route>
          <Route path="/lab4/2">
          
          </Route>
          <Route path="/lab4/3">
            <input
              className={styles.input}
              type="number"
              value={count}
              onChange={handleSetCount}
            />
            <button
              className={styles.button}
              onClick={createArray}
            >
              Create array
            </button>
            <div>
              <p style={{ color: 'red' }}>Мінімальний елемент:</p>
              <p>Непарні індекси: {minArrValue.min}</p>
              <p>Парні індекси: {minArrValue.minPaired}</p>
              
              <p style={{ color: 'red' }}>Максимальний елемент:</p>
              <p>Непарні індекси: {maxArrValue.max}</p>
              <p>Парні індекси: {maxArrValue.maxPaired}</p>
              
              <p style={{ color: 'red' }}>Початковий масив:</p>
              [{arr.join(',\n')}]
              
              <p style={{ color: 'red' }}>Відсортований (методом вибору) масив:</p>
              [{sortedArr.join(',\n')}]
            </div>
          </Route>
          <Route path="/lab4/4">
            <Slider images={sliderImages}/>
          </Route>
        </Switch>
      </Main>
    </div>
  );
}