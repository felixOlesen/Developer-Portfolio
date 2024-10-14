<script lang="ts">
  import { projects, experience } from "$lib/data";
  import ResumeCards from "./resumeCards.svelte";

</script>

<ResumeCards cardList={experience} on:cardHover></ResumeCards>
<ResumeCards cardList={projects} on:cardHover></ResumeCards>
