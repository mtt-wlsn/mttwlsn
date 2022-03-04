<script lang="ts">
	import splitbee from '@splitbee/web';
	import userSettings from '$lib/utilities/user-settings';
	import '../../app.css';

	splitbee.init({
		scriptUrl: '/bee.js',
		apiUrl: '/_hive'
	});

	userSettings();
</script>

<main class="p-8">
	<slot />
</main>
