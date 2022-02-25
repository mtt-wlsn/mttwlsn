<script lang="ts">
    import { browser } from "$app/env";
    import Moon from '$lib/icons/moon.svelte';
    import Sun from '$lib/icons/sun.svelte';

    if (browser) {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    function toggle() {
        document.documentElement.classList.toggle('dark')
        if (localStorage.theme === 'dark') {
            localStorage.theme = 'light'
        } else {
            localStorage.theme = 'dark'
        }
    }
</script>

<button on:click="{toggle}">
    <Moon />
    <Sun />
</button>