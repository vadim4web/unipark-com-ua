<script setup></script>

<template>
  <main>
    <section class="head"></section>

    <section
      class="main-info text-center flex flex-col items-center gap-[2rem]"
    >
      <p class="text-[1.1rem] w-[60ch] text-left">
        {{ $t('FANTASTIC_PARK_1') }}
      </p>
      <p class="text-[1.1rem] w-[60ch] text-left">
        {{ $t('FANTASTIC_PARK_2') }}
      </p>
      <h2 class="text-pro-bold text-[4.5rem] leading-none">
        {{ $t('FANTASTIC_PARK_3') }}
      </h2>
      <p class="last uppercase text-[1.25rem]">
        {{ $t('FANTASTIC_PARK_4') }}
      </p>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.head {
  height: 42.5rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: calc(42.5rem + var(--header-height));
    background: url('../assets/img/FАNTASTIC_PARK.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
}

.main-info {
  padding-inline: 5rem;
  padding-top: 4.5rem;
  padding-bottom: 12.5rem;

  h2 {
    padding-top: 7rem;
  }
}
</style>
