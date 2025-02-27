<script setup>
import { defineAsyncComponent } from 'vue'

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
      {{ $t('LIGHT_AND_DREAMS') }}
    </h2>

    <a
      href="https://tickets.lightsdreams.com.ua/event/Y8Qs3iteFW23_yzeOjuPrH6l2g0j8eJYJMMp"
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
            {{ $t('LIGHT_AND_DREAMS') }}
          </h3>

          <p>
            {{ $t('invest_top_left_') }}
          </p>
        </div>

        <div class="social-media flex justify-start items-center gap-[1rem]">
          <a
            href="https://www.youtube.com/@Lights_and_Dreams"
            target="_blank"
            rel="noopener noreferrer"
            >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
          </a>

          <a
            href="https://www.facebook.com/lightsdreams.uzhhorod"
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
          href="https://www.instagram.com/lightsdreams.uzhhorod/"
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
        {{ $t('light_and_dreams1') }}
      </p>
      <p class="text-[1.25rem]">
        {{ $t('light_and_dreams2') }}
      </p>
      <p class="text-[1.25rem]">
        {{ $t('light_and_dreams3') }}
      </p>
      <p class="text-[1.25rem]">
        {{ $t('light_and_dreams4') }}
      </p>
    </div>
  </section>

  <products-4-view hiddenItem="light-and-dreams" />
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
    background: url('../assets/img/LIGHT_AND_DREAMS.jpeg');
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
	min-height: 50vh;

	.social-media svg {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10%;
  }
}
</style>