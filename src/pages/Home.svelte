<script>
    export let location;
	import Banner from '../components/Banner.svelte';

    let bannerData = {
        header: "Awesome Svelte Starter",
        paragraph: "Includes basic set up for scss, routing  & dotenv. Happy Coding :)"
    }
</script>

<svelte:head>
	<name>Home</name>
</svelte:head>

<Banner bind:bannerData={bannerData}/>

<style lang="scss">
	
</style>
