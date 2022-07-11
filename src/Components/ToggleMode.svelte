<script lang="ts">
  import Fa from "svelte-fa";
  import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
  let darkMode = false;
  const handleToggle = () => {
    darkMode = !darkMode;
    window.document.body.classList.toggle("dark");
    if (window.document.body.classList.value === "dark") {
      window.document
        .querySelector("#color-theme")
        .setAttribute("content", "#1A202C");
      localStorage.setItem("theme", "dark");
    } else {
      window.document.querySelector("#color-theme").removeAttribute("content");
      localStorage.removeItem("theme");
    }
  };

  if (localStorage.getItem("theme") === "dark") {
    darkMode = false;
  } else {
    darkMode = true;
  }
</script>

<div id="btn-toggle">
  <button on:click={handleToggle} id="toggleBtn">
    {#if darkMode}
      <Fa icon={faSun} />
    {:else}
      <Fa icon={faMoon} />
    {/if}
  </button>
</div>

<style>
  #btn-toggle button {
    border: 0px;
    border-radius: 5px;
    position: absolute;
    right: 0;
    bottom: 40;
    margin-right: 1rem;
    padding-bottom: 1rem;
    background: transparent;
  }
</style>