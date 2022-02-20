<div class="branding">
	<a sveltekit:prefetch href="/"><span class="code">&lt;&#47;</span>m<span class="optional">a</span>tt<span class="optional">&nbsp;</span>w<span class="optional">i</span>ls<span class="optional">o</span>n<span class="code">&gt;</span></a>
</div>

<style lang="scss">
	.branding {
		font-size: 1.5em;
		padding: 1em;

		.code {
			color: var(--branding-orange);
			filter: blur(0em);
			transition: filter 0.5s;
		}

		.optional {
			display: inline-block;
			transform: scaleX(0);
			position: absolute;
		}

		&:hover {
			.optional {
				position: static;
				transform: scaleX(1);
				transition: transform 0.2s;
			}

			.code {
				filter: blur(0.075em);
				transition: filter 0.2s;
			}
		}
	}
</style>
