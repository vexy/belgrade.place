<script lang="ts">
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let pageTitle = $derived(page.params['category-slug'])
</script>

<svelte:head>
    <title>Belgrade.place | Streets within {pageTitle} category</title>
    <link rel="canonical" href="https://belgrade.place/categories/{pageTitle}" />
</svelte:head>

<header>
    <h1>Kategorija naziva ulice: {pageTitle?.toUpperCase()}</h1>
</header>

<section>
    {#each data.streets as aStreet }
        <a href={`/${aStreet.slug}`}>
            {aStreet.title}
        </a>
    {/each}
</section>

<a href="/">Home</a>

<style>
    section {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;
        margin-block: 2rem;
    }
</style>