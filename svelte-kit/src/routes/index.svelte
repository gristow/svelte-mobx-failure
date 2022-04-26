<script lang="ts">
	import { autorun } from 'mobx';
	import { MobxSiblingPackageDemo } from 'sibling/src/mobxSiblingPackageDemo';
	import { onDestroy } from 'svelte';
	import { MobxNonSiblingDemo } from '../lib/mobxNonSiblingDemo';

	const mobxDemo = new MobxSiblingPackageDemo();

	const mobxNonSiblingDemo = new MobxNonSiblingDemo();

	let siblingTheme: MobxSiblingPackageDemo['theme'];
	let nonSiblingTheme: MobxNonSiblingDemo['theme'];

	const destroy = autorun(() => {
		siblingTheme = mobxDemo.theme;
		nonSiblingTheme = mobxNonSiblingDemo.theme;
	});

	onDestroy(destroy);
</script>

<div class={siblingTheme}>
	<h1>Sibling Directory (via alias) Theme Switch: Broken</h1>
	<p>This Mobx Store is imported from a sibling directory.</p>
	<p>
		The current theme is {siblingTheme}.
	</p>

	<button on:click={() => mobxDemo.toggleTheme()}>Switch Theme</button>
</div>

<div class={nonSiblingTheme}>
	<h1>Local src Directory Theme Switch: Works</h1>
	<p>This Mobx Store is imported from the src directory.</p>
	<p>
		The current theme is {nonSiblingTheme}.
	</p>

	<button on:click={() => mobxNonSiblingDemo.toggleTheme()}>Switch Theme</button>
</div>

<style>
	.high-contrast {
		background-color: black;
		color: white;
	}
</style>
