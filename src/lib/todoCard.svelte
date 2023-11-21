<script lang="ts">
  import type { Todo } from "../types";
  import { createEventDispatcher } from "svelte";
  import Cross from "../assets/cross.svg";
  import Checkmark from "../assets/checkmark.svg";
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
          <img src={Checkmark} alt="close" />
        </button>
        <button
          class="btn btn-square btn-error btn-sm ml-1"
          on:click={handleClose}
        >
          <img src={Cross} alt="close" />
        </button>
      </div>
    </div>
    <p class="break-words">{todo.desc}</p>
  </div>
</div>
