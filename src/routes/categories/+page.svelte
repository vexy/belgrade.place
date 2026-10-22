<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>Belgrade.place - street name categories</title>
    <link rel="canonical" href="https://belgrade.place/categories" />
</svelte:head>

<header>
    <h1>Kategorije naziva ulica</h1>
</header>

<section>
    {#each data.categories as aCategory }
        <a href={`/categories/${aCategory.slug}`}>{aCategory.title}</a>
    {/each}
</section>

<style>
    section {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;
        margin-block: 2rem;
    }
</style>