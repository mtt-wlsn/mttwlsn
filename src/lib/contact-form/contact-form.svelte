<script lang="ts">
	import { fade } from 'svelte/transition';
	import { clickOutside } from '$lib/directives/click-outside.js';
	import { createEventDispatcher } from 'svelte';
	import Send from '$lib/icons/send.svelte';
	import Close from '$lib/icons/x-circle.svelte';

	const dispatch = createEventDispatcher();
	let contactName, contactEmail, message;

	let successMessageVisible,
		errorMessageVisible = false;

	function closeContactForm() {
		dispatch('closeContactForm');
	}

	async function submitContactForm() {
		const url = `/.netlify/functions/contact-me`;
		const res = await fetch(url, {
			method: 'POST',
			body: JSON.stringify({ contactName, contactEmail, message })
		});

		if ((await res.status) == 200) {
			successMessageVisible = true;
		}

		if ((await res.status) != 200) {
			errorMessageVisible = true;
		}

		const data = await res.json();
		console.log(data);
	}
</script>

<div
	transition:fade
	class="flex justify-center items-center absolute top-0 left-0 w-screen h-screen bg-gray-100 dark:bg-gray-900 z-10"
>
	<div use:clickOutside on:outclick={closeContactForm} class="flex justify-center flex-col p-10">
		{#if !successMessageVisible && !errorMessageVisible}
			<button on:click={closeContactForm} class="self-end mb-5 opacity-50 hover:opacity-100"
				><Close /></button
			>
			<div class="max-w-lg">
				<h1 class="font-extrabold text-4xl leading-relaxed text-amber-500 text-center">
					Contact me!
				</h1>
				<p class="text-xl leading-relaxed max-w-prose pt-3 text-center">
					Want to get in touch? I'd love to hear from you! Fill out this form and I'll be sure to
					respond just as quickly as I can.
				</p>
				<div class="flex flex-col items-start">
					<label for="contactName">Name:</label>
					<input type="text" id="contactName" name="contactName" bind:value={contactName} />
					<label for="contactEmail">Email:</label>
					<input type="text" id="contactEmail" name="contactEmail" bind:value={contactEmail} />
					<label for="message">Message:</label>
					<textarea id="message" name="message" bind:value={message} />
					<p class="text-sm pt-4"><sup>*</sup> No fields required 😎</p>
					<button
						on:click={submitContactForm}
						class="
                            m-8
                            text-xl
                            text-white
                            p-3 pr-7 pl-7
                            rounded-full
                            self-center
                            bg-amber-600
                            hover:bg-amber-500
                            drop-shadow-md hover:drop-shadow-lg
                            transition ease-in">Send <Send /></button
					>
				</div>
			</div>
		{:else if successMessageVisible}
			<div class="max-w-lg flex flex-col">
				<h1 class="font-extrabold text-4xl leading-relaxed text-amber-500 text-center">
					Thank you!
				</h1>
				<p class="text-xl leading-relaxed max-w-prose pt-3 text-center">
					Your message has been sent.
				</p>
				<button
					on:click={closeContactForm}
					class="
                        m-8
                        text-xl
                        text-white
                        p-3 pr-7 pl-7
                        rounded-full
                        self-center
                        bg-amber-600
                        hover:bg-amber-500
                        drop-shadow-md hover:drop-shadow-lg
                        transition ease-in"><Close /> Close</button
				>
			</div>
		{:else}
			<div class="max-w-lg flex flex-col">
				<h1 class="font-extrabold text-4xl leading-relaxed text-amber-500 text-center">Ooops!</h1>
				<p class="text-xl leading-relaxed max-w-prose pt-3 text-center">
					An issue was encoutered while sending your email. I aplogize for the inconvenience. Please
					try again.
				</p>
				<button
					on:click={closeContactForm}
					class="
                        m-8
                        text-xl
                        text-white
                        p-3 pr-7 pl-7
                        rounded-full
                        self-center
                        bg-amber-600
                        hover:bg-amber-500
                        drop-shadow-md hover:drop-shadow-lg
                        transition ease-in"><Close /> Close</button
				>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	label {
		font-size: 1.25em;
		padding: 1em 0 0.5em 0;
	}

	input,
	textarea {
		border: 2px solid rgb(245, 158, 11);
		border-radius: 1em;
		padding: 1em;
		background-color: transparent;
		outline: none;
		width: 100%;

		&:focus {
			border: 2px solid white;
		}
	}
</style>
