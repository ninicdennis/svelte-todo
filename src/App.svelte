<script lang="ts">
  import { onMount } from "svelte";
  import { v4 as uuidv4 } from "uuid";
  import CompleteTodo from "./lib/completeTodo.svelte";
  import CreateTodo from "./lib/createTodo.svelte";
  import TodoCard from "./lib/todoCard.svelte";
  import type { Todo } from "./types";

  let todos: Todo[];

  onMount(() => {
    todos = JSON.parse(localStorage.getItem("todos") || "[]");
  });

  $: todos = [];
  $: if (todos.length) localStorage.setItem("todos", JSON.stringify(todos));

  const createNewTodo = ({
    detail: { title, desc },
  }: CustomEvent<{ title: string; desc: string }>) => {
    todos = [...todos, { id: uuidv4(), title, desc, status: "INCOMPLETE" }];
  };

  const deleteTodo = ({ detail: { id } }: CustomEvent<{ id: string }>) => {
    todos = todos.filter((t) => t.id !== id);
  };

  const completeTodo = ({ detail: { id } }: CustomEvent<{ id: string }>) => {
    const completedIndex = todos.findIndex((t) => t.id === id);
    todos[completedIndex].status = "COMPLETE";
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
