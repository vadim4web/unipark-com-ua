<script setup>
import { defineAsyncComponent } from 'vue'
import PRODUCTION from '~/assets/img/PRODUCTION.jpg'
import PRODUCTION_1 from '~/assets/img/PRODUCTION_1.jpg'
import PRODUCTION_2 from '~/assets/img/PRODUCTION_2.jpg'
import PRODUCTION_3 from '~/assets/img/PRODUCTION_3.jpg'
import PRODUCTION_4 from '~/assets/img/PRODUCTION_4.jpg'
import PRODUCTION_5 from '~/assets/img/PRODUCTION_5.jpg'
import PRODUCTION_6 from '~/assets/img/PRODUCTION_6.jpg'

const RequestEmailForm = defineAsyncComponent(
  () => import('~/components/RequestEmailForm.vue')
)
const Products4View = defineAsyncComponent(
  () => import('~/components/Products4View.vue')
)
</script>

<template>
  <main class="production">
    <section class="head flex justify-center items-center overflow-hidden">
      <h2
        class="top-text text-pro-bold text-[12.5rem] text-center relative leading-[137.5%]"
      >
        {{ $t('production') }}
      </h2>
    </section>
    <section class="cards">
      <div class="card">
        <img :src="PRODUCTION_1" alt="PRODUCTION_1" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_1') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_1_') }}
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="PRODUCTION_2" alt="PRODUCTION_2" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_2') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_2_') }}
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="PRODUCTION_3" alt="PRODUCTION_3" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_3') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_3_') }}
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="PRODUCTION_4" alt="PRODUCTION_4" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_4') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_4_') }}
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="PRODUCTION_5" alt="PRODUCTION_5" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_5') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_5_') }}
          </p>
        </div>
      </div>
      <div class="card">
        <img :src="PRODUCTION_6" alt="PRODUCTION_6" />
        <div class="text">
          <h3 class="text-pro-bold text-[4.5rem]">
            {{ $t('production_6') }}
          </h3>
          <p class="text-[1.25rem]">
            {{ $t('production_6_') }}
          </p>
        </div>
      </div>
    </section>

    <request-email-form mode="info" />

    <h2 class="text-pro-bold text-[5rem] production-A-Z">
      {{ $t('production_AZ') }}
    </h2>

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
    background: url('../assets/img/PRODUCTION.jpg');
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

.cards {
  padding-block: 6rem;

  .card {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    padding: 2rem 4rem;

    &:nth-child(2n) {
      flex-direction: row-reverse;
    }

    img {
      width: 30rem;
      aspect-ratio: 1;
    }

    .text {
      width: 30rem;
    }
  }
}

.production-A-Z {
  padding: 24rem 0 27rem 8.5rem;
}
</style>
