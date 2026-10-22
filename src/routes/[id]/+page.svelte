<script lang="ts">
    import type { PageProps } from './$types';
    import { PortableText } from '@portabletext/svelte'
    import { imageURLFor } from '#lib/ImageTransformer.ts'

    let { data }: PageProps = $props();

    const aStreet = $derived(data.street);
</script>

<svelte:head>
    <title>Belgrade.place | {aStreet.title} ulica</title>
    <link rel="canonical" href="https://belgrade.place/" />
</svelte:head>
 
<header>
    <h1>{aStreet.title} ulica</h1>
    {#if aStreet.image}
        {@const imageField = aStreet.image}
        <div class="street-image">
            <img src={imageField.image_url} alt={`${aStreet.title} image`} />
            <button popovertarget='attribution'>ℹ Izvor slike</button>

            <div id='attribution' popover="hint" class='image-attribution'>
                {imageField.attribution}
            </div>
        </div>
    {/if}
</header>


<article class="card">
    <h3>Istorija naziva</h3>
    <section aria-label="Istorijat naziva ulice">
        <PortableText value={aStreet.description} />
    </section>

    <!-- TODO: STYLE THIS SECTION -->
    <h3>Kategorije naziva</h3>
    <section class='categories'>
        {#each aStreet.categories as aCategory }
            <a href={`/categories/${aCategory.slug}`}>
                {aCategory.title}
            </a>
        {/each}
    </section>

    <!-- TODO: STYLE THIS SECTION -->
    <h3>Pripada opštinama</h3>
    <section class='municipalities'>
        {#each aStreet.municipality as municipality}
        {@const badges = municipality.badges}
        <a href="/municipalities/{municipality.slug}">
            {#if badges}
                {#if badges.coat}
                    <img src={municipality.badges.coat} alt="{municipality.title} coat"/>
                {:else if badges.flag}
                    <img src={municipality.badges.flag} alt="{municipality.title} flag"/>
                {/if}
            {/if}

            {municipality.title}
        </a>
        {/each}
    </section>

    {#if aStreet.see_more}
    <h3>
        <a href={aStreet.see_more} target="_blank">Više informacija</a>
    </h3>
    {/if}
</article>

<a href="/">Početna</a>

<style>
    header {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
    }

    .street-image {
        display: inline-flex;
        flex-direction: column;
        gap: 0.25rem;
        margin-block: 0.5rem;

        & img {
            object-fit: scale-down;
            height: 170px;
            border-radius: 10px;
        }

        & :is(button) {
            appearance: none;
            border: none;
            border-radius: 15px;
            background: #cecece;
            color: #1d203b;
            font-size: small;
            anchor-name: --hint-anchor;
        }
    }

    .image-attribution {
        border-radius: 10px;
		border: 1px solid #334155;
		padding: 0.5rem;
		box-shadow: 1px 2px 5px 1px #334155;

		position-anchor: --hint-anchor;
		position-area: bottom center;
		position-try-fallbacks: bottom right;
    }

    article {
        display: inline-flex;
        flex-direction: column;
        margin-block: 10px;
        gap: 0.5rem;

        & :is(h3) {
            margin: unset;
            padding: 5px;
            background: #eaeaea;
            border-radius: 5px;
            text-align: start;
        }
    }

    .categories {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    .municipalities {
        display: inline-flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1.25rem;

        & :is(a) {
            display: inline-flex;
            flex-direction: row;
            align-items: center;
            gap: 0.5rem;

            & :is(img) {
                height: 50px;
            }
        }
    }
</style>