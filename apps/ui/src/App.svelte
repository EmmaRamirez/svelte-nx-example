<script lang="ts">
	import {Button} from '@svelte-nx-example/core';
	const value = 'Hello World!';
	export let name: string;
</script>

<main>
	<h1>Welcome {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Button {value} onclick={() => alert('hello :)')} />
</main>

<style>
	@import './styles/root.css';

	:root {
		background: var(--background-color);
	}

	main {
		text-align: center;
		padding: var(--size-l);
		max-width: calc(var(--size-l) * 12);
		margin: 0 auto;
	}

	h1 {
		color: var(--text-color);
		text-transform: uppercase;
		font-size: calc(var(--size-l) * 4);
		font-weight: 100;
	}

	p {
		color: var(--text-color);
	}

	a {
		color: var(--accent-color);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
