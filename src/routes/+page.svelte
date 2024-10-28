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
    <p>a</p>
    <p>a</p>
    <p>a</p>
</div>




<style>
    :root {
        --firstImageHeight: 540px
    }
    .main-container {
        width: 100vw;
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