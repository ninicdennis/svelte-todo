<script lang="ts">
  import { onMount } from "svelte";
  import CompleteTodo from "./lib/completeTodo.svelte";
  import CreateTodo from "./lib/createTodo.svelte";
  import TodoCard from "./lib/todoCard.svelte";
  import type { Todo } from "./types";

  let todos: Todo[];

  onMount(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    console.log(localStorageTodos);
    todos = localStorageTodos;
  });

  $: todos = [];

  const createNewTodo = (
    event: CustomEvent<{ title: string; desc: string }>
  ) => {
    const { title, desc } = event.detail;
    todos = [...todos, { id: todos.length, title, desc, status: "INCOMPLETE" }];
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const deleteTodo = (event: CustomEvent<{ id: number }>) => {
    const { id } = event.detail;
    todos = todos.filter((t) => t.id !== id);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const completeTodo = (event: CustomEvent<{ id: number }>) => {
    const { id } = event.detail;
    const completedIndex = todos.findIndex((t) => t.id === id);
    todos[completedIndex].status = "COMPLETE";
    localStorage.setItem("todos", JSON.stringify(todos));
  };
</script>

<div class="navbar bg-base-300">
  <button class="btn btn-ghost text-xl">Svelte Todo</button>
</div>

<div class="flex flex-row flex-wrap align-middle">
  <CreateTodo on:submitNewTodo={createNewTodo} />

  {#each todos as todo (todo.id)}
    {#if todo.status === "INCOMPLETE"}
      <TodoCard
        {todo}
        on:deleteTodo={deleteTodo}
        on:completeTodo={completeTodo}
      />
    {:else}
      <CompleteTodo {todo} on:deleteCompleteTodo={deleteTodo} />
    {/if}
  {/each}
</div>
