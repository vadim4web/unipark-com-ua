<script setup>
import { defineAsyncComponent } from 'vue'
import TICKETS from '~/assets/icons/TICKETS.png'
import CATERING from '~/assets/icons/CATERING.png'
import SOUVENIRS from '~/assets/icons/SOUVENIRS.png'
import PROMO from '~/assets/icons/PROMO.png'

const RequestEmailForm = defineAsyncComponent(
  () => import('~/components/RequestEmailForm.vue')
)
</script>

<template>
  <main class="invest">
    <section
      class="head w-full h-[42.5rem] grid grid-rows-2 justify-items-center overflow-hidden"
    >
      <h2
        class="top-text self-end text-[12.5rem] uppercase text-pro-bold text-center leading-[69%] relative top-[3.5rem]"
      >
        {{ $t('invest').split(' ')[0] }}<br />
        {{ $t('invest').split(' ')[1] }}
      </h2>
      <h3
        class="bottom-text self-start text-[2rem] uppercase relative top-[9rem] leading-none"
      >
        {{ $t('invest_h3') }}
      </h3>
    </section>

    <section class="top grid grid-cols-[1fr_2fr]">
      <div class="left flex flex-col gap-[1.25rem]">
        <div class="term flex flex-col gap-[1rem]">
          <div class="term-inner">
            <h3 class="uppercase text-[2.5rem] text-pro-bold">
              {{ $t('invest_top_left') }}
            </h3>

            <p>
              {{ $t('invest_top_left_') }}
            </p>
          </div>

          <div
            class="social-media flex flex-row-reverse justify-end items-center gap-[1rem]"
          >
            <a
              href="https://www.facebook.com/uniparkua"
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
              href="https://www.instagram.com/uniparkua/"
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
        <div class="term">
          <h3 class="uppercase text-[2.5rem] text-pro-bold">
            {{ $t('invest_top_right') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('invest_top_right_') }}
          </p>
        </div>
        <div class="term">
          <h3 class="uppercase text-[2.5rem] text-pro-bold">
            {{ $t('invest_top_right_1') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('invest_top_right_1_') }}
          </p>
        </div>
        <div class="term">
          <h3 class="uppercase text-[2.5rem] text-pro-bold">
            {{ $t('invest_top_right_2') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('invest_top_right_2_') }}
          </p>
        </div>
        <div class="term">
          <h3 class="uppercase text-[2.5rem] text-pro-bold">
            {{ $t('invest_top_right_3') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('invest_top_right_3_') }}
          </p>
        </div>
        <h3 class="term uppercase text-[3rem] text-pro-bold leading-none">
          {{ $t('invest_top_right_4') }}
        </h3>
      </div>
    </section>

    <section class="mid text-center">
      <div class="text grid grid-cols-4">
        <h2 class="text-[6.25rem] text-pro-bold heading">
          {{ $t('invest_mid_center') }}
        </h2>
      </div>

      <div class="cards grid grid-cols-4 gap-[1.5rem]">
        <div
          class="card card1 flex flex-col items-center outline outline-(--accent) gap-[2rem]"
        >
          <img :src="TICKETS" alt="tickets" />
          <p class="text-[1.85rem] uppercase text-pro-bold">
            {{ $t('invest_mid_p1') }}
          </p>
        </div>
        <div
          class="card card2 flex flex-col items-center outline outline-(--accent) gap-[2rem]"
        >
          <img :src="CATERING" alt="catering" />
          <p class="text-[1.85rem] uppercase text-pro-bold">
            {{ $t('invest_mid_p2') }}
          </p>
        </div>
        <div
          class="card card3 flex flex-col items-center outline outline-(--accent) gap-[2rem]"
        >
          <img :src="SOUVENIRS" alt="souvenirs" />
          <p class="text-[1.85rem] uppercase text-pro-bold">
            {{ $t('invest_mid_p3') }}
          </p>
        </div>
        <div
          class="card card4 flex flex-col items-center outline outline-(--accent) gap-[2rem]"
        >
          <img :src="PROMO" alt="promo" />
          <p class="text-[1.85rem] uppercase text-pro-bold">
            {{ $t('invest_mid_p4') }}
          </p>
        </div>
      </div>
    </section>

    <section class="stats w-full flex flex-col items-center gap-[1.25rem]">
      <h2 class="text-[4.5rem] text-pro-bold">
        {{ $t('invest_stats') }}
      </h2>

      <div class="cards grid grid-cols-3 w-full gap-[1.5rem]">
        <div class="card flex flex-col items-center text-center">
          <h3 class="uppercase text-[2rem]">
            {{ $t('SINGING') }}
          </h3>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_upto') }}
          </span>
          <span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">200</span>
          <span class="thouthends text-[2.5rem] leading-none text-pro-bold">
            {{ $t('invest_stats_upto_') }}<br />
            {{ $t('invest_stats_upto__') }}
          </span>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_peryear') }}
          </span>
        </div>

        <div class="card flex flex-col items-center text-center">
          <h3 class="uppercase text-[2rem]">
            {{ $t('GIANTS_WORLD') }}
          </h3>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_upto') }}
          </span>
          <span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">143</span>
          <span class="thouthends text-[2.5rem] leading-none text-pro-bold">
            {{ $t('invest_stats_upto_') }}<br />
            {{ $t('invest_stats_upto__') }}
          </span>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_peryear') }}
          </span>
        </div>

        <div class="card flex flex-col items-center text-center">
          <h3 class="uppercase text-[2rem]">
            {{ $t('LIGHT_AND_DREAMS') }}
          </h3>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_upto') }}
          </span>
          <span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">150</span>
          <span class="thouthends text-[2.5rem] leading-none text-pro-bold">
            {{ $t('invest_stats_upto_') }}<br />
            {{ $t('invest_stats_upto__') }}
          </span>
          <span class="text-[1.25rem]">
            {{ $t('invest_stats_peryear') }}
          </span>
        </div>
      </div>
    </section>

    <request-email-form mode="finance" />
  </main>
</template>

<style lang="scss" scoped>
.head {
  background: var(--gradient-bg);
  color: #fff;

  h2 {
    transform: translateY(-75vh);
    -webkit-transform: translateY(-75vh);
    -moz-transform: translateY(-75vh);
    -ms-transform: translateY(-75vh);
    -o-transform: translateY(-75vh);
    opacity: 0;
  }

  h3 {
    transform: translateY(75vh);
    -webkit-transform: translateY(75vh);
    -moz-transform: translateY(75vh);
    -ms-transform: translateY(75vh);
    -o-transform: translateY(75vh);
    opacity: 0;
  }
}

.top {
  padding-inline: clamp(10.5vmin, 7rem, 6.25vmax);
  padding-top: 4rem;

  .social-media svg {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10%;
  }

  .right .term:last-child {
    padding-top: 0.5rem;
  }
}

.mid {
  padding-inline: clamp(5.25vmin, 3.5rem, 3.125vmax);
  padding-top: 9.5rem;
  padding-bottom: 2rem;

  .text {
    padding-bottom: 13.5rem;
    .heading {
      grid-area: heading;
    }
    grid-template-areas: 'heading heading heading .';
  }

  .cards {
    .card1 {
      grid-area: card1;
    }
    .card2 {
      grid-area: card2;
    }
    .card3 {
      grid-area: card3;
    }
    .card4 {
      grid-area: card4;
    }
    grid-template-areas: 'card1 card2 card3 card4';

    .card {
      padding: 2.25rem;

      img {
        width: 6.25rem;
      }
    }
  }
}

.stats,
.visibility-avg {
  background: var(--gradient-bg-45);
}

.stats {
  padding-block: 1.25rem;
  padding-inline: clamp(5.25vmin, 3.5rem, 3.125vmax);

  h2 {
    color: var(--bg-color);
  }

  .cards {
    .card {
      background: var(--bg-color);
      width: 100%;
      padding: 2rem 1rem;
    }
  }

  .visibility-avg {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
  }

  .thouthends {
    color: var(--link-color);
  }
}
</style>
