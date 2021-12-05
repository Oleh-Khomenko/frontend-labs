import { useEffect, useRef, useState } from 'react';

// assets
import arrowLeft from '../../assets/arrow-left-solid.png';
import arrowRight from '../../assets/arrow-right-solid.png';

// styles
import styles from './Slider.module.css';

export default function Slider({
  images,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loop, setLoop] = useState(true);
  const [autoPlay, setAutoPlay] = useState(true);
  const [delay, setDelay] = useState(1);
  const [timer, setTimer] = useState(+new Date());
  const [eventTime, setEventTime] = useState(+new Date() + delay * 1000);
  const [imgSize, setImgSize] = useState(100);

  const inputRef = useRef(null);

  useEffect(() => {
    const timerDelay = setInterval(() => {
      setTimer(new Date());
    }, 100);

    return () => {
      clearInterval(timerDelay);
    };
  }, []);

  useEffect(() => {
    if (timer > eventTime) {
      if (autoPlay) {
        nextImage();
      }
      setEventTime(+new Date() + delay * 1000);
    }
  }, [timer, autoPlay, delay, eventTime, nextImage]);

  function zoomIn() {
    setImgSize(imgSize + 20);
  }

  function zoomOut() {
    if (imgSize > 30) {
      setImgSize(imgSize - 20);
    }
  }

  function handleChangeLoop() {
    setLoop(!loop);
  }

  function handleChangeDelay() {
    let delay = inputRef.current?.value;
    if (delay < 1) {
      delay = 1;
    }
    setDelay(delay);
  }

  function handleChangeAutoPlay() {
    setAutoPlay(!autoPlay);
  }

  function prevImage() {
    if (currentImageIndex === 0) {
      if (loop) {
        setCurrentImageIndex(images.length - 1);
      } else {
        setCurrentImageIndex(0);
      }
    } else {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  }

  function nextImage() {
    if (currentImageIndex === images.length - 1) {
      if (loop) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(images.length - 1);
      }
    } else {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  }

  return (
    <div className={styles.slider_wrapper}>
      <div className={styles.slider}>
        <button
          onClick={prevImage}
        >
          <img src={arrowLeft} alt="arrow left"/>
        </button>
        <div className={styles.scroll_wrapper}>
          <p>{currentImageIndex + 1}:{images.length}</p>
          <img
            src={images[currentImageIndex]}
            alt="current img"
            width={`${imgSize}%`}
          />
        </div>
        <button
          onClick={nextImage}
        >
          <img src={arrowRight} alt="arrow right"/>
        </button>
      </div>
      <div className={styles.control_panel}>
        <div className={styles.zoom}>
          <button onClick={zoomOut}>-</button>
          <button onClick={zoomIn}>+</button>
        </div>
        <div>
          <button
            onClick={handleChangeLoop}
          >
            loop: {loop ? 'on' : 'off'}
          </button>
          <button
            onClick={handleChangeAutoPlay}
          >
            Auto play: {autoPlay ? 'on': 'off'}
          </button>
          <label htmlFor="delay">delay (s): </label>
          <input
            id="delay"
            type="number"
            placeholder="delay"
            ref={inputRef}
            defaultValue={delay}
          />
          <button
            onClick={handleChangeDelay}
          >
            set delay
          </button>
        </div>
      </div>
    </div>
  );
}
