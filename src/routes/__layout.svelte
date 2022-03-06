<script lang="ts">
	import splitbee from '@splitbee/web';
	import Header from '$lib/header/header.svelte';
	import Footer from '$lib/footer/footer.svelte';
	import userSettings from '$lib/utilities/user-settings';
	import '../app.css';

	splitbee.init({
		scriptUrl: '/bee.js',
		apiUrl: '/_hive'
	});

	userSettings();
</script>

<Header />

<main class="p-8">
	<slot />
</main>

<Footer />
