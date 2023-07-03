<script>
	import Header from '../lib/Header/Header.svelte';
	import Keyboard from '../lib/Keyboard/Keyboard.svelte';
	import Wordle from '../lib/Wordle/Wordle.svelte';
</script>

<main class="absolute inset-0 flex flex-col p-4 gap-8 max-w-lg mx-auto">
	<Header />
	<Wordle />
	<Keyboard />
</main>
