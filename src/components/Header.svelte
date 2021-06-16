<script>
    import { link } from "svelte-routing";
	
</script>


<header>
    <div class="menu-link">
        <a href="/" use:link class="menu-link-item" aria-label="Home">Home</a>
    </div>
    <div class="menu-link">
        <a href="https://svelte.dev/" class="menu-link-item" rel="noopener noreferrer" target="_blank" aria-label="Svelte Docs">Svelte Docs</a>
    </div>
</header>

<style lang="scss">

    header{
        position: fixed;
        top:0; 
        left:50%;
        transform: translate(-50%, 0);
        width:20rem;
        display: flex;
        place-items: center;
        justify-content: space-between;
        margin: auto;
        padding: 1rem;

        .menu-link{
            display: flex;
            width:100%;
            place-self: center;
        }
    }
	
</style>