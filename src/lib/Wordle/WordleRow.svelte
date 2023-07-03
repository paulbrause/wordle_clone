<script lang="ts">
	import WordleLetter from './WordleLetter.svelte';

	export let row;
</script>

<div class="flex justify-evenly gap-2">
	{#each { length: 5 } as col, i}
		<WordleLetter col={i} {row} />
	{/each}
</div>
