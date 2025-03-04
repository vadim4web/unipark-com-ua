<script setup>
import { teamGridData as teamData } from '~/assets/data'
</script>

<template>
  <div class="collage grid grid-cols-4 grid-rows-3">
    <div
      v-for="(team, index) in teamData"
      :key="index"
      :class="['grid-item', team.class]"
      :style="{
        backgroundImage: `url(${team.image})`,
        gridArea: team.name.toLowerCase(),
      }"
    >
      <div class="info">
        <h3>{{ $t(team.name) }}</h3>
        <p>{{ $t(team.role) }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.collage {
  width: 100%;
  grid-template-areas:
    'team1 team2 team3 team4'
    'team5 team6 team7 team8'
    'team9 team10 team11 team12';
}

.grid-item {
  width: 100%;
  aspect-ratio: 0.666;
  background-position: center;
  background-size: cover;

  &:hover .info {
    opacity: 1;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-bottom: 3rem;
    text-align: center;
    color: #fff;
    background: var(--link-color);
    height: 100%;
    opacity: 0;
    transition: opacity 0.25s;

    h3 {
      font-family: 'IntelClearProBold', sans-serif;
      font-size: 2.25rem;
    }
    p {
      font-size: 1.15rem;
      text-transform: capitalize;
    }
  }
}
</style>
