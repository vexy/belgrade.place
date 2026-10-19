<script lang="ts">
	import type { LayoutProps } from './$types';
	import "#assets/main.css"
	import favicon from "#assets/favicon.svg"
    import Footer from "#components/Footer.svelte";

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<main>
	{@render children()}
</main>

<Footer />

