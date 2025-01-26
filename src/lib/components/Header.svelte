<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";

	import { locale } from '$lib/i18n';
  	import { saveLocale } from '$lib/i18n';

  	function switchLanguage(lang: string): void {
    	$locale = lang;
    	saveLocale(lang); // Save the locale to localStorage
  	}

	function goToHomePage() {
		goto('/');
	}

    onMount(() => {handleMouseScroll()});

	function handleMouseScroll() {        
		document.body.style.setProperty(
			'--headerHeightModifier',
			(window.scrollY / (document.body.offsetHeight - window.innerHeight + 0.00001)).toString()
		);
	}

</script>

<svelte:window on:scroll={handleMouseScroll} />

<header>
	<a href="/" class="header-left">
		<div class="logo doNotSelect"></div>
		<h1 class="site-name doNotSelect">Archimède</h1>
	</a>
	<nav class="header-right">
		<ul class="other-tabs doNotSelect">
			<li class="tabs"><a href="/">Home</a></li>
			<li class="tabs"><a href="/about">About</a></li>
			<li class="tabs"><a href="/team">Our Team</a></li>
			<li class="tabs"><a href="/sponsors">Sponsors</a></li>
			<li class="tabs"><a href="/candidacy">Rejoignez-nous!</a></li>
		</ul>
	</nav>
</header>
<div class="header-gap"></div>

<style>
	@font-face {
		font-family: 'anton';
		src: url('/fonts/anton.woff2') format('woff2');
	}

	:root {
		--logoWidth: 398px;
		--headerHeight: 84px;
		--headerHeightModifier: 1;
	}

	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
  		position: fixed;
		/* padding: 10px 20px; */
		background-color: #1968e6;
		color: white;
		height: calc(var(--headerHeight) * (1 - min(var(--headerHeightModifier), 0.3)));
		/* height: var(--headerHeight); */
		width: 100vw;
		transition: ease all .05s;
	}

	.header-left {
		display: flex;
		height: 100%;
		align-items: center;
		cursor: pointer;
		margin-left: 20px;
	}

	.logo {
		height: 85%;
		aspect-ratio: 1;
		margin-right: 15px;
		background-position: center;
		background-size: cover;
		background-image: url('/images/ArchmiedeLogo.png');
	}

	.site-name {
		font-size: calc(70px * (1 - min(var(--headerHeightModifier), 0.3)));
		/* // font-weight: 700; */
		margin: 0;
		color: white;
		font-family: 'anton';
		/* transition: ease all .5s; */
	}

	.header-right {
		z-index: 1;
		/* // height: 75%; */
	}

	.header-right ul {
		list-style: none;
		display: flex;
		gap: 20px;
	}

	.doNotSelect {
		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
		user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
	}

	.header-right li a {
		color: white;
		cursor: pointer;
		text-decoration: none;
		font-size: 1.3rem;
		padding: 10px 15px;
		border-radius: 5px;
		transition: 0.2s;
	}

	.header-right li a:hover {
		background-color: #ffffff;
		border-radius: 5px;
		color: black;
	}

	header::after {
		content: '';
		position: absolute;
		top: 0;
		left: calc((var(--logoWidth) + 20px) * (1 - min(var(--headerHeightModifier), 0.3)));
		width: calc(100% - (var(--logoWidth) - 20px)* (1 - min(var(--headerHeightModifier), 0.3)));
		height: var(--headerHeight);
		padding: 10px 20px;
		background: linear-gradient(
				to right,
				rgb(73, 38, 197) 0%,
				/* Start with semi-transparent shadow */ rgba(0, 0, 0, 0) max(50%, 200px) /* Fade out to transparent */
			),
			#00a4fc;
		clip-path: polygon(100px 0%, 100% 0%, 100% 100%, 0% 100%);
		z-index: 0; /* Place it behind the content */
		/* transition: ease all .5s; */
	}

	.other-tabs {
		margin-right: 30px;
	}

	@media only screen and (max-width: 1140px) {
	.site-name {
		/* opacity: 0; */
		display: none;
	}
	header::after {
		left: calc(100px + 20px);
		width: calc(100% - 100px - 20px);
		clip-path: polygon(90px 0%, 100% 0%, 100% 100%, 0% 100%);

	}
	.logo {
		overflow: visible;
	}
	.tabs {
		overflow: visible;
	}

	.header-left{
		width: 100px ;
	}
	
	}

	@media only screen and (max-width: 830) {
	.other-tabs {
		display: none;
	}

	.tabs {
		background-color: red;
	}

}
	.header-gap {
        display: block;
        height: var(--headerHeight);
    }

</style>
