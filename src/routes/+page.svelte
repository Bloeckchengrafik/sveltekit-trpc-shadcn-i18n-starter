<script lang="ts">
	import { page } from '$app/stores';
	import { trpc } from '$lib/trpc/trpcClient';
	import Button from '@/ui/button/button.svelte';
	import { _ } from 'svelte-i18n';
	import { toast } from 'svelte-sonner';

	async function greetWithAuth() {
		return await trpc($page).user.greetingAuth.query('World');
	}

	async function greet() {
		return await trpc($page).user.greeting.query();
	}
</script>

<div class="p-4 flex flex-col gap-4 text-center">
	{#await greetWithAuth() then abc}
		{abc}
	{:catch error}
		{$_(error.message)}
	{/await}
	<br />

    <Button variant="secondary" on:click={async () => {
        toast(await greet(), {
            duration: 3000,
            description: 'This is a toast',
            action: {
                label: 'Great!',
                onClick: () => {}
            }
        });
    }}>Bring me a toast</Button>
</div>
