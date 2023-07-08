<script lang="ts">
  import Intro from "./Components/Intro.svelte";
  import Links from "./Components/Links.svelte";
  import ToggleMode from "./Components/ToggleMode.svelte";
  import SvelteSeo from "svelte-seo";
  export let name: string, username: string, avatarUrl: any, url: any;
</script>

<SvelteSeo
  description="LinksApp of @{username}"
  openGraph={{
    title: `@${username} | LinksApp`,
    description: `LinksApp of @${username}`,
    type: `website`,
  }}
  twitter={{
    title: `@${username} | LinksApp`,
    description: `LinksApp of @${username}`,
    site: `@sebastianjnuwu`,
  }}
/>

<Intro propsName={name} propsUsrname={username} propsAvatarUrl={avatarUrl} />
<Links propsUrl={url} />
<ToggleMode />

<style>
</style>
