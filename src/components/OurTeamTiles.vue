<script setup>
import { ref } from 'vue';

const teamData = ref([
  { name: 'Team1', role: 'Team1_', class: 'grid-item-1', image: '/photo/COMPANY_1.jpeg' },

  { name: 'Team3', role: 'Team3_', class: 'grid-item-3', image: '/photo/COMPANY_3.jpeg' },
  { name: 'Team10', role: 'Team10_', class: 'grid-item-10', image: '/photo/COMPANY_10.jpg' },
  { name: 'Team12', role: 'Team12_', class: 'grid-item-12', image: '/photo/COMPANY_12.webp' },

  { name: 'Team2', role: 'Team2_', class: 'grid-item-2', image: '/photo/COMPANY_2.jpeg' },
  { name: 'Team4', role: 'Team4_', class: 'grid-item-4', image: '/photo/COMPANY_4.jpeg' },
  { name: 'Team6', role: 'Team6_', class: 'grid-item-6', image: '/photo/COMPANY_6.jpg' },
  { name: 'Team11', role: 'Team11_', class: 'grid-item-11', image: '/photo/COMPANY_11.jpeg' },

  { name: 'Team7', role: 'Team7_', class: 'grid-item-7', image: '/photo/COMPANY_7.jpg' },
  { name: 'Team5', role: 'Team5_', class: 'grid-item-5', image: '/photo/COMPANY_5.jpeg' },
  { name: 'Team9', role: 'Team9_', class: 'grid-item-9', image: '/photo/COMPANY_9.jpeg' },
  { name: 'Team8', role: 'Team8_', class: 'grid-item-8', image: '/photo/COMPANY_8.jpeg' },
])
</script>

<template>
  <div class="collage grid grid-cols-4 grid-rows-3">
    <div v-for="(team, index) in teamData" :key="index" :class="['grid-item', team.class]" :style="{ backgroundImage: `url(${team.image})` }">
    <div class="info">
      <h3>{{ $t(team.name) }}</h3>
      <p>{{ $t(team.role) }}</p>
    </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-item-1 { grid-area: team1; background: url('/photo/COMPANY_1.jpeg'); }
.grid-item-3 {grid-area: team3; background: url('/photo/COMPANY_3.jpeg'); }
.grid-item-10 {grid-area: team10; background: url('/photo/COMPANY_10.jpg'); }
.grid-item-12 {grid-area: team12; background: url('/photo/COMPANY_12.webp'); }

.grid-item-2 { grid-area: team2; background: url('/photo/COMPANY_2.jpeg'); }
.grid-item-4 { grid-area: team4; background: url('/photo/COMPANY_4.jpeg'); }
.grid-item-6 { grid-area: team6; background: url('/photo/COMPANY_6.jpg'); }
.grid-item-11 { grid-area: team11; background: url('/photo/COMPANY_11.jpeg'); }

.grid-item-7 { grid-area: team7; background: url('/photo/COMPANY_7.jpg'); }
.grid-item-5 { grid-area: team5; background: url('/photo/COMPANY_5.jpeg'); }
.grid-item-9 { grid-area: team9; background: url('/photo/COMPANY_9.jpeg'); }
.grid-item-8 { grid-area: team8; background: url('/photo/COMPANY_8.jpeg'); }

.collage {
  width: 100%;
  grid-template-areas:
    "team1 team2 team3 team4"
    "team5 team6 team7 team8"
    "team9 team10 team11 team12"
  ;
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
      font-family: "IntelClearProBold", sans-serif;
      font-size: 2.25rem;
    }
    p {
      font-size: 1.15rem;
      text-transform: capitalize;
    }
  }
}
</style>