<script lang="ts">
  import Fa from "svelte-fa";
  export let propsUrl;
</script>

<div>
  <!-- Each tag opening -->
  {#each propsUrl as { name, url, icon }}
    <div id="links">
      <a class="link" href={url} target="_blank"><Fa {icon} /> {name}</a>
    </div>
  {/each}
  <!-- Each tag closing -->
</div>

<style>
  .link {
    font-family: "Karla", sans-serif;
  }
</style>
