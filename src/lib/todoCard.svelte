<script lang="ts">
  import type { Todo } from "../types";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let todo: Todo;

  const handleClose = () => dispatch("deleteTodo", { id: todo.id });
  const handleSuccess = () => dispatch("completeTodo", { id: todo.id });
</script>

<div
  class="card w-96 bg-neutral text-neutral-content m-2 card-bordered border-error flex-4"
>
  <div class="card-body">
    <div class="card-actions justify-between flex flex-nowrap flex-row">
      <h2 class="card-title break-words">{todo.title}</h2>
      <div class="flex">
        <button
          class="btn btn-square btn-sm btn-success"
          on:click={handleSuccess}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </svg>
        </button>
        <button class="btn btn-square btn-sm ml-1" on:click={handleClose}>
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
    </div>
    <p class="break-words">{todo.desc}</p>
  </div>
</div>
