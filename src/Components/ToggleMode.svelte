<script lang="ts">
  import Fa from "svelte-fa";
  import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
  import $ from "jquery";
  import Cookies from "js-cookie";

  let darkMode = true;

  const handleToggle = () => {
    darkMode = !darkMode;
    toggleDarkMode();
  };

  const toggleDarkMode = () => {
    if (darkMode) {
      $("body").addClass("dark");
      $("#color-theme").attr("content", "#1A202C");
      Cookies.set("theme", "dark");
    } else {
      $("body").removeClass("dark");
      $("#color-theme").removeAttr("content");
      Cookies.remove("theme");
    }
  };

  const theme = Cookies.get("theme");
  if (theme === "dark") {
    darkMode = true;
    $("body").addClass("dark");
    $("#color-theme").attr("content", "#1A202C");
  } else {
    darkMode = false;
  }
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
    border: 0;
    border-radius: 5px;
    position: absolute;
    right: 0;
    bottom: 40px;
    margin-right: 1rem;
    padding-bottom: 1rem;
    background: transparent;
  }
</style>
