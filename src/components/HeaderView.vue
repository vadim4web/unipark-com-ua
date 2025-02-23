<script setup>
import { ref } from 'vue'
import ThemeToggler from '~/components/ThemeToggler.vue'
import LanguageToggler from '~/components/LanguageToggler.vue'

const parksList = ref()

const parksMenuClose = () => {
  parksList.value.setAttribute('inert', '')
  parksList.value.classList.remove('open')
}

const parksMenuOpen = () => {
	parksList.value.removeAttribute('inert')
	parksList.value.classList.add('open')
}

const parksMenuToggle = () => {
  if (Array.from(parksList.value.classList).includes('open')) parksMenuClose()
	else parksMenuOpen()
}
</script>

<template>
  <header>
    <nav class="flex justify-center items-center">
      <router-link to="/" class="logo-link" @click="parksMenuClose">
				<img src="/UNIPARK.png" alt="UniPark logo" class="logo-image">
			</router-link>
      <menu class="main-menu flex justify-center items-center">
        <li>
          <router-link to="/" @click="parksMenuClose">
            {{ $t('main') }}
          </router-link>
        </li>
        <li v-click-outside="parksMenuClose" class="parks">
          <ul>
            <li>
              <a role="button" style="cursor: pointer" @click="parksMenuToggle">
                {{ $t('ourParks') }}
              </a>
            </li>
            <li>
              <ul ref="parksList" class="parks-list">
                <li>
                  <router-link to="/parks/singing" @click="parksMenuClose">{{
                    $t('SINGING')
                  }}</router-link>
                </li>
                <li>
                  <router-link
                    to="/parks/magic-garden"
                    @click="parksMenuClose"
                    >{{ $t('MAGIC_GARDEN') }}</router-link>
                </li>
                <li>
                  <router-link
                    to="/parks/giants-world"
                    @click="parksMenuClose"
                    >{{ $t('GIANTS_WORLD') }}</router-link>
                </li>
                <li>
                  <router-link to="/parks/troldomy" @click="parksMenuClose">{{
                    $t('TROLDOMY')
                  }}</router-link>
                </li>
                <li>
                  <router-link
                    to="/parks/light-and-dreams"
                    @click="parksMenuClose"
                    >{{ $t('LIGHT_AND_DREAMS') }}</router-link>
                </li>
                <li>
                  <router-link
                    to="/parks/fantastic-park"
                    @click="parksMenuClose"
                    >{{ $t('FANTASTIC_PARK') }}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/production" @click="parksMenuClose">
            {{ $t('production') }}
          </router-link>
        </li>
        <li>
          <router-link to="/invest" @click="parksMenuClose">
            {{ $t('invest') }}
          </router-link>
        </li>
      </menu>
      <menu class="extra flex justify-center items-center gap-[1rem]">
        <li>
          <router-link to="/invest" @click="parksMenuClose">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="77.000000pt"
              height="77.000000pt"
              viewBox="0 0 77.000000 77.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,77.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M165 686 c-66 -30 -125 -120 -125 -188 1 -63 35 -110 199 -273 l161
							-160 156 155 c85 85 165 173 177 195 25 48 27 127 4 170 -63 121 -216 152
							-313 63 -22 -19 -22 -19 -68 13 -36 26 -58 33 -103 36 -35 2 -70 -2 -88 -11z
							m138 -47 c12 -6 39 -28 60 -47 l37 -36 45 44 c41 40 50 44 103 48 57 4 61 3
							100 -33 47 -42 67 -91 57 -143 -5 -29 -34 -64 -153 -184 -80 -81 -149 -148
							-152 -148 -12 0 -272 263 -291 295 -39 63 -13 155 55 196 35 21 105 25 139 8z"
                />
              </g>
            </svg>
          </router-link>
        </li>
        <li>
          <router-link to="/discount" @click="parksMenuClose">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="72.000000pt"
              height="73.000000pt"
              viewBox="0 0 72.000000 73.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,73.000000) scale(0.100000,-0.100000)"
                fill="currentColor"
                stroke="none"
              >
                <path
                  d="M156 658 c-14 -19 -16 -65 -16 -300 0 -265 1 -279 20 -298 15 -15 33
					 -20 74 -20 66 0 86 7 86 29 0 46 64 57 83 14 16 -39 24 -43 89 -43 45 0 63 5
					 78 20 19 19 20 33 20 298 0 334 4 322 -101 322 -69 0 -70 -1 -80 -30 -18 -51
					 -70 -51 -88 1 -10 28 -12 29 -80 29 -61 0 -72 -3 -85 -22z m144 -58 c22 -24
					 36 -30 69 -30 33 0 44 5 63 30 18 25 29 30 65 30 l43 0 0 -74 0 -75 -32 -3
					 c-25 -2 -34 -8 -36 -25 -3 -20 1 -23 32 -23 l36 0 0 -170 0 -170 -39 0 c-31 0
					 -46 7 -74 35 -23 23 -44 35 -62 35 -18 0 -39 -12 -62 -35 -28 -28 -43 -35 -74
					 -35 l-39 0 0 170 0 170 36 0 c31 0 35 3 32 23 -2 17 -11 23 -35 25 l-33 3 0
					 75 0 74 41 0 c33 0 47 -6 69 -30z"
                />
                <path
                  d="M300 455 c0 -24 2 -25 65 -25 63 0 65 1 65 25 0 24 -2 25 -65 25 -63
					 0 -65 -1 -65 -25z"
                />
              </g>
            </svg>
          </router-link>
        </li>
        <li class="flex flex-col justify-center items-center">
          <theme-toggler @click="parksMenuClose" />
          <language-toggler @click="parksMenuClose" />
        </li>
      </menu>
    </nav>
  </header>
</template>

<style lang="scss">
header {
  width: 100%;
  background: var(--bg-color);

  nav {
    width: 100%;

		.logo-link {
			padding: 0 !important;
			position: relative;
			left: 1.5rem;

			.logo-image {
				transform: scale(1.1);
			}
		}
  }

  menu li {
    width: max-content;
  }

  .main-menu {
    width: 100%;

    a {
      padding: 0.25rem 1rem;
    }

    .parks {
      position: relative;

      .parks-list {
        position: absolute;
        z-index: 1;
      }

      & .parks-list:not(.open) {
        opacity: 0;
      }

      & .open.parks-list {
        opacity: 1;
        background: var(--bg-color);
        padding-bottom: 0.5rem;
      }
    }
  }

  .extra {
    height: var(--header-height);

    * {
      border: 1px solid transparent;
    }

    svg {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.25rem;
    }
  }
}
</style>
