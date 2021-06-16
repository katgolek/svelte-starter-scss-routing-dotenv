<script>
	export let bannerData
</script>

<div class="banner">
    <h1>{bannerData.header}</h1>
    <p>{bannerData.paragraph}</p>
</div>

<style lang="scss">

    .banner{
        height:70vh;
        display: flex; 
        flex-direction: column;
        place-items: center;
        place-content: center;

        h1{
            width:50%;
            text-align: center;
            margin-bottom: 2rem;
        }
        p{
            width:50%;
            text-align: center;
        }

        
    }
	
</style>