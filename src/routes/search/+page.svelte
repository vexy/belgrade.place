<script lang="ts">
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const term = $derived.by(() => {
        const params = page.url.searchParams
        const searchTerm = params.get('q') as string

        return searchTerm
    })
</script>

<svelte:head>
    <title>Belgrade.place | Street search</title>
    <link rel="canonical" href="https://belgrade.place/search" />
</svelte:head>

<header>
    <h1>Rezultati pretrage</h1>
    <p>pretraga po terminu: {term}</p>
</header>

<section>
    {#each data.streets as aStreet }
        <a href={`/${aStreet.slug}`}>
            {aStreet.title}
        </a>
    {/each}
</section>

<style>
    header {
        display: inline-flex;
        flex-direction: column;
        align-items: center;

        & h1 {
            margin: unset;
        }

        & p {
            font-size: smaller;
            font-style: italic;
        }
    }

    section {
        display: inline-grid;
        gap: 0.75rem;
        margin-block: 2rem;
    }
</style>