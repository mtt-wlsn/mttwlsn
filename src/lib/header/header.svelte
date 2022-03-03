<script lang="ts">
	import Branding from './branding.svelte';
	import ThemeControls from './theme-controls.svelte';
	import ContactMeBtn from './contact-me-btn.svelte';
</script>

<header class="p-8 pt-10 flex justify-between">
	<Branding />
	<div>
		<ContactMeBtn />
		<ThemeControls />
	</div>
</header>
