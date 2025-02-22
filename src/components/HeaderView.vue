<script setup>
import { ref } from 'vue'

import ThemeToggler from '~/components/ThemeToggler.vue'
import LanguageToggler from '~/components/LanguageToggler.vue'

const parksMenu = ref()

const parksMenuClose = () => parksMenu.value.classList.remove('open')
</script>

<template>
	<header>
		<nav>
			<menu class="header-menu">
				<li>
					<router-link to="/" @click="parksMenuClose">
						UniPark
					</router-link>
				</li>

				<li>
					<router-link to="/" @click="parksMenuClose">
						{{ $t('Main') }}
					</router-link>
				</li>

				<li ref="parksMenu" class="parks" @click="(e) => e.target.classList.toggle('open')">
					{{ $t('OurParks') }}

					<ul class="parks-list">
						<li >
							<router-link to="/parks/singing" @click="parksMenuClose">{{ $t('SINGING') }}</router-link>
						</li>
						<li>
							<router-link to="/parks/magic-garden" @click="parksMenuClose">{{ $t('MAGIC_GARDEN') }}</router-link>
						</li>
						<li>
							<router-link to="/parks/giants-world" @click="parksMenuClose">{{ $t('GIANTS_WORLD') }}</router-link>
						</li>
						<li>
							<router-link to="/parks/trol-domy" @click="parksMenuClose">{{ $t('TROLDOMY') }}</router-link>
						</li>
						<li>
							<router-link to="/parks/light-n-dreams" @click="parksMenuClose">{{ $t('LIGHT_AND_DREAMS') }}</router-link>
						</li>
						<li>
							<router-link to="/parks/fantastic-park" @click="parksMenuClose">{{ $t('FANTASTIC_PARK') }}</router-link>
						</li>
					</ul>
				</li>

				<li>
					<router-link to="/production" @click="parksMenuClose">
						{{ $t('Production') }}
					</router-link>
				</li>
				<li>
					<router-link to="/invest" @click="parksMenuClose">
						{{ $t('Invest') }}
					</router-link>
				</li>

				<li>
					<router-link to="/invest" @click="parksMenuClose">
						❤
					</router-link>
				</li>
				<li>
					<router-link to="/discount" @click="parksMenuClose">
						🎫
					</router-link>
				</li>

				<li>
					<theme-toggler  @click="parksMenuClose"/>
					<language-toggler  @click="parksMenuClose"/>
				</li>
			</menu>
		</nav>
	</header>
</template>

<style lang="scss">
header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	width: 100%;

	nav {
		width: 100%;
	}

	.header-menu {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		li {
			width: max-content;
			border: 1px solid red;
		}

		.parks {
			position: relative;

			.parks-list {
				position: absolute;
				display: none;
			}

			&.open .parks-list {
				display: block;
			}
		}
	}
}
</style>
