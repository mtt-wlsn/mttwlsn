<script lang="ts">
	import splitbee from '@splitbee/web';
	import Header from '$lib/header/header.svelte';
	import '../app.css';

	splitbee.init({
		scriptUrl: "/bee.js",
		apiUrl: "/_hive"
	});
</script>

<Header />

<main>
	<slot />
</main>
