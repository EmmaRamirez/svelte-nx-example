<script lang="ts">
    export let value: string;
    export let onclick: (e: any) => any;
</script>

<style>
    @import '../styles/root.css';

    .button {
        background-color: var(--primary-color);
        border-radius: var(--size-l);
        border: none;
        color: var(--white);
        cursor: pointer;
        padding: var(--size-m) var(--size-l);
    }

    .button:active {
        background-color: var(--primary-color-dark);
    }
</style>

<button data-testid='button' class='button' on:click={onclick}>
    {value}
</button>