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
			<h1>Free hoodie for College Prep students!</h1>
			<p>
				Due to the stock overflow event, Personal Paint is giving away <b>100 hoodies</b> to the students!
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
				To claim your free hoodie, you must <b>verify your College Prep email</b>, to ensure that
				only College Prep students and faculty can claim the free merch.
			</p>
			<p>Complete your order in 3 steps:</p>
			<ol>
				<li>Verify your College Prep email</li>
				<li>Choose your hoodie color</li>
				<li>Enter your shipping details</li>
			</ol>
		</div>
		<div class="input">
			<div class="steps">
				<div class="selected">Verify</div>
				<div>Choose hoodie</div>
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

	p {
		font-size: 1.2rem;
	}
	h1 {
		font-size: 2rem;
		margin: 0;
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

	.info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2em;
		padding: 1rem;
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

		h1 {
			font-size: 1.5em;
		}
		p {
			font-size: 1em;
		}
		ol {
			font-size: 1rem;
		}
		.steps {
			font-size: 0.8rem;
		}
	}

	@media (max-width: 500px) {
		.steps {
			flex-direction: column;
		}
		.steps div::after {
			content: '';
			margin-left: 0;
		}
	}
</style>
