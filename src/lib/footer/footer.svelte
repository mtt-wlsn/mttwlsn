<footer class="p-8">
	<p class="pb-6 text-gray-600">- - -</p>
	<ul>
		<li>
			<a sveltekit:prefetch href="/changelog">changelog</a>
		</li>
	</ul>
</footer>

<style lang="scss">
	footer {
		ul {
			li {
				a {
					font-style: italic;
					position: relative;
					padding-bottom: 0.15em;

					&::before {
						content: '';
						position: absolute;
						top: 100%;
						width: 0%;
						left: 0;
						height: 0.1em;
						background: linear-gradient(
							90deg,
							var(--branding-orange),
							var(--branding-light-orange)
						);
						filter: blur(0.015em);
						transition: width 0.1s;
					}

					&:hover {
						&::before {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
