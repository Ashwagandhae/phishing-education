<script lang="ts">
	import { phishInfo } from '$lib/stores';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	function obfuscateInfo(info: string): string {
		// only show last 3 characters, rest are asterisks
		return info.slice(0, -3).replace(/./g, '*') + info.slice(-3);
	}
	let show = false;
	onMount(() => {
		show = true;
	});
</script>

<head>
	<title>Uh oh</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="icon" href="/favicon.png" />
</head>
{#if show}
	<main>
		<section in:fade|global={{ duration: 500, delay: 1000 }}>
			<h1>Uh oh</h1>
		</section>
		<section in:fade|global={{ duration: 500, delay: 2000 }}>
			{#if $phishInfo}
				<p>
					Your email <span class="info">
						{$phishInfo.email}
					</span>
					and password
					<span class="info">
						{obfuscateInfo($phishInfo.password)}
					</span> could have been stolen!
				</p>
			{:else}
				<p>Your email and password could have been stolen!</p>
			{/if}
			<p>
				PersonalPaint doesn't actually exist. The Hacktober team created this website to simulate
				how hackers can steal your username and password through <b>phishing.</b>
			</p>
			<p>
				Phishing is when a hacker sends you a fake login page, and when you enter your username and
				password, they steal it.
			</p>
			<p>
				Go to the <a href="https://cpshacktober.my.canva.site/hacktober-college-prep-2023"
					>Hacktober Website</a
				> to find out more!
			</p>
		</section>
	</main>
{/if}

<style>
	@import '@fontsource/atkinson-hyperlegible';

	main {
		background: #ecb0b0;

		box-sizing: border-box;
		width: 100vw;
		min-height: 100vh;
		font-family: 'Atkinson Hyperlegible', sans-serif;
		padding: 2em;
	}
	section {
		width: 100%;
		max-width: 80ch;
		margin: 0 auto;
		box-sizing: border-box;
	}
	h1 {
		font-size: 3rem;
	}
	p {
		font-size: 1.2rem;
	}

	span.info {
		font-weight: bold;
		color: #a90000;
	}

	@media (max-width: 768px) {
		section {
			padding: 1em;
		}
	}

	a {
		color: #a90000;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}
</style>
