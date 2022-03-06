<script lang="ts">
	import Moon from '$lib/icons/moon.svelte';
	import Sun from '$lib/icons/sun.svelte';

	function toggle() {
		document.documentElement.classList.toggle('dark');
		if (localStorage.theme === 'dark') {
			localStorage.theme = 'light';
		} else {
			localStorage.theme = 'dark';
		}
	}
</script>

<button on:click={toggle}>
	<Moon />
	<Sun />
</button>
