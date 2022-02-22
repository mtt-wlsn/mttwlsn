<script lang="ts">
	import pullRequestIcon from '$lib/icons/git-pull-request.svg';
	import activityIcon from '$lib/icons/activity.svg';

	// I'm just using json data from directly within my source
	// code.  Someday, I might move this to behind an api,
	// but for now... why should I do that?
	import changelog_activities from '../../../src/data/changelog.json';
</script>

<h1 class="font-extrabold text-4xl leading-relaxed">Changelog</h1>
<p class="text-lg pt-6 pb-8 max-w-prose leading-relaxed">
	Somewhat based on <a href="https://keepachangelog.com/">"keep a changelog"</a> this page exists as
	a fun way for me to display a curated list of changes I have made to this website.
</p>

{#each changelog_activities as activity, i}
	<section
		class="mt-7 p-8 pl-11 border-4 border-gray-700 rounded-lg bg-gray-800 w-fit shadow-lg hover:border-amber-600 hover:bg-gray-900 transition ease-in"
	>
		<div class="bg-amber-600 p-5 rounded-full w-fit mb-4 -mt-16 -ml-5">
			<img alt="Activity Icon" src={activityIcon} />
		</div>
		<h2 class="text-2xl font-extrabold max-w-prose">{activity.title}</h2>
		<h4 class="text italic pb-3">
			{activity.created_at} • <a href={activity.pull_request_link}>pull request</a>
			<img alt="Pull Request Icon" class="p-1 inline-block" src={pullRequestIcon} />
		</h4>
		<p class="text-lg leading-relaxed max-w-prose">{@html activity.description}</p>
	</section>

	{#if i + 1 != changelog_activities.length}
		<div class="divider pt-10 border-l-4 border-gray-800 border-dashed">&nbsp;</div>
	{/if}
{/each}

<style lang="scss">
	.divider {
		margin-left: 3.65rem;
	}
</style>
