<script lang="ts">
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let pageTitle = $derived(page.params['category-slug'])
</script>

<h1>All streets for category: {pageTitle?.toUpperCase()}</h1>

<section>
    {#each data.streets as aStreet }
        <a href={`/${aStreet.slug}`}>
            {aStreet.title}
        </a>
    {/each}
</section>

<style>
    section {
        display: inline-flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>