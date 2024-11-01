<script lang='ts'>
	// import { onMount } from "svelte";
    import Footer from '$lib/components/Footer.svelte';
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
            <div class="left-presentation">
                <h2>Présentation</h2>
                <p>Archimède est une société technique de Polytechnique Montréal qui se spécialise dans la conception de sous-marins à propution humaine afin de compétitonner dans des compétitions internatinales.</p>
                <a href="./about"><button id="about-button">Learn more about the project</button></a>
            </div>
            <div class="right-presentation">
                <img src="/images/presentation-image.JPG" alt="Équipe qui se prepare pour le sous marin">
            </div>
        </div>
    </div>
    <div class="site-explorator-container">
        <div class="anciennes-equipes">
            <img src="/images/archives-image.jpg" alt="Modèle de l'année 19XX">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada cursus sem, in tempor magna interdum ac. Proin sed eleifend elit.</p>
            <a href="./archive"><button id="about-button">See more about older project</button></a>
        </div>
        <div class="notre-equipe">
            <img src="/images/equipe-image.jpg" alt="Compétition 2023s">
            <p>Sed quis sapien urna. Pellentesque lectus nibh, malesuada at lacinia ut, iaculis a tellus. Integer in libero tellus. Nunc et pharetra lorem, sit amet blandit orci.</p>
            <a href="./team"><button id="about-button">Meet our members</button></a>
        </div>
        <div class="nous-rejoindre">
            <img src="/images/sponsor-image.jpg" alt="">
            <p>Quisque in nulla non eros hendrerit egestas. Sed eget enim a mi lacinia cursus. Praesent sed elit et risus scelerisque ullamcorper.</p>
            <a href="./sponsors"><button id="about-button">See our sponsors</button></a>
        </div>
    </div>
    <Footer />

</div>




<style>
	@font-face {
		font-family: 'raleway';
		src: url('/fonts/raleway.woff2') format('woff2');
	}

    :root {
        --firstImageHeight: 540px;
        --presentation-image-width: 400px;
        --presentation-right-gap: 200px;
        --site-exploration-height: 400px;
        --site-exploration-width: 350px;
    }
    .main-container {
        width: 100vw;
    }

    .initial-presentation {
        margin-right: auto;
        margin-left: auto;

        margin-top: 80px;
        /* margin-left: 300px; */
        /* margin-right: var(--presentation-right-gap); */
        width: 1200px;
        font-family: 'raleway';
        /* width: calc(100vw  - 300px - var(--presentation-right-gap)); */
        display: flex;
    }
    .left-presentation {
        width: calc(100% - var(--firstImageHeight));
        display: flex;
        flex-direction: column;
    }

    .left-presentation p {
        /* color: blue; */
        font-size: 18px;
        text-wrap: wrap;
        margin-right: auto;
        margin-bottom: 20px;
    }
    .left-presentation a {
        margin-bottom: auto;
    }
    .left-presentation button {
        background-color: #00a4fc;
        padding: 10px;
        font-size: 18px;
        transition: background-color 0.3s;
    }
    .left-presentation button:hover {
        background-color: #61daff;
    }

    .site-explorator-container a {
        background-color: #00a4fc;
        padding:10px;
        font-size: 18px;
        text-wrap: wrap;
        margin-top: auto;
        margin-right: auto;
        margin-left: auto;
        margin-bottom: 30px;
        transition: background-color 0.3s;
    }
    .site-explorator-container a:hover {
        background-color: #61daff;
    }

    .initial-presentation h2 {
        /* color: blue; */
        font-weight: 500;
        font-size: 40px;
        text-wrap: wrap;
        margin-top: auto;
    }

    .right-presentation img {
        border-radius: 50%;
        height: var(--presentation-image-width);
        aspect-ratio: 1;
    }

    .site-explorator-container {
        /* align-items: center; */
        display: flex;
        column-count: 3;
        column-gap: 110px;
        margin-top: 80px
    }

    .site-explorator-container p {
        text-wrap: wrap;
        padding: 20px;
        text-align: justify;
        text-justify: inter-word;
    }

    .site-explorator-container img {
        margin-top: 10px;
        width: 75%;
        height: 200px;
        margin-right: auto;
        margin-left: auto;
        aspect-ratio: 1;
    }

    .anciennes-equipes {
        display: flex;
        margin-left: auto;
        width: var(--site-exploration-width);
        height: var(--site-exploration-height);
        background-color: #00fc00;
        flex-direction: column;
    }
    .notre-equipe{
        display: flex;
        width: var(--site-exploration-width);
        height: var(--site-exploration-height);
        background-color: #ca00fc;
        flex-direction: column;
    }
    .nous-rejoindre{
        display: flex;
        margin-right: auto;
        width: var(--site-exploration-width);
        height: var(--site-exploration-height);
        background-color: #0037fc;
        flex-direction: column;
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