<script lang="ts">
	import CONSTANTS from '$lib/constants';

	import KeyboardRow from './KeyboardRow.svelte';
</script>

<section class="flex flex-col gap-3">
	{#each CONSTANTS.KEYBOARD_ROWS_ARR as row}
		<KeyboardRow {row} />
	{/each}
</section>
