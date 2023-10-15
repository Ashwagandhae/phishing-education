<script>
	import './global.css';
	import Logo from '$lib/components/Logo.svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import happyUrl from './happy.png';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });

	let showCookies = false;

	let showPopup = false;

	onMount(() => {
		setTimeout(() => {
			showCookies = true;
		}, 500);
		setTimeout(() => {
			showPopup = true;
		}, 1000);
	});
</script>

<main>
	<div class="toptopbar">
		<span><b>STOCK OVERFLOW EVENT</b>—Check in with your school for free merch!</span>
	</div>
	<div class="topbar">
		<a href="/">
			<Logo />
		</a>
		<nav>
			<a href="./">Home</a>
			<a href="./">About</a>
			<a href="./">Blog</a>
			<a href="./">Products</a>
			<a href="./">Templates</a>
			<a href="./">Fundraising</a>
		</nav>
	</div>
	<div class="page">
		<slot />
	</div>
	<footer>
		<p>
			<Logo /> is your school's custom merch solution.
		</p>
		<ul>
			<li>Privacy Policy</li>
			<li>California Privacy Notice</li>
			<li>Accessibility Commitment</li>
			<li>User Agreement</li>
			<li>Do Not Sell or Share My Personal Information</li>
		</ul>
		<p>
			&copy; 2021 <Logo />. All Rights Reserved.
		</p>
	</footer>
	<div class="chat">Chat with a rep</div>
	{#if showCookies}
		<div
			class="cookies"
			transition:fly|global={{
				y: 300,
				duration: 500
			}}
		>
			<h1>But first, cookies</h1>
			<p>
				We use cookies to improve your experience on our site. To find out more, read our{' '}
				<a href="./">privacy policy</a> and
				<a href="./">cookie policy</a>.
			</p>
			<div class="buttons">
				<button on:click={() => (showCookies = false)}>ACCEPT</button>
				<button on:click={() => (showCookies = false)} class="weak">REJECT</button>
			</div>
		</div>
	{/if}
	{#if showPopup}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="screen" transition:fade on:click={() => (showPopup = false)} />
		<div class="popup" transition:fade={{ duration: 300 }}>
			<div class="text">
				<h1>Enjoy 10% off your next purchase</h1>
				<div class="signup">
					<p>Sign up for our newsletter and get 10% off your next purchase.</p>
					<div class="inputs">
						<input type="text" placeholder="Your email here" />
						<button on:click={() => (showPopup = false)}>Sign up</button>
					</div>
				</div>
				<div class="row">
					<Logo />
					<button class="close" on:click={() => (showPopup = false)}>close</button>
				</div>
			</div>
			<img src={happyUrl} alt="Happy" />
		</div>
	{/if}
</main>

<style>
	.chat {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
		padding: 1rem;
		border-radius: 2rem;

		background: var(--back-accent-strong);
		color: white;

		font-weight: bold;

		box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
	}
	.signup {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.cookies {
		box-sizing: border-box;
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		padding: 1rem;
		border-radius: 0.5rem;

		width: calc(100vw - 2rem);

		background: white;

		font-weight: bold;

		box-shadow: 0 0 1rem hsl(295, 70%, 60%, 0.2);

		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.popup .row {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}
	.cookies h1 {
		font-size: 1.2rem;
		margin: 0;
	}
	.cookies a {
		color: inherit;
	}
	.cookies p {
		color: rgba(100, 100, 100);
		margin: 0;
	}
	.cookies button {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		border: none;
		background: var(--back-accent);
		color: white;
		font-weight: bold;
		font-size: 1rem;
	}
	.cookies button:hover {
		background: var(--back-accent-strong);
	}

	.cookies button.weak {
		background: var(--back-indent);
		color: rgba(100, 100, 100);
	}

	.cookies button.weak:hover {
		color: rgba(50, 50, 50);
	}

	.screen {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;

		background: rgba(0, 0, 0, 0.5);
	}

	.popup {
		box-sizing: border-box;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 0.5rem;

		width: calc(100vw - 10rem);
		height: calc(100vh - 10rem);

		background: white;

		font-weight: bold;

		box-shadow: 0 0 1rem hsl(295, 70%, 60%, 0.2);

		display: flex;
		flex-direction: row;
		gap: 1rem;

		overflow: hidden;
	}

	.popup .text {
		flex: 1;
		display: flex;
		width: 50%;
		flex-direction: column;
		gap: 1rem;
		padding: 3rem;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.popup h1 {
		font-size: 3rem;
		margin: 0;
	}

	.popup p {
		color: rgba(100, 100, 100);
		margin: 0;
		font-size: 1.5rem;
	}
	.popup .inputs {
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	.popup input {
		width: 100%;
		padding: 0.5rem 0.5rem;
		border-radius: 0.5rem;
		border: none;
		background: var(--back-indent);
		font-size: 1.2rem;
	}

	.popup .inputs button {
		padding: 0.5rem;
		border-radius: 0.5rem;
		border: none;
		background: var(--back-accent);
		color: white;
		font-weight: bold;
		font-size: 1.2rem;
		white-space: nowrap;
	}

	.popup img {
		width: 50%;
		height: 100%;
		object-fit: cover;
		/* show the left of the image */
		object-position: 0 0;
	}

	.popup button.close {
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		background: none;
		border: none;
		color: rgba(100, 100, 100);
		font-size: 0.8rem;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.popup {
			flex-direction: column-reverse;
			width: calc(100vw - 10rem);
			height: auto;
		}

		.popup .text {
			width: 100%;
			padding: 1rem;
		}
		.popup h1 {
			font-size: 2rem;
		}

		.popup p {
			font-size: 1rem;
		}

		.popup img {
			width: 100%;
			height: 50%;
			object-position: 0 0;
		}
	}
	main {
		width: 100vw;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
		justify-content: space-between;
		align-items: center;
	}
	.toptopbar {
		background: var(--back-accent);
		color: var(--text-accent);
		padding: 0.5em;
		text-align: center;
		width: 100%;
	}

	.topbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2em;
		box-sizing: border-box;
		width: 100%;
		background: var(--back-indent);
	}

	nav {
		display: flex;
		gap: 1em;
	}

	nav a {
		text-decoration: none;
		color: #000;
		font-weight: bold;
	}

	nav a:hover {
		text-decoration: underline;
	}

	.page {
		flex: 1;
	}

	footer {
		text-align: center;
		padding: 1em;
		background: var(--back-indent);
		width: 100%;
	}

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	ul li {
		padding: 0.5em;
	}
	.page {
		padding: 2em;
		min-height: 100vh;
		width: 100%;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (max-width: 768px) {
		.topbar {
			gap: 2em;
			padding: 2em 1em;
		}
	}
</style>
