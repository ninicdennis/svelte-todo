<script lang="ts">
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let title = "";
  let desc = "";
  let submitted = false;

  const handleSubmit = () => {
    submitted = true;
    if (title.length > 0 && desc.length > 0) {
      dispatch("submitNewTodo", { title, desc });
    }
  };
</script>

<div class="card bg-neutral text-neutral-content m-2 w-full">
  <div class="card-body items-center text-center">
    <h2 class="card-title">Create Todo!</h2>
    <input
      bind:value={title}
      type="text"
      placeholder="Title"
      class={`input input-bordered w-full max-w-xs ${
        title.length === 0 && submitted && "input-error"
      }`}
    />
    <input
      bind:value={desc}
      type="text"
      placeholder="Description"
      class={`input input-bordered w-full max-w-xs ${
        desc.length === 0 && submitted && "input-error"
      }`}
    />
    <div class="card-actions justify-end">
      <button class="btn btn-primary" on:click={handleSubmit}>Create!</button>
    </div>
  </div>
</div>
