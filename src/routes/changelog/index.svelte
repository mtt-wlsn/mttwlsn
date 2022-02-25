<script lang="ts">
	import PullRequestIcon from '$lib/icons/git-pull-request.svelte';
	import ActivityIcon from '$lib/icons/activity.svelte';

	// I'm just using json data from directly within my source
	// code.  Someday, I might move this to behind an api,
	// but for now... why should I do that?
	import changelog_activities from '$lib/../data/changelog.json';
</script>

<h1 class="font-extrabold text-4xl leading-relaxed">Changelog</h1>
<p class="text-lg pt-6 pb-8 max-w-prose leading-relaxed">
	Somewhat based on <a href="https://keepachangelog.com/">"keep a changelog"</a> this page exists as
	a fun way for me to display a curated list of changes I have made to this website.
</p>

<div class="ml-10">
	{#each changelog_activities as activity, i}
		<section
			class="mt-7 p-8 pl-11 border-4 rounded-lg w-fit shadow-xl transition ease-in
				border-gray-300 dark:border-gray-700
				bg-gray-200 dark:bg-gray-800
				hover:border-amber-500 dark:hover:border-amber-600
				hover:bg-gray-100 dark:hover:bg-gray-900">
			<div class="bg-amber-500 dark:bg-amber-600 p-5 rounded-full w-fit mb-4 -mt-16 -ml-5">
				<ActivityIcon />
			</div>
			<h2 class="text-2xl font-extrabold max-w-prose">{activity.title}</h2>
			<h4 class="text italic pb-3">
				{activity.created_at} • <PullRequestIcon /> <a href={activity.pull_request_link}>pull request</a>
			</h4>
			<p class="text-lg leading-relaxed max-w-prose">{@html activity.description}</p>
		</section>

		{#if i + 1 != changelog_activities.length}
			<div class="divider pt-10 border-l-4 border-gray-800 border-dashed">&nbsp;</div>
		{/if}
	{/each}
</div>

<style lang="scss">
	.divider {
		margin-left: 3.65rem;
	}
</style>
