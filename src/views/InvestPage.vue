<script setup>
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

import TICKETS from '~/assets/icons/TICKETS.png'
import CATERING from '~/assets/icons/CATERING.png'
import SOUVENIRS from '~/assets/icons/SOUVENIRS.png'
import PROMO from '~/assets/icons/PROMO.png'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const USER_KEY = import.meta.env.VITE_EMAILJS_USER_KEY

const email = ref('')

const emailSubjectQueryString = (() => `?subject=FEEDBACK REQUEST from ${email.value}!`)



const submitForm = async () => {
	const emailString = `${email.value}`

	try {
		const templateParams = {
			email: emailString,
		}

		const response = await emailjs.send(
			SERVICE_ID,
			TEMPLATE_ID,
			templateParams,
			{
				publicKey: USER_KEY,
			}
		)
		console.log('Email sent successfully!', response)
	} catch (error) {
		console.error('Error sending email:', error)
	}

	email.value = ''
}
</script>

<template>
	<main class="invest">
		<section class="head w-full h-[42.5rem] grid grid-rows-2 justify-items-center">
			<h2 class="self-end text-[12.5rem] uppercase text-pro-bold text-center leading-[69%]">
				{{ $t('invest').split(' ')[0] }}<br>
				{{ $t('invest').split(' ')[1] }}
			</h2>
			<h3 class="self-start text-[1.9rem] uppercase relative top-[5rem]">{{ $t('invest_h3') }}</h3>
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

					<div class="social-media flex flex-row-reverse justify-end items-center gap-[1rem]">
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
				<div class="card card1 flex flex-col items-center outline outline-(--accent) gap-[2rem]">
					<img :src="TICKETS" alt="tickets">
					<p class="text-[1.85rem] uppercase text-pro-bold">
						{{ $t('invest_mid_p1') }}
					</p>
				</div>
				<div class="card card2 flex flex-col items-center outline outline-(--accent) gap-[2rem]">
					<img :src="CATERING" alt="catering">
					<p class="text-[1.85rem] uppercase text-pro-bold">
						{{ $t('invest_mid_p2') }}
					</p>
				</div>
				<div class="card card3 flex flex-col items-center outline outline-(--accent) gap-[2rem]">
					<img :src="SOUVENIRS" alt="souvenirs">
					<p class="text-[1.85rem] uppercase text-pro-bold">
						{{ $t('invest_mid_p3') }}
					</p>
				</div>
				<div class="card card4 flex flex-col items-center outline outline-(--accent) gap-[2rem]">
					<img :src="PROMO" alt="promo">
					<p class="text-[1.85rem] uppercase text-pro-bold">
						{{ $t('invest_mid_p4') }}
					</p>
				</div>
			</div>
		</section>

		<section class="stats w-full h-[34.5rem] flex flex-col items-center gap-[1.25rem]">
			<h2 class="text-[4.5rem] text-pro-bold">
				{{ $t('invest_stats') }}
			</h2>

			<div class="cards grid grid-cols-3 w-full gap-[1.5rem]">
				<div class="card flex flex-col items-center h-[21.75rem] text-center">
					<h3 class="uppercase text-[2rem]">
						{{ $t('SINGING') }}
					</h3>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_upto') }}
					</span>
					<span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">200</span>
					<span class="thouthends text-[2.5rem] leading-none text-pro-bold">
						{{ $t('invest_stats_upto_') }}<br>
						{{ $t('invest_stats_upto__') }}
					</span>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_peryear') }}
					</span>
				</div>

				<div class="card flex flex-col items-center h-[21.75rem] text-center">
					<h3 class="uppercase text-[2rem]">
						{{ $t('GIANTS_WORLD') }}
					</h3>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_upto') }}
					</span>
					<span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">143</span>
					<span class="thouthends text-[2.5rem] leading-none text-pro-bold">
						{{ $t('invest_stats_upto_') }}<br>
						{{ $t('invest_stats_upto__') }}
					</span>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_peryear') }}
					</span>
				</div>

				<div class="card flex flex-col items-center h-[21.75rem] text-center">
					<h3 class="uppercase text-[2rem]">
						{{ $t('LIGHT_AND_DREAMS') }}
					</h3>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_upto') }}
					</span>
					<span class="visibility-avg text-[6.25rem] text-pro-bold leading-none">150</span>
					<span class="thouthends text-[2.5rem] leading-none text-pro-bold">
						{{ $t('invest_stats_upto_') }}<br>
						{{ $t('invest_stats_upto__') }}
					</span>
					<span class="text-[1.25rem]">
						{{ $t('invest_stats_peryear') }}
					</span>
				</div>
			</div>
		</section>

		<section class="call-to-action flex flex-col items-center gap-[2.5rem]">
			<h2 class="text-[7rem] text-pro-bold leading-none">
				{{ $t('invest_CTA') }}
			</h2>

			<div class="feedback flex w-[88ch] h-[2.5rem] items-center justify-between gap-[0.5rem]">
				<form class="form flex h-[2.5rem] items-center justify-between gap-[0.5rem]" @submit.prevent="submitForm">
					<label :data-text="$t('invest_CTA_mail')" class="form-label relative">
						<input
							v-model="email"
							aria-label="email-input"
							required
							type="email"
							class="email-input w-[28ch] h-[1.5rem] relative bottom-[-0.51rem]"
							placeholder="mail@example.com"
						/>
					</label>

					<button type="submit" class="email-send w-[7.5rem] h-[2.5rem] text-pro-bold">
						{{ $t('invest_CTA_send') }}
					</button>
				</form>

				<a href="tel:+380981564340" class="h-[2.5rem] text-pro-bold text-[2rem] leading-[2.5rem]">+38 098 156 43 40</a>

				<a
					:href="`mailto:finance@universal-parks.com?subject=${encodeURIComponent(
						'FEEDBACK REQUEST from ' + email
					)}`"
					class="h-[2.5rem] text-pro-bold text-[2rem] leading-[2.5rem]"
				>finance@universal-parks.com</a>
			</div>
		</section>
	</main>
</template>

<style lang="scss" scoped>
.head {
	background: var(--gradient-bg);
	color: var(--bg-color);
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
		.heading { grid-area: heading;}
		grid-template-areas:
		"heading heading heading ."
		;

	}

	.cards {
		.card1 { grid-area: card1;}
		.card2 { grid-area: card2;}
		.card3 { grid-area: card3;}
		.card4 { grid-area: card4;}
		grid-template-areas:
		"card1 card2 card3 card4"
		;

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

.call-to-action {
	padding-block: 6.75rem;
}

.form-label::before {
	position: absolute;
	content: attr(data-text);
	top: -1rem;
	left: 0;
}

.email-input {
	cursor: pointer;
	background: transparent !important;
	border-width: 1px;
	border-color: transparent transparent var(--text-color) transparent;
	color: var(--text-color);
	padding: 0 !important;
	line-height: 1rem !important;
	
	* {
	}

	&:focus {
		outline: none;
		border: none none auto none;
	}
}

.email-input:-webkit-autofill,
.email-input:-webkit-autofill:hover,
.email-input:-webkit-autofill:focus,
.email-input:-webkit-autofill:active {
	background-clip: text !important;
	-webkit-background-clip: text !important;
	-webkit-text-fill-color: var(--text-color) !important;
}

.email-send {
	font-size: 1.5rem !important;
	border: 1px solid var(--text-color);
}
</style>
