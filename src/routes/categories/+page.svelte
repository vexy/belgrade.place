<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<h1>All street names categories</h1>

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
    }
</style>