<script lang="ts">
    import favicon from "#lib/assets/favicon.svg"
</script>

<footer>
    <div class='headline'>
        <img class='logo' src={favicon} alt="Belgrade.place logo" />
        <h4>Belgrade.place - get to know your street history</h4>
    </div>
    <div class='links'>
        <p>Made by <a href="https://vextech.io">Vextech.io</a></p>
        <a href="https://github.com/vexy/belgrade.place" target="_blank">Source code</a>
    </div>
</footer>

<style>
    footer {
        padding: 0.5rem;
        border-radius: 10px 10px 0 0;

        display: flex;
        flex-direction: column;

        background: var(--footer-background);
        color: var(--footer-text);
    }

    .headline {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }

    .logo {
        width: 36px;
    }

    h4 {
        text-align: center;
        margin: 0;
    }

    .links {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }

    a {
        text-transform: uppercase;
        color: var(--footer-links);

        &:visited {
            color: var(--footer-links);
        }
    }
</style>