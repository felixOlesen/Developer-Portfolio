<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Badge } from "$lib/components/ui/badge";
  import { projects, experience } from "$lib/data";
  import * as ToggleGroup from "$lib/components/ui/toggle-group";
  import ResumeCards from "./resumeCards.svelte";

</script>

<div class="flex flex-col space-y-4 pt-24">
    <ResumeCards cardList={experience} cardListName="Experience" on:cardHover>

    </ResumeCards>
    <ResumeCards cardList={projects} cardListName="Projects" on:cardHover>
        
    </ResumeCards>
    
</div>