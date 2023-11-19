<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Todo } from "../types";

  const dispatch = createEventDispatcher();

  export let todo: Todo;

  const handleClose = () => dispatch("deleteCompleteTodo", { id: todo.id });
</script>

<div
  class="card w-96 bg-neutral text-neutral-content m-2 card-bordered border-success flex-4"
>
  <div class="card-body">
    <div class="card-actions justify-between flex flex-nowrap flex-row">
      <h2 class="card-title break-words">{todo.title}</h2>
      <button class="btn btn-square btn-sm" on:click={handleClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          /></svg
        >
      </button>
    </div>
    <p class="break-words">{todo.desc}</p>
  </div>
</div>
