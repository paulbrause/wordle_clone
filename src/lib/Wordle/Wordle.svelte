<script>
	import CONSTANTS from '$lib/constants';
	import WordleRow from './WordleRow.svelte';
</script>

<section class="flex-1 flex flex-col gap-2">
	{#each Array(CONSTANTS.MAX_GUESSES) as row, i}
		<WordleRow row={i} />
	{/each}
</section>
