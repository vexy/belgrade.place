<script lang="ts">
	import type { LayoutProps } from './$types';
	import "#assets/main.css"
	import favicon from "#assets/favicon.svg"
    import Footer from "#components/Footer.svelte";

	import {PreviewMode} from '@sanity/sveltekit'

	let { data, children }: LayoutProps = $props();
	const canPreview = $derived(data.previewEnabled)
</script>

<svelte:head>
	<link rel="icon" type="image/x-icon" href={favicon}>
</svelte:head>

<main>
	<PreviewMode enabled={canPreview}>
		{@render children()}
	</PreviewMode>
</main>

<Footer />

