<script>
	import WordleRow from './WordleRow.svelte';
</script>

<section class="flex-1 flex flex-col gap-2">
	{#each { length: 6 } as row, i}
		<WordleRow row={i} />
	{/each}
</section>
