<script lang="ts">
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    const streets = $derived(data.page);
</script>

<!-- <h1>Street info will be shown here</h1> -->
<!-- <h1>{ data.page.title }</h1> -->
{#each streets as aStreet }
    <h1>{aStreet.title}</h1>
    <p>ID: {aStreet._id}</p>
{/each}

<!-- <h2>Comming soon, stay tuned !</h2> -->

<a href="/">Back</a>

<style>
    p {
        color: black;
    }
</style>