<script lang="ts">
  export let propsName: string, propsUsrname: string, propsAvatarUrl: any;
  if (!propsAvatarUrl)
    propsAvatarUrl = `https://cdn.statically.io/avatar/shape=circle/${propsName}`;
</script>

<section>
  <img
    src={propsAvatarUrl}
    alt={propsName}
    class="rounded-circle img-thumbnail"
    id="pfp"
  />
  <h4 id="username">@{propsUsrname}</h4>
</section>

<style>
  section {
    width: 60%;
    padding-top: 5rem;
    margin: auto;
    text-align: center;
  }
  #username {
    padding-top: 1rem;
    font-family: "Karla", sans-serif;
  }
  #pfp {
    width: 150px;
    height: 150px;
  }
</style>
