<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import type { Todo } from "../types";
  import Cross from "../assets/cross.svg";

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
      <button class="btn btn-square btn-sm btn-error" on:click={handleClose}>
        <img src={Cross} alt="close" />
      </button>
    </div>
    <p class="break-words">{todo.desc}</p>
  </div>
</div>
