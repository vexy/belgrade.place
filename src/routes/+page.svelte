<script lang="ts">
    import favicon from "#lib/assets/favicon.svg"
    import { goto } from "$app/navigation";

    let { data } = $props();

    let searchTerm = $state<string | null>(null);

    function performSearch() {
        // construct search parameters and perform navigation
        if(searchTerm) {
            const sps = new URLSearchParams()
            sps.set('q', searchTerm)

            const finalURL = '/search?' + sps.toString()
            goto(finalURL)
        }
    }
</script>

<header>
    <img class='logo' src={favicon} alt="Website logo" />
    <h1>Explore street name history</h1>
</header>

<section aria-label="Search streets history">
    <div class='search-area'>
        <input type="text" name='street' placeholder="Search your street..." bind:value={searchTerm} />
        <button onclick={() => performSearch()} >Search</button>
    </div>

    <div class='slugs'>
        <h3>Or, explore by category</h3>

        <div>
        {#each data.categories as aCategory }
            <a href={`/categories/${aCategory.slug}`}>{aCategory.title}</a>
        {/each}
        </div>
    </div>

    <div class='slugs'>
        <h3>Or, by city municipality</h3>

        <div>
        {#each data.municipalities as aMunicipality}
            <a href={`/municipalities/${aMunicipality.slug}`}>{aMunicipality.title}</a>
        {/each}
        </div>
    </div>
</section>

<section class="more-info">
    <h3>Did you know that:</h3>
    <ul>
        <li>There are more than 2.500 streets in Belgrade</li>
        <li>Many streets reflect rich Serbian history</li>
        <li>Some streets are named after worlwide historical figures</li>
        <li>Some streets are named after regional places or cities across Balkan peninsula</li>
    </ul>
</section>

<style>
    header {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        :is(h1) {
            margin: unset;
        }
    }

    section {
        flex-grow: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        margin-top: 2rem;
    }

    .search-area {
        width: 100%;
        display: inline-flex;
        justify-content: center;
        gap: 0.35rem;
    }

    input {
        padding: 0.5rem;
        border: 1px solid gray;
        border-radius: 10px;
        min-width: 60%;
    }

    button {
        padding: 0.5rem;
        border: none;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            font-weight: 600;
        }
    }

    .slugs {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;

        & div {
            display: inline-flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem;
        }
    }

    .more-info {
        flex-grow: 0;

        display: inline-flex;
        flex-direction: column;
        gap: 0.45rem;

        background: #4578c6;
        border-radius: 10px;
        color: var(--footer-text);

        & :is(h3) {
            color: inherit;
        }

        & :is(ul) {
            margin: unset;
            margin-inline: 0.25rem;
            
            & li::marker {
                content: 'ℹ️ ';
            }
        }
    }
</style>