<script>
// pages

import { Home } from './pages';

// router
import { Router, Route} from "svelte-routing";

// global components
import Header from "./components/Header.svelte";
	
</script>

<Router>
	<Header />
	<main class="main">
		<Route path="/" component={Home} />
	</main>
</Router>

<style lang="scss">

	

	:global(*){
		padding:0;
		margin: 0;
		box-sizing: border-box;
	}

	:global(html), 
	:global(body),
	:global(#svelte), 
	:global(.main){
		background-color:$primaryColor;
		color: $textColor;
		font-family: $fontPrimary!important;
	
	}


	:global(html){
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	:global(.main){
		margin-top:4vw;
		height: auto;
		width:100vw;
		
	}

	:global(h1){
		color:$accentColor;
		font-size: clamp(3rem, 7vw, 14rem);
		font-weight: normal;
		line-height: 1;
	}

	:global(p){
		font-size: clamp(.8rem, .88vw, 2.2rem);
		line-height: 1.6;
	}

	:global(a){
		font-size: clamp(.8rem, .88vw, 2.2rem);
		text-decoration: none;
		color:$textColor;
		margin: auto;
	}


	
</style>