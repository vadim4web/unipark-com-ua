<script setup>
import { defineAsyncComponent } from 'vue'

const RequestEmailForm = defineAsyncComponent(
  () => import('~/components/RequestEmailForm.vue')
)
const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
<main>
  <section class="head flex flex-col gap-[1rem] justify-center items-center overflow-hidden">
    <h2
      class="top-text text-pro-bold text-[12.5rem] text-center relative leading-[137.5%]"
    >
      {{ $t('SINGING') }}
    </h2>

    <a
      href="https://tickets.spivoche.com.ua/event/bth5JOoRTSAs0Po6uXqMpbYcKfqqEWjIYxu-"
      target="_blank"
      rel="button"
      class="bg-white rounded-full w-[12.5rem] h-[3.75rem] flex justify-center items-center text-pro-bold text-[2rem]"
    >
      {{ $t('buy') }}
    </a>
  </section>

  <section class="top grid grid-cols-[1fr_2fr]">
    <div class="left flex flex-col gap-[1.25rem]">
      <div class="term flex flex-col gap-[0.5rem]">
        <div class="term-inner">
          <h3 class="uppercase text-[2.5rem] text-pro-bold  leading-[150%]">
            {{ $t('SINGING') }}
          </h3>

          <p>
            {{ $t('invest_top_left_') }}
          </p>
        </div>

        <div class="social-media flex justify-start items-center gap-[1rem]">
          <a
            href="https://www.youtube.com/@spivoche"
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
          </a>

          <a
            href="https://www.facebook.com/spivochepole"
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 30 30"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
          </a>

          <a
          href="https://www.instagram.com/spivoche/"
            target="_blank"
            rel="noopener noreferrer"
          >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 30 30"
            >
              <path
                d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"
                ></path>
              </svg>
            </a>
          </div>
      </div>

      <div class="term">
        <h3 class="uppercase text-[2.5rem] text-pro-bold">
          {{ $t('invest_top_left_1') }}
        </h3>

        <p>
          {{ $t('address') }}
        </p>
      </div>
    </div>

    <div class="right flex flex-col gap-[2rem]">
      <p class="text-[1.25rem]">
        {{ $t('singing1') }}
      </p>
      <p class="text-[1.25rem]">
        {{ $t('singing2') }}
      </p>
      <p class="text-[1.25rem]">
        {{ $t('singing3') }}
      </p>
    </div>
  </section>

  <section class="gallery">
    <h3 class="text-pro-bold text-[3rem]">
      {{ $t('photo_gallery') }}
    </h3>

    <div class="photos grid grid-cols-3 gap-[1.25rem]">
      <div class="photo photo1"></div>
      <div class="photo photo2"></div>
      <div class="photo photo3"></div>
    </div>
  </section>

  <section class="video-gallery">
    <h3 class="text-pro-bold text-[5rem]">
      {{ $t('video_about') }} {{ $t('SINGING') }}
    </h3>

    <div class="videos grid grid-cols-2 grid-rows-2 gap-[1.25rem]">
      <!-- width="560" height="315" -->
      <div class="video video1">
        <iframe src="https://www.youtube.com/embed/a4_6TrpH9d4?si=2kVhamnyakg6AZU1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="video video2">
        <iframe src="https://www.youtube.com/embed/oDS07TIp9Bs?si=ycN1dwcFjNWVpPsi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="video video3">
        <iframe src="https://www.youtube.com/embed/bnmfbZZw6_k?si=D5xw-kjBgqU0GLUq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div class="video video4">
        <iframe src="https://www.youtube.com/embed/oaKKctlienM?si=0ccvp3eosPAwte_B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>
  </section>

  <section class="press">
    <h3 class="text-pro-bold text-[8.5rem]">
      {{ $t('press_about') }}  {{ $t('SINGING') }}
    </h3>
    
    <a
      href="https://suspilne.media/amp/kyiv/708388-onovlenna-ta-vdoskonalenna-aki-zahodi-proponuut-vidviduvacam-spivocogo-pola-u-kievi/"
      target="_blank"
      rel="noopener noreferrer"
      class="grid grid-cols-[3fr_8fr]"
    >
      <div class="source">
        <h4 class="src text-pro-bold text-[3.5rem]">{{ $t('singing_press_1_src') }}</h4>
        <p class="date text-pro-bold text-[2rem]">19.03.24</p>
      </div>
      <div class="description flex flex-col gap-[0.75rem]">
        <h4 class="title text-bold text-[1.25rem] leading-[133%] uppercase">{{ $t('singing_press_1') }}</h4>
        <p class="preview text-[1.1rem]">{{ $t('singing_press_1_') }}</p>
        <a>{{ $t('more_details') }}</a>
      </div>
    </a>

    <a
      href="https://www.unian.ua/tourism/newsphoto/vistavka-tyulpaniv-na-spivochomu-v-kiyevi-2024-foto-vartist-kvitkiv-ta-grafik-roboti-novini-kiyeva-amp-12620220.html"
      target="_blank"
      rel="noopener noreferrer"
      class="grid grid-cols-[3fr_8fr]"
    >
      <div class="source">
        <h4 class="src text-pro-bold text-[3.5rem]">{{ $t('singing_press_2_src') }}</h4>
        <p class="date text-pro-bold text-[2rem]">29.03.24</p>
      </div>
      <div class="description flex flex-col gap-[0.75rem]">
        <h4 class="title text-bold text-[1.25rem] leading-[133%] uppercase">{{ $t('singing_press_2') }}</h4>
        <p class="preview text-[1.1rem]">{{ $t('singing_press_2_') }}</p>
        <a>{{ $t('more_details') }}</a>
      </div>
    </a>

    <a
      href="https://bigkyiv.com.ua/tyulpany-odnorichnyky-hryzantemy-ilyuminacziyi-spivoche-pole-anonsuye-programu-na-2024-rik/"
      target="_blank"
      rel="noopener noreferrer"
      class="grid grid-cols-[3fr_8fr]"
    >
      <div class="source">
        <h4 class="src text-pro-bold text-[3.5rem]">{{ $t('singing_press_3_src') }}</h4>
        <p class="date text-pro-bold text-[2rem]">17.03.24</p>
      </div>
      <div class="description flex flex-col gap-[0.75rem]">
        <h4 class="title text-bold text-[1.25rem] leading-[133%] uppercase">{{ $t('singing_press_3') }}</h4>
        <p class="preview text-[1.1rem]">{{ $t('singing_press_3_') }}</p>
        <a>{{ $t('more_details') }}</a>
      </div>
    </a>
  </section>

  <section class="info-form">
    <request-email-form mode="info" />
  </section>

  <products-4-view hidden-item="singing" />
</main>
</template>

<style lang="scss" scoped>
.head {
  height: calc(100dvh - var(--header-height));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 100dvh;
    background: url('../assets/img/SINGING.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  h2 {
    color: #fff;
    transform: translateY(-75vh);
    -webkit-transform: translateY(-75vh);
    -moz-transform: translateY(-75vh);
    -ms-transform: translateY(-75vh);
    -o-transform: translateY(-75vh);
    opacity: 0;
  }
}

.top {
	padding-inline: clamp(10vmin, 6rem, 6vmax);
	padding-top: 4.5rem;

	.social-media svg {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10%;
  }
}

.gallery {
  padding-top: 12.25rem;
  padding-inline: 4rem;

  h3 {
    text-indent: 14.5vw;
  }

  .photos {
    margin-top: 18.5rem;
  }

  .photo {
    aspect-ratio: 1;
    background-position: center;
    background-size: cover;
  }

  .photo1 { background-image: url('../assets/img/S_P_1.jpg') }
  .photo2 { background-image: url('../assets/img/S_P_2.jpg') }
  .photo3 { background-image: url('../assets/img/S_P_3.jpg') }
}

.video-gallery {
  padding-top: 26rem;
  padding-inline: 4rem;

  h3 {
    text-indent: 7.5vw;
  }

  .videos {
    padding-top: 27rem;
  }

  .video3,
  .video4 {
    margin-top: 0.66rem;
  }

  .video iframe {
    width: 100%;
    aspect-ratio: 560 / 315;
  }
}

.press {
  padding-top: 3rem;

  h3 {
    text-indent: 15vw;
  }

  a {
    padding-inline: 5rem;
    padding-top: 2.75rem;

    &:not(:last-of-type) {
      border-bottom: 1px solid var(--text-color-gray-25);
    }
  }

  .description {
    padding-top: 1.25rem;
    
    p {
      margin-bottom: -0.25rem;
    }

    a {
      align-self: end;
      position: relative;
      top: -1.75rem;
      left: 3.5rem;
      color: var(--accent);
      text-transform: uppercase;
      font-size: 0.9rem;
      font-family: Arial;
      font-weight: bold;
    }
  }
}

.info-form {
  padding-top: 1rem;
  padding-bottom: 12.5rem;
}
</style>