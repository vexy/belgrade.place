<script lang="ts">
    import favicon from "#lib/assets/favicon.svg"
    import { goto } from "$app/navigation";
</script>

<img class='logo' src={favicon} alt="Website logo" />

<h1>Belgrade, capital city of Serbia, has more than 2.500 streets</h1>

<section aria-label="Search city history">
    <div>
        <input type="text" name='street' placeholder="Search your street..."/>
        <button onclick={() => goto('/street')}>Search</button>
    </div>

    <p>Did you know that Belgrade street names reflect deep Serbian history, worlwide historical figures, regional places across Balkan peninsula and many other ?</p>
</section>

<style>
    section {
        flex-grow: 1;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    input {
        padding: 0.5rem;
        border: 1px solid gray;
        border-radius: 10px;
        min-width: 180px;
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

    p {
        margin: 2rem;
        padding: 0.5rem;

        line-height: 1.2;

        border-radius: 10px;
        color: var(--text-primary);
        background: #4a8ef5;
    }
</style>