<script lang="ts">
    import { page } from '$app/state';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const pageTitle = $derived.by(() => {
        const slug = page.params['municipality-slug']
        const currentMunicipality = data.municipalities.find((muni) => muni.slug === slug);

        return currentMunicipality.title;
    })
</script>

<svelte:head>
    <title>Belgrade.place | All streets of: {pageTitle}</title>
    <link rel="canonical" href="https://belgrade.place/municipalities/{pageTitle}" />
</svelte:head>

<header>
    <h1>Ulice na opštini {pageTitle?.toUpperCase()}</h1>
</header>

<section>
    {#each data.streets as aStreet }
        <a href={`/${aStreet.slug}`}>
            {aStreet.title}
        </a>
    {/each}
</section>

<a href="/municipalities">Sve opštine</a>

<style>
    section {
        display: inline-flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-block: 2rem;
    }
</style>