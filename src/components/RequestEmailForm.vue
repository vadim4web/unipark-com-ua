
<script setup>
import { ref, computed } from 'vue'
import emailjs from '@emailjs/browser'

const { mode } = defineProps({ mode: { type: String, required: true }})

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const USER_KEY = import.meta.env.VITE_EMAILJS_USER_KEY
const TEMPLATE_ID_1 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_1
const TEMPLATE_ID_2 = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_2

const TEMPLATE_ID = mode === 'info' ? TEMPLATE_ID_2 : TEMPLATE_ID_1

const targetEmail = computed(
  () => mode === 'info' ? 'info@universal-parks.com' : 'finance@universal-parks.com'
)

const email = ref('')

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
			{	publicKey: USER_KEY	}
		)
		console.log('Email sent successfully!', response)
	} catch (error) {
		console.error('Error sending email:', error)
	}

	email.value = ''
}
</script>

<template>
  <section
    class="call-to-action flex flex-col items-center gap-[1.5rem]"
    :class="[ mode === 'info' ? 'colorized' : 'black-n-white' ]"
  >
    <h2 class="text-[7rem] text-pro-bold leading-none">
      {{ $t('invest_CTA') }}
    </h2>

    <div class="feedback flex w-[90ch] h-[3rem] items-center justify-between gap-[1rem]">
      <form class="form flex h-[3rem] items-center justify-between gap-[1rem] grow" @submit.prevent="submitForm">
        <label :data-text="$t('invest_CTA_mail')" class="form-label relative grow h-[1.5rem] bottom-[-0.51rem] ">
          <input
            v-model="email"
            aria-label="email-input"
            required
            type="email"
            class="email-input grow h-[1.5rem] w-full"
            placeholder="mail@example.com"
          />
        </label>

        <button type="submit" class="email-send w-[7.5rem] h-[2.5rem] text-pro-bold grow-0">
          {{ $t('invest_CTA_send') }}
        </button>
      </form>

      <a href="tel:+380981564340" class="h-[3rem] text-pro-bold text-[2.25rem] leading-[2.5rem]">+38 098 156 43 40</a>

      <a
        :href="`mailto:${targetEmail}?subject=${encodeURIComponent(
          'FEEDBACK REQUEST from ' + email
        )}`"
        class="h-[3rem] text-pro-bold text-[2.25rem] leading-[2.5rem]"
      >{{ targetEmail }}</a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.call-to-action {
  a,
  button,
  input {
    transition: background 0.25s, color 0.25s, border-color 0.25s;
  }
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
	padding: 0 !important;
	line-height: 1rem !important;
  font-size: 0.85rem;

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
	cursor: pointer;
	transition: color 0.25s, border-color 0.25s;
}

.black-n-white {
  padding-block: 6.75rem;
  background: var(--bg-color);
  color: var(--text-color);

  a,
  button,
  input {
    color: var(--text-color);
  }

  a:hover,
  a:focus,
  a:active,
  button:hover,
  button:focus,
  button:active,
  input:hover,
  input:focus,
  input:active {
    color: var(--link-color);
    border-color: transparent transparent var(--link-color) transparent;
  }

  .email-input {
    border-color: transparent transparent var(--text-color) transparent;
  }

  .email-send {
    border: 1px solid var(--text-color);

    &:hover,
    &:focus,
    &:active {
      border-color: var(--link-color);
    }
  }
}

.colorized {
  border-radius: 0.75rem;
  padding: 2rem;
  width: 57rem;
  margin: 0 auto;
  background: var(--gradient-bg-13);
  color: var(--text-color);

  a,
  button,
  input {
    color: var(--text-color);
  }

  a:hover,
  a:focus,
  a:active,
  button:hover,
  button:focus,
  button:active,
  input:hover,
  input:focus,
  input:active {
    color: var(--bg-color);
    border-color: transparent transparent var(--bg-color) transparent;
  }

  .email-input {
    border-color: transparent transparent var(--text-color) transparent;
  }

  .email-send {
    border: 1px solid var(--text-color);

    &:hover,
    &:focus,
    &:active {
      border-color: var(--bg-color);
    }
  }
}

</style>