import { Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  TextField,
  Typography,
  Slider,
} from "@mui/material";

// components
import Aside from '../../components/Aside/Aside';
import Main from '../../components/Main/Main';
import StyledNav from '../../components/StyledNav/StyledNav';

// assets
import TelegramIcon from '@mui/icons-material/Telegram';

// styles
import styles from './Lab5.module.css';
import VideoGallery from "../../components/VideoGallery/VideoGallery";

export default function Lab5() {
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

          </Route>
          <Route path="/lab5/5">
          </Route>
        </Switch>
      </Main>
    </div>
  );
}
