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

<h1>Search results for term: {term}</h1>

<section>
    {#each data.streets as aStreet }
        <a href={`/${aStreet.slug.current}`}>
            {aStreet.title}
        </a>
    {/each}
</section>