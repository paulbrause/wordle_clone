<script lang="ts">
	import CONSTANTS from '$lib/constants';
	import WordleLetter from './WordleLetter.svelte';

	export let row;
</script>

<div class="flex justify-evenly gap-2">
	{#each Array(CONSTANTS.MAX_LETTERS) as col, i}
		<WordleLetter col={i} {row} />
	{/each}
</div>
