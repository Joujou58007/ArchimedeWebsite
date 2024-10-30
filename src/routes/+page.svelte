<script lang='ts'>
	// import { onMount } from "svelte";
    import Header from '$lib/components/Header.svelte';
    
    // onMount(() => {
    //     const temp = fetch('http://localhost:5173/api/candidacy/', {
    //         method: 'POST',
    //         body: '{"firstName": "julien", "lastName": "leduc", "email": "allo@gmail.com"}'
    //     })    
    // })
</script>

<svelte:head>
    <title>Main Page | Archimède | Poly</title> 
</svelte:head>


<div class="main-container">
    <Header />
    <div class="introduction-image"> 
        <div class="text-bloc">
    
        </div>
    
    </div>
    <div class="presentation-container">
        <div class="initial-presentation">
            <h2>Présentation</h2>
            <p>Archimède est une société technique de Polytechnique Montréal qui se spécialise dans la conception de sous-marins à propution humaine afin de compétitonner dans des compétitions internatinales.</p>
        </div>
        
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
    </div>

</div>




<style>
	@font-face {
		font-family: 'raleway';
		src: url('/fonts/raleway.woff2') format('woff2');
	}

    :root {
        --firstImageHeight: 540px
    }
    .main-container {
        width: 100vw;
    }

    .initial-presentation {
        margin-top: 80px;
        margin-left: 300px;
        margin-right: 300px;
        font-family: 'raleway';
        width: calc(100vw - 2 * 300px);
    }

    .initial-presentation p {
        /* color: blue; */
        font-size: 18px;
        text-wrap: wrap;
    }

    .initial-presentation h2 {
        /* color: blue; */
        font-weight: 500;
        font-size: 40px;
        text-wrap: wrap;
    }


    .text-bloc {
        width: 100vw;
        background-color: rgb(194, 194, 194);
        height: 10px;
        margin-top: 600px;
    }

    .introduction-image {
        background-image: url('/images/main-page-photo.JPG');;
        width: 100vw;
        height: var(--firstImageHeight);
        background-position-y: -200px;
		background-size: cover;
        /* position: sticky; */
        /* background-attachment:fixed; */

    }
</style>