<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<h1>Search streets by city municipality</h1>

<section>
    {#each data.municipalities as muni}
    <a href={`/municipalities/${muni.slug}`}>
        <div class='muni-display'>
            <img src={muni.badges.flag} alt={`${muni.title} flag`} />
            <p>{muni.title}</p>
        </div>
    </a>
    {/each}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.5rem;
    }

    .muni-display {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        & :is(img) {
            padding: 10px;
            aspect-ratio: 1/1;
            height: 35px;
            border-radius: 50%;
        }
    }
</style>