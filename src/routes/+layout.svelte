<script lang="ts">
	import favicon from "#assets/favicon.svg"
	import "#assets/main.css"
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<main>
	{@render children()}
</main>

