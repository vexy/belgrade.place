<script lang="ts">
    import type { PageProps } from './$types';
    import { PortableText } from '@portabletext/svelte'
    import { imageURLFor } from '#lib/ImageTransformer.ts'

    let { data }: PageProps = $props();

    const streets = $derived(data.page);
</script>


{#each streets as aStreet }
<article class="card">
    <header>
        <h1>{aStreet.title}</h1>
        <!-- <h1>Some title</h1> -->
    </header>

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

    <p>Category: {aStreet.category}</p>

    {#if aStreet.see_more}
        <a href={aStreet.see_more} target="_blank">Više informacija</a>
    {/if}
</article>
{/each}

<a href="/">Back</a>

<style>
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