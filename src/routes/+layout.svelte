<script lang="ts">
  import "../app.css";
  import FooterContent from "./footer_content.svelte";
  import HeaderNav from "./header_nav.svelte";
  
  interface Props {
      children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<HeaderNav/>
<main>{@render children?.()}</main>
<FooterContent />