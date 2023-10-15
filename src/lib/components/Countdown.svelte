<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let count = 59;

	function decreaseCount() {
		count -= Math.floor(Math.random() * 3);
		if (count > 7) {
			setTimeout(decreaseCount, 3000 + Math.random() * 5000);
		}
	}

	onMount(() => {
		decreaseCount();
	});
</script>

<div class="count">
	<div class="number">
		{#key count}
			<h1 in:fly={{ y: 100 }} out:fly={{ y: -100 }}>{count}</h1>
		{/key}
	</div>
	<p>hoodies left!</p>
</div>

<style>
	.count {
		width: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: var(--back-accent);
		padding: 1em;
		border-radius: 1em;
		animation: pulse 2s infinite;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.05);
		}
		100% {
			transform: scale(1);
		}
	}
	.count .number {
		position: relative;
		height: 6rem;
	}

	.count h1 {
		position: absolute;
		display: block;
		font-size: 5rem;
		margin: 0;
		translate: -50%;
	}

	.count p {
		font-size: 2em;
		margin: 0;
	}
</style>
