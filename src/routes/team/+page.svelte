<script lang="ts">
    import { onMount } from 'svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Header from '$lib/components/Header.svelte';

    interface Member {
        name: string;
        imagePath: string;
        genie: string;
        linkedin: string;
    }

    interface Team {
        name: string;
        members: Member[];
    }

    let teams: Team[] = [];

    onMount(async () => {
        const response = await fetch('/api/team/', {method: 'GET'}) // Replace with your endpoint
        const data: { teams: Team[] } = await response.json();
        teams = data.teams;
    });
</script>

<svelte:head>
    <title>Notre Equipe | Archimède | Poly</title> 
</svelte:head>


<main>
    <Header />
    <div class="main-container">
        <h1 class="title">Notre Équipe</h1>
        {#if teams.length > 0}
            {#each teams as team}
                <section>
                    <h2 class="team-name">{team.name}</h2>
                    <div class="members-grid">
                        {#each team.members as member}
                            <div class="member-card">
                                <div class="member-photo-container">
                                    <img src={member.imagePath} alt={member.name} />
                                </div>
                                <p><strong>{member.name}</strong></p>
                                <p>Genie: {member.genie}</p>
                                {#if member.linkedin}
                                    <div class="linkedin-link">
                                        <a href={member.linkedin} target="_blank">
                                            <div class="linkedin-icon"></div>
                                        </a>
                                    </div>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </section>
            {/each}
        {:else}
            <p>Loading teams...</p>
        {/if}

        <!-- <div>
            <a href="candidacy">Interresser a nous rejoindre?</a>
        </div> -->
        <Footer />
    </div>
</main>

<style>
    @font-face {
		font-family: 'raleway';
		src: url('/fonts/raleway.woff2') format('woff2');
	}

    :root {
        --headerHeight: 84px;
    }

    * {
        font-family: 'raleway';
    }

    .member-photo-container{
        display: flex;
    }

    .title {
        text-align: center;
        font-size: 4.4rem;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .team-name {
        text-align: center;
        font-size: 2.5rem;
        text-decoration: underline;
    }

    section {
        margin-bottom: 2rem;
    }

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    .members-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* 3 columns */
        gap: 1.5rem; /* Space between grid items */
        margin: 0 auto;
        max-width: 1200px; /* Optional: Limit the width of the grid */
    }

    .member-card {
        /* background-color: #f9f9f9;
        border: 1px solid #ddd;
        border-radius: 8px; */
        padding: 1rem;
        text-align: center;
        /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
    }

    .linkedin-link {
        display: flex;
    }

    .member-card img {
        width: 200px;
        height: 200px;
        /* border-radius: 50%; */
        margin-bottom: 0.5rem;
        margin: auto;
    }

    .member-card p {
        margin: 0.5rem 0;
        font-size: 1.4rem;
    }

    .member-card a {
        color: #007bff;
        text-decoration: none;
        margin: auto;
    }

    .member-card a:hover {
        text-decoration: underline;
    }

    .linkedin-icon {
        display: block;
        height: 50px;
        width: 50px;
        background-image: url(/icons/linkedin.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
    }

    .main-container {
        height: auto;
        background-image: url('/images/curvy-line.svg');
        background-repeat: round;
        background-size: auto;
        background-color: #edf5fd;
    }
</style>
