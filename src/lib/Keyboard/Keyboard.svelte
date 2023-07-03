<script lang="ts">
	import KeyboardRow from './KeyboardRow.svelte';

	const keyboard = [
		['Q', 'W', 'E', 'R', 'T', 'Z', 'U', 'I', 'O', 'P'],
		['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
		['ENTER', 'Y', 'X', 'C', 'V', 'B', 'N', 'M', 'DEL']
	];
</script>

<section class="flex flex-col gap-3">
	{#each keyboard as row}
		<KeyboardRow {row} />
	{/each}
</section>
