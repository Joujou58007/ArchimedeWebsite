<script lang='ts'>
	import { onMount } from "svelte";

    let leftHeader: HTMLDivElement;
    let width = 0;

    function getElementWidth() {
        width = leftHeader.offsetWidth;
        document.documentElement.style.setProperty('--logoWidth', `${width}px`);
        console.log(width)
    }
    
    onMount(() => {
        getElementWidth();
    })

</script>

<header>
    <div bind:this={leftHeader} class="header-left">
      <div class="logo doNotSelect"></div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Anton+SC&family=Protest+Strike&display=swap');
      </style>      
      <h1 class="site-name doNotSelect">Archimède</h1>
    </div>
    <nav class="header-right">
      <ul class="Other-tabs doNotSelect">
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/candidacy">Rejoignez-nous!</a></li>
      </ul>
    </nav>
  </header>
  
  <style> 
:root {
    --logoWidth: 383px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #1968e6;
    color: white;
    height: 105px;
  }
  
  .header-left {
    display: flex;
    height: 100%;
    align-items: center;
    cursor: pointer;
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
    font-size: 70px;
    /* // font-weight: 700; */
    margin: 0;
    color: white;
    font-family: "Anton SC", sans-serif ;
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

  .doNotSelect{
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
    left: calc(var(--logoWidth) + 20px);
    width: calc(100% - var(--logoWidth) - 20px);
    height: 105px;
    padding: 10px 20px;
    background: linear-gradient(
        to right, 
        rgb(73, 38, 197) 0%,   /* Start with semi-transparent shadow */
        rgba(0, 0, 0, 0) 50%     /* Fade out to transparent */
        ), 
    #00a4fc;
    clip-path: polygon(100px 0%, 100% 0%, 100% 100%, 0% 100%);
    z-index: 0; /* Place it behind the content */
  }
  </style>
  