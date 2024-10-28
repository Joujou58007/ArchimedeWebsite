<script></script>

<body>
    <div class="main-container">
        <div class="top-wave">
            <svg viewBox="0 0 500 100">
                <path d="M 0 50 C 150 150 300 0 500 80 L 500 0 L 0 0" fill="#58c8da"></path>
                <path d="M 0 50 C 150 150 330 -30 500 50 L 500 0 L 0 0" fill="#0768d6" opacity="0.8"></path>
                <path d="M 0 50 C 215 150 250 0 500 100 L 500 0 L 0 0" fill="#66a1e6" opacity="0.5"></path>
            </svg>
        </div>
        <div class="info-container">
            <h1>404</h1>
            <article>
                <p class="info">Looks like you got lost.</p>
                <p class="info">Probably better for you if you go back to the homepage.</p>
            </article>
            <div class="button-container">
                <a href="/" class="back-button">Go back to Homepage</a>
            </div>
        </div>
    </div>

</body>

<style>
	@font-face {
		font-family: 'anton';
		src: url('/fonts/anton.woff2') format('woff2');
	}

    .top-wave{
        width: 100vw;
        top: 30px;
    }

    .info {
        text-wrap: wrap;
    }


    .info-container {
        margin-top: 100px;
        margin-bottom: auto;
        margin-left: 12.5%;
        /* display: flex; */
        color: rgb(255, 255, 255);
    }
    .main-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        background-image: linear-gradient(0deg, #022244, hsl(200, 63%, 60%));
        flex-direction: column;
    }
    h1 {
		font-family: 'anton';
        font-size: 70px;
    }

    .button-container {
        display: flex;
        padding-top: 20px;
    }

    .back-button {
        padding: 10px 25px;
        background-color: #1968e6;
        color: rgb(255, 255, 255);
        text-decoration: none;
        font-size: 1rem;
        border-radius: 5px;
        /* transition: background-color 0.3s ease; */
    }

    .back-button:hover {
        background-color: #2b6cc0;
    }
</style>