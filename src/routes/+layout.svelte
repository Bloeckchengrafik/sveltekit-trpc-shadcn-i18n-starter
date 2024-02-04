<script>
	import { Toaster } from '@/ui/sonner';
	import '../app.pcss';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import { onMount } from 'svelte';

	onMount(() => {
		setMode("dark")
	});
</script>

<ModeWatcher />
<Toaster />
<slot />
