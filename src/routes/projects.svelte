<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import ResumeCards from "./resumeCards.svelte";
  export let resumeData;

  let displayableCards = resumeData.experience.concat(resumeData.projects);
</script>
<ResumeCards cardList={displayableCards}></ResumeCards>