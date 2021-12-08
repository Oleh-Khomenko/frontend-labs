import { useEffect, useState } from "react";
import { Route, Switch } from 'react-router-dom';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Slider,
  TextField,
  Typography,
} from "@mui/material";

// components
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';
import StyledNav from '../../components/StyledNav/StyledNav';
import VideoGallery from "../../components/VideoGallery/VideoGallery";
import WeatherWidget from "../../components/WeatherWidget/WeatherWidget";

// assets
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';

// styles
import styles from './Lab5.module.css';
import Clock from "../../components/Clock/Clock";
import Lab6Api from "../../api/lab6.api";

// constants
const EXCHANGE_URL = 'https://openexchangerates.org/api/latest.json?app_id=e005311115aa4755b0cd82dde7bf34ef';

export default function Lab5() {
  const [exchangeData, setExchangeData] = useState({});

  useEffect(() => {
    requestExchangeData().then(res => setExchangeData(res));
  }, []);

  function wrapRates() {
    const ratesObj = exchangeData?.rates;
    if (ratesObj) {
      const rates = [];
      for (const ratesKey in ratesObj) {
        rates.unshift(
          <p key={ratesKey}>
            {ratesKey}:&nbsp;
            <span style={{color: 'darkred'}}>{ratesObj[ratesKey]}</span>
          </p>);
      }
      return rates;
    }
    return null;
  }

  async function requestExchangeData() {
    let response = await fetch(EXCHANGE_URL);

    if (response.ok) {
      return await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  }

  return (
    <div className={styles.content_wrapper}>
      <Aside className={styles.aside}>
        <StyledNav to="/lab5/1">
          Постановка задачі
        </StyledNav>
        <StyledNav to="/lab5/2">
          Динамічні елементи
        </StyledNav>
        <StyledNav to="/lab5/3">
          Галерея
        </StyledNav>
        <StyledNav to="/lab5/4">
          Кнопки соціальних мереж
        </StyledNav>
        <StyledNav to="/lab5/5">
          Інформери
        </StyledNav>
        <StyledNav to="/lab5/6">
          Висновки
        </StyledNav>
      </Aside>

      {/* routes */}
      <Main>
        <Switch>
          <Route path="/lab5/1">
            <p>
              Тема: ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.
              КЛАСИ,ОБ’ЄКТИ, ФУНКЦІЇ, В МОВІ JAVASCRIPT. ПОДІЇ ТА ОБРОБКА ПОДІЙ.
              ПРОГРАМНА ВЗАЄМОДІЯ З HTML ДОКУМЕНТАМИ НА ОСНОВІ DOM АРІ
              <br/>
              <br/>
              Мета:
              <ul>
                <li>
                  придбати практичні навички роботи маніпулювання інформаційним вмістом Web-документа засобами мови
                  JavaScript, використання об’єктів,масивів, функцій, подій, обробників подій у сценаріях на мові
                  JavaScript
                </li>
                <li>
                  придбати практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
                </li>
              </ul>
            </p>
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
          <Route path="/lab5/2">
            <Accordion sx={{mb: 4}}>
              <AccordionSummary
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Accordion 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <TextField
              id="date"
              label="DatePicker"
              type="date"
              defaultValue="2017-05-24"
              sx={{width: 220}}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto"/>
          </Route>
          <Route path="/lab5/3">
            <p style={{color: 'red'}}>
              Click on the first image to watch the video
            </p>
            <VideoGallery/>
          </Route>
          <Route path="/lab5/4">
            <IconButton
              href="https://web.telegram.org/"
              target="_blank"
              rel="noreferrer"
            >
              <TelegramIcon/>
            </IconButton>

            <IconButton
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon/>
            </IconButton>

            <IconButton
              href="https://uk-ua.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon/>
            </IconButton>

            <IconButton
              href="https://www.pinterest.ru/"
              target="_blank"
              rel="noreferrer"
            >
              <PinterestIcon/>
            </IconButton>
          </Route>

          <Route path="/lab5/5">
            <WeatherWidget/>
            <iframe width="300" height="120" frameBorder="0" title="Exchange"
                    src="https://informer.minfin.com.ua/gen/course/?color=yellow"
                    vspace="0" scrolling="no" hspace="0" allowTransparency="true"
                    style={{width: 300, height: 120, marginTop: 16, overflow: 'hidden'}}>
            </iframe>
            <div className={styles.exchange_rates_informer}>
              <p style={{color: 'red'}}>Base: 1 USD</p>
              <p>
                Date:&nbsp;
                <span style={{color: 'red'}}>
                  {new Date(exchangeData.timestamp * 1000).toDateString()}
                </span>
              </p>
              {wrapRates()}
            </div>
            <Clock/>
          </Route>

          <Route path="/lab5/6">
            Придбати практичні навички роботи material UI, вміти додавати до сайту динамічні елементи цієї бібіліотеки,
            плагін галереї, кнопки соціальних мереж, інформери та інше.
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
