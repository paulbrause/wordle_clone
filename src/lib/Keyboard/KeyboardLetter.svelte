<script lang="ts">
	export let letter;
	let letterClass;

	$: {
		if (letter === 'ENTER' || letter === 'DEL') letterClass = 'px-2 sm:px-4';
		else letterClass = '';
	}
</script>

<button
	class="flex-1 border-2 border-white border-opacity-20 h-12 sm:h-16 sm:text-2xl rounded-md {letterClass}"
>
	{#if letter === 'ENTER'}
		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6L9 18Z"
			/></svg
		>
	{:else if letter === 'DEL'}
		<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 m-auto" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M9 19q-.5 0-.938-.225t-.712-.625L3 12l4.35-6.15q.275-.4.713-.625T9 5h10q.825 0 1.413.588T21 7v10q0 .825-.588 1.413T19 19H9Zm10-2V7v10ZM9 17h10V7H9l-3.55 5L9 17Zm2.4-1l2.6-2.6l2.6 2.6l1.4-1.4l-2.6-2.6L18 9.4L16.6 8L14 10.6L11.4 8L10 9.4l2.6 2.6l-2.6 2.6l1.4 1.4Z"
			/></svg
		>
	{:else}
		{letter}
	{/if}
</button>
