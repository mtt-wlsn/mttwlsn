<script lang="ts">
	import Send from '$lib/icons/send.svelte';
	import ContactForm from '$lib/contact-form/contact-form.svelte';

	let contactFormVisible = false;
	function ToggleContactForm() {
		contactFormVisible = !contactFormVisible;
	}
</script>

<button
	on:click={ToggleContactForm}
	class="
        inline-block
        text-xl
        text-white
        p-3 pr-4 sm:p-2 sm:pl-4 sm:pr-4 mr-4
        rounded-full
        tracking-wide
        bg-amber-600
        hover:bg-amber-500
        drop-shadow-md hover:drop-shadow-lg
        transition ease-in"
	><span class="drop-shadow hidden sm:block">Contact Me</span><span class="inherit sm:hidden"
		><Send /></span
	></button
>

{#if contactFormVisible}
	<ContactForm on:closeContactForm={ToggleContactForm} />
{/if}
