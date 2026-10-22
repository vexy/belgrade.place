<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<svelte:head>
    <title>Belgrade.place - all municipalities of Belgrade</title>
    <link rel="canonical" href="https://belgrade.place/municipalities" />
</svelte:head>

<header>
    <h1>Gradske opštine Beograda</h1>
</header>

<section>
    {#each data.municipalities as muni}
    <a href={`/municipalities/${muni.slug}`} class="muni-display">

        <!-- Check if we have data for any badges (flag or coat of arms) -->
        {#if muni.badges}
            {const badges = muni.badges}
            {#if badges.flag}
                <img src={badges.flag} alt={`${muni.title} flag`} />
            {:else}
                {#if badges.coat}
                    <img src={badges.coat} alt={`${muni.title} coat of arms`} />
                {/if}
            {/if}
        {/if}

        <!-- Display title anyhow -->
        <p>{muni.title}</p>
    </a>
    {/each}
</section>

<style>
    section {
        display: grid;
    }

    .muni-display {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        gap: 0.5rem;

        & :is(img) {
            padding: 10px;
            aspect-ratio: 1/1;
            height: 35px;
            border-radius: 50%;
        }
    }
</style>