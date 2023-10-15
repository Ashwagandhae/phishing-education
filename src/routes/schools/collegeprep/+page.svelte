<script lang="ts">
	import Countdown from '$lib/components/Countdown.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import Verify from '$lib/components/Verify.svelte';
	import cpsUrl from './cps.png';
	import hoodieUrl from './hoodie.jpg';
</script>

<div class="content">
	<div class="explain">
		<div class="text">
			<span>
				<Logo />
				—STOCK OVERFLOW!
			</span>
			<h1>Free merch for College Prep students!</h1>
			<p>
				Due to the stock overflow event, Personal Paint is giving away <b>100 pieces of merch</b> to
				all students and faculty!
			</p>
		</div>
		<img src={cpsUrl} alt="College Prep logo" />
	</div>
	<div class="merchdisplay">
		<Countdown />
		<img class="hoodie" src={hoodieUrl} alt="Hoodie" />
	</div>
	<div class="instructs">
		<div class="info">
			<h1>First come first serve!</h1>
			<p>
				To claim your free merch, you must <b>verify your College Prep email</b>, to ensure that
				only College Prep students and faculty can claim the free merch.
			</p>
			<p>Complete your order in 3 steps:</p>
			<ol>
				<li>Verify your College Prep email</li>
				<li>Choose your merch</li>
				<li>Enter your shipping details</li>
			</ol>
		</div>
		<div class="input">
			<div class="steps">
				<div class="selected">Verify</div>
				<div>Choose merch</div>
				<div>Shipping details</div>
			</div>
			<Verify />
			<Logo />
		</div>
	</div>
</div>

<style>
	.hoodie {
		width: 50%;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
		max-width: 1000px;
	}
	.explain {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 2em;
	}
	.merchdisplay {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	.text {
		width: 50%;
	}

	.text h1 {
		font-size: 2em;
	}

	.text p {
		font-size: 1.2rem;
	}

	img {
		width: 50%;
	}

	.instructs {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;

		gap: 2em;
		width: 100%;

		background: white;
		padding: 1rem;
		box-sizing: border-box;
		border-radius: 1em;
	}

	.input {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 2em;
	}

	@media (max-width: 768px) {
		.explain {
			flex-direction: column;
		}

		.merchdisplay {
			flex-direction: column;
		}

		.text {
			width: 100%;
		}

		img {
			width: 100%;
		}

		.hoodie {
			width: 100%;
		}

		.instructs {
			flex-direction: column;
			align-items: center;
		}
	}

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2em;
	}

	.info h1 {
		font-size: 2.5rem;
		margin: 0;
	}
	.info p {
		font-size: 1.2rem;
		margin: 0;
	}

	.steps {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;

		background: var(--back-indent);
		padding: 1em;
		border-radius: 1em;
	}

	.steps div {
		white-space: nowrap;
		padding: 0.5em;
	}

	.steps div::after {
		content: '→';
		margin-left: 1em;
	}

	.steps div:last-child::after {
		content: '';
	}

	.steps div.selected {
		font-weight: bold;
	}

	ol {
		font-size: 1.2rem;
		margin: 0;
	}
</style>
