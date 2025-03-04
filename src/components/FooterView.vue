<script setup></script>

<template>
  <footer class="footer grid">
    <section class="main-info grid grid-rows-2">
      <div class="flex flex-col justify-end items-start gap-[1rem]">
        <router-link to="/" class="logo-link relative">
          <img
            src="/UNIPARK-w.png"
            alt="UniPark logo white"
            class="logo-image"
          />
        </router-link>
        <span class="text-neutral">&copy; UniPark. 2015—{{ new Date().getFullYear() }}</span>
      </div>
      <div class="social-media flex justify-start items-center gap-[1rem]">
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
    </section>
    <section class="flex flex-col justify-center">
      <div class="sections-grid grid grid-cols-3">
        <section class="flex flex-col justify-start gap-[1rem]">
          <span class="text-neutral">
            {{ $t('contacts') }}
          </span>
          <menu class="flex flex-col justify-start gap-[1rem]">
            <li>
              <a href="mailto:info@universal-parks.com">Info@universal-parks.com</a>
            </li>
            <li>
              <a href="tel:+380981564340">+38 098 156 43 40</a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/iKWZ3rtjMZRhoUrq6"
                target="_blank"
                rel="noopener noreferrer"
                >{{ $t('address') }}</a>
            </li>
          </menu>
        </section>
        <section class="flex flex-col justify-center gap-[1rem]">
          <menu class="flex flex-col justify-center gap-[1rem]">
            <li>
              <router-link to="/">
                {{ $t('main') }}
              </router-link>
            </li>
            <li>
              <router-link to="/production">
                {{ $t('production') }}
              </router-link>
            </li>
            <li>
              <router-link to="/discount">
                {{ $t('discount') }}
              </router-link>
            </li>
            <li>
              <router-link to="/invest">
                {{ $t('invest') }}
              </router-link>
            </li>
            <li>
              <router-link to="/company">
                {{ $t('about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/production">
                {{ $t('production') }}
              </router-link>
            </li>
          </menu>
        </section>
        <section class="flex flex-col justify-center gap-[1rem]">
          <span class="text-neutral">
            {{ $t('parks') }}
          </span>
          <ul class="flex flex-col justify-center gap-[1rem]">
            <li>
              <router-link to="/singing">{{ $t('SINGING') }}</router-link>
            </li>
            <li>
              <router-link to="/troldomy">{{ $t('TROLDOMY') }}</router-link>
            </li>
            <li>
              <router-link to="/giants-world">{{
                $t('GIANTS_WORLD')
              }}</router-link>
            </li>
            <li>
              <router-link to="/light-and-dreams">{{
                $t('LIGHT_AND_DREAMS')
              }}</router-link>
            </li>
            <li>
              <router-link to="/magic-garden">{{
                $t('MAGIC_GARDEN')
              }}</router-link>
            </li>
            <!-- <li>
							<router-link
								to="/parks/fantastic-park"
								@click="parksMenuClose"
								>{{ $t('FANTASTIC_PARK') }}</router-link>
						</li> -->
          </ul>
        </section>
      </div>
    </section>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  grid-template-columns: 1fr 2fr;

  .main-info {
    padding-left: 4rem;
  }

  .logo-link {
    padding: 0 !important;
    left: -1rem;

    .logo-image {
      transform: scale(0.8166);
      filter: invert(var(--is-dark));
    }
  }

  .social-media svg {
    fill: currentColor;
    width: 2.5rem;
    height: 2.5rem;
    margin: -10%;
  }
}
</style>
