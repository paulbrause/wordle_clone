<script lang="ts">
	import KeyboardLetter from './KeyboardLetter.svelte';

	export let row;
</script>

<div class="flex gap-2">
	{#each row as letter}
		<KeyboardLetter {letter} />
	{/each}
</div>
