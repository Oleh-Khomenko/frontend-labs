import { useEffect } from "react";

import lightGallery from "lightgallery";
import lgVideo from 'lightgallery/plugins/video'

import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-video.scss';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import imageList from '../../assets/slider-images';

export default function VideoGallery() {
  useEffect(() => {
    lightGallery(document.getElementById('gallery-videos-demo'), {
      plugins: [lgVideo],
    });
  })

  return (
    <div id="gallery-videos-demo">
      <a
        data-lg-size="1280-720"
        data-src="//www.youtube.com/watch?v=egyIeygdS_E"
        data-poster="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
        data-sub-html="<h4>Visual Soundscapes - Mountains | Planet Earth II | BBC America</h4><p>On the heels of Planet Earth II's record-breaking Emmy nominations, BBC America presents stunning visual soundscapes from the series' amazing habitats.</p>"
      >
        <img
          width="300"
          height="100"
          class="img-responsive"
          src="https://img.youtube.com/vi/egyIeygdS_E/maxresdefault.jpg"
        />
      </a>

      <img
        width="300"
        height="100"
        class="img-responsive"
        src={imageList[0]}
      />

      <img
        width="300"
        height="100"
        class="img-responsive"
        src={imageList[1]}
      />


      <img
        width="300"
        height="100"
        class="img-responsive"
        src={imageList[2]}
      />
    </div>
  );
}
