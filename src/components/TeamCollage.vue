<script setup>
import OurTeamSpan from '~/components/OurTeamSpan.vue';
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const teamData = ref([
  { name: 'Team1', role: 'Team1_', class: 'grid-item-1', image: '/photo/COMPANY_1.jpeg' },

  { name: 'Team3', role: 'Team3_', class: 'grid-item-3', image: '/photo/COMPANY_3.jpeg' },
  { name: 'Team10', role: 'Team10_', class: 'grid-item-10', image: '/photo/COMPANY_10.jpg' },
  { name: 'Team12', role: 'Team12_', class: 'grid-item-12', image: '/photo/COMPANY_12.webp' },

  { name: 'Team2', role: 'Team2_', class: 'grid-item-2', image: '/photo/COMPANY_2.jpeg' },
  { name: 'Team4', role: 'Team4_', class: 'grid-item-4', image: '/photo/COMPANY_4.jpeg' },
  { name: 'Team6', role: 'Team6_', class: 'grid-item-6', image: '/photo/COMPANY_6.jpg' },
  { name: 'Team11', role: 'Team11_', class: 'grid-item-11', image: '/photo/COMPANY_11.jpeg' },

  { name: 'Team0', role: 'Team0_', class: 'grid-item-CHIEF', image: '/photo/COMPANY_CHIEF.jpeg' },
  { name: 'Team7', role: 'Team7_', class: 'grid-item-7', image: '/photo/COMPANY_7.jpg' },
  { name: 'Team5', role: 'Team5_', class: 'grid-item-5', image: '/photo/COMPANY_5.jpeg' },
  { name: 'Team9', role: 'Team9_', class: 'grid-item-9', image: '/photo/COMPANY_9.jpeg' },
  { name: 'Team8', role: 'Team8_', class: 'grid-item-8', image: '/photo/COMPANY_8.jpeg' },
]);

onMounted(() => {
    gsap.fromTo(
        `.grid-item-CHIEF`,
        { opacity: 0, yPercent: 100 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.grid-item-TEAM`,
            start: 'top bottom',
            end: 'center 80%',
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
    );

    gsap.fromTo(
      `.grid-item-1`, 
      { opacity: 0, yPercent: 200 },
      {
        opacity: 1, 
        yPercent: 0, 
        duration: 1, 
        scrollTrigger: {
          trigger: `.grid-item-TEAM`,
          start: 'top bottom',
          end: 'top center',
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      `.grid-item-3`, 
      { opacity: 0, yPercent: 0 },
      {
        opacity: 1, 
        yPercent: -100, 
        duration: 5, 
        scrollTrigger: {
          trigger: `.grid-item-TEAM`,
          start: 'bottom bottom',
          end: 'center center',
          scrub: 1, 
          toggleActions: "play none none reverse"
        }
      }
    );

    ['.grid-item-3', '.grid-item-10', '.grid-item-11', '.grid-item-12'].forEach((person, idx, A)  => {
      if (idx !== 0) {
        gsap.fromTo(
          person, 
          { opacity: 0, yPercent: 150 },
          { 
            opacity: 1, 
            yPercent: -100, 
            duration: 1, 
            scrollTrigger: {
              trigger: A[idx - 1],
              start: 'top bottom',
              end: 'center bottom', 
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    gsap.fromTo(
      `.grid-item-2`, 
      { opacity: 0, yPercent: 0 },
      { 
        opacity: 1, 
        yPercent: -50, 
        duration: 5, 
        scrollTrigger: {
          trigger: `.grid-item-TEAM`,
          start: 'bottom bottom',
          end: 'center center',
          scrub: 1,
          toggleActions: "play none none reverse" 
        }
      }
    );

    ['.grid-item-2', '.grid-item-4', '.grid-item-6'].forEach((person, idx, A)  => {
      if (idx !== 0) {
        gsap.fromTo(
          person, 
          { opacity: 0, yPercent: 150 },
          { 
            opacity: 1, 
            yPercent: -50, 
            duration: 1, 
            scrollTrigger: {
              trigger: A[idx - 1],
              start: 'top bottom',
              end: 'top center', 
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    gsap.fromTo(
      `.grid-item-TEAM`, 
      { opacity: 0, yPercent: 0 },
      { 
        opacity: 1, 
        yPercent: -50, 
        duration: 5, 
        scrollTrigger: {
          trigger: `.grid-item-TEAM`,
          start: 'top bottom',
          end: 'center center',
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(
      `.grid-item-7`, 
      { opacity: 0, yPercent: 100 },
      { 
        opacity: 1, 
        yPercent: -100, 
        duration: 5, 
        scrollTrigger: {
          trigger: `.grid-item-TEAM`,
          start: 'top bottom',
          end: 'top center', 
          scrub: 1, 
          toggleActions: "play none none reverse" 
        }
      }
    );

    ['.grid-item-7', '.grid-item-5', '.grid-item-9', '.grid-item-8'].forEach((person, idx, A)  => {
      if (idx !== 0) {
        gsap.fromTo(
          person, 
          { opacity: 0, yPercent: 50 },
          { 
            opacity: 1, 
            yPercent: -100, 
            duration: 3, 
            scrollTrigger: {
              trigger: A[idx - 1],
              start: 'top bottom',
              end: 'top 80%', 
              scrub: 1,
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

});
</script>

<template>
  <div class="collage grid grid-cols-3 grid-rows-6">
    <div v-for="(team, index) in teamData" :key="index" :class="['grid-item', team.class]" :style="{ backgroundImage: `url(${team.image})` }">
      <h3>{{ $t(team.name) }}</h3>
      <p>{{ $t(team.role) }}</p>
    </div>
    <div class="grid-item-TEAM grid-item">
      <our-team-span />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-item-1 { grid-area: team1; background: url('/photo/COMPANY_1.jpeg'); }
.grid-item-3 {grid-area: team3; background: url('/photo/COMPANY_3.jpeg'); }
.grid-item-10 {grid-area: team10; background: url('/photo/COMPANY_10.jpg'); }
.grid-item-12 {grid-area: team12; background: url('/photo/COMPANY_12.webp'); }

.grid-item-TEAM { grid-area: TEAM; }
.grid-item-2 { grid-area: team2; background: url('/photo/COMPANY_2.jpeg'); }
.grid-item-4 { grid-area: team4; background: url('/photo/COMPANY_4.jpeg'); }
.grid-item-6 { grid-area: team6; background: url('/photo/COMPANY_6.jpg'); }
.grid-item-11 { grid-area: team11; background: url('/photo/COMPANY_11.jpeg'); }

.grid-item-CHIEF { grid-area: CHIEF; background: url('/photo/COMPANY_CHIEF.jpeg'); }
.grid-item-7 { grid-area: team7; background: url('/photo/COMPANY_7.jpg'); }
.grid-item-5 { grid-area: team5; background: url('/photo/COMPANY_5.jpeg'); }
.grid-item-9 { grid-area: team9; background: url('/photo/COMPANY_9.jpeg'); }
.grid-item-8 { grid-area: team8; background: url('/photo/COMPANY_8.jpeg'); }

.collage {
  width: 100%;
  min-height: 100vh;
  margin-bottom: -20rem;
  grid-template-areas:
    "team1 . CHIEF"
    "TEAM TEAM TEAM"
    "team3 team2 team7"
    "team10 team4 team5"
    "team11 team6 team9"
    "team12 . team8"
  ;
}

.grid-item {
  width: 20rem;
  height: 30rem;
  background-position: center;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 3rem;

  h3, p { color: #fff; }

  h3 {
    font-family: "IntelClearProBold", sans-serif;
    font-size: 3rem;
  }

  p { font-size: 1.25rem; }
}
</style>