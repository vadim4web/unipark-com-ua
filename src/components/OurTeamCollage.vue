<script setup>
import OurTeamSpan from '~/components/OurTeamSpan.vue';
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { teamData } from '~/assets/data'

gsap.registerPlugin(ScrollTrigger);


onMounted(() => {
    gsap.fromTo(
        `.grid-item-CHIEF`,
        { opacity: 0, yPercent: 50 },
        {
          opacity: 1,
          yPercent: 0,
          duration: 1,
          scrollTrigger: {
            trigger: `.grid-item-TEAM`,
            start: 'top bottom',
            end: 'top 80%',
            scrub: 1,
            toggleActions: "play none none reverse"
          }
        }
    );

    gsap.fromTo(
      `.grid-item-1`, 
      { opacity: 0, yPercent: 150 },
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
          { opacity: 0, yPercent: 66 },
          { 
            opacity: 1, 
            yPercent: -100, 
            duration: 1, 
            scrollTrigger: {
              trigger: A[idx - 1],
              start: 'top bottom',
              end: 'top 60%',
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
          { opacity: 0, yPercent: 100 },
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
    <div v-for="(team, index) in teamData" :key="index" :class="['grid-item', team.class]" :style="{ backgroundImage: `url(${team.image})`, gridArea: team.name.toLowerCase() }">
      <h3>{{ $t(team.name) }}</h3>
      <p>{{ $t(team.role) }}</p>
    </div>
    <div class="grid-item-TEAM grid-item">
      <our-team-span />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-item-TEAM { grid-area: TEAM; }

.collage {
  width: 100%;
  min-height: 100vh;
  margin-bottom: -20rem;
  grid-template-areas:
    "team1 . team0"
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