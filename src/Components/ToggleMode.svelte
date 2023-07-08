<script lang="ts">
  import Fa from "svelte-fa";
  import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
  import { afterUpdate } from "svelte";
  import Cookies from "js-cookie";

  let darkMode = true;

  const handleToggle = () => {
    darkMode = !darkMode;
    toggleDarkMode();
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      window.document.body.classList.add("dark");
      window.document.querySelector("#color-theme").setAttribute("content", "#1A202C");
      Cookies.set("theme", "dark", { expires: 365, path: "/" });
    } else {
      window.document.body.classList.remove("dark");
      window.document.querySelector("#color-theme").removeAttribute("content");
      Cookies.remove("theme", { path: "/" });
    }
  };

  afterUpdate(() => {
    const theme = Cookies.get("theme");
    if (theme === "dark") {
      darkMode = true;
      window.document.body.classList.add("dark");
      window.document.querySelector("#color-theme").setAttribute("content", "#1A202C");
    } else {
      darkMode = false;
    }
  });
</script>

<div id="btn-toggle">
  <button on:click={handleToggle} id="toggleBtn">
    {#if darkMode}
      <Fa icon={faMoon} />
    {:else}
      <Fa icon={faSun} />
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