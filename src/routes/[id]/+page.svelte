<script lang="ts">
    import type { PageProps } from './$types';
    import { PortableText } from '@portabletext/svelte'
    import { imageURLFor } from '#lib/ImageTransformer.ts'
    import { onMount } from 'svelte';

    let { data }: PageProps = $props();

    const aStreet = $derived(data.street);
</script>
 
<header>
    <h1>{aStreet.title}</h1>
</header>

<article class="card">
    <section>
        {#if aStreet.image}
            {@const imageField = aStreet.image}
            <div class="image-source">
                <img src={imageField.image_url} alt={`${aStreet.title} image`} />
                <p>Attribution: {imageField.attribution}</p>
            </div>
        {/if}

        <section class="description">
            <PortableText value={aStreet.description} />
        </section>
    </section>

    <!-- TODO: STYLE THIS SECTION -->
    <div>
        <h3>Categories</h3>
        {#each aStreet.categories as aCategory }
            <a href={`/categories/${aCategory.slug}`}>
                {aCategory.title}
            </a>
        {/each}
    </div>

    <!-- TODO: STYLE THIS SECTION -->
    <div>
        <h3>Municipality</h3>
        <a href="/municipalities/{aStreet.municipality.slug}">
            <img src={aStreet.municipality.badges.coat} alt=""/>
            {aStreet.municipality.title}
        </a>
    </div>

    {#if aStreet.see_more}
        <a href={aStreet.see_more} target="_blank">Više informacija</a>
    {/if}
</article>

<a href="/">Back</a>

<style>
    p {
        color: black;
    }

    img {
        height: 150px;
    }

    article {
        display: inline-flex;
        flex-direction: column;
        margin-block: 10px;
        gap: 0.5rem;
    }

    section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 0.5rem;
    }

    .description {
        display: inline-flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 0.35rem;
        margin-block: 0.75rem;
    }

    .image-source {
        display: inline-flex;
        flex-direction: column;
        gap: 0.25rem;
        flex-shrink: 1;

        & img {
            object-fit: scale-down;
        }

        & p {
            text-align: center;
            font-size: 30%;
        }
    }

    @media (max-width: 510px) {
        section {
            flex-direction: column;
            flex-wrap: wrap;
        }
    }
</style>