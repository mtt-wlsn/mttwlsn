<script lang="ts">
	import splitbee from '@splitbee/web';
	import '../../app.css';

	splitbee.init({
		scriptUrl: '/bee.js',
		apiUrl: '/_hive'
	});
</script>

<main class="p-8">
	<slot />
</main>
