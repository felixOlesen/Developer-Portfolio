<script lang="ts">
  import * as ToggleGroup from "$lib/components/ui/toggle-group";
  import ResumeCards from "./resumeCards.svelte";
  interface Props {
    resumeData: any;
  }

  let { resumeData }: Props = $props();

  let displayableCards = $derived(resumeData.experience.concat(resumeData.projects));

  function handleToggle(toggleValue:any) {
    if(toggleValue == "workExperience") {
      displayableCards = resumeData.experience;
    } else if(toggleValue == "projects") {
      displayableCards = resumeData.projects;
    } else {
      displayableCards = resumeData.experience.concat(resumeData.projects);
    }
  }

  

  
</script>

<div class="flex flex-row w-full h-1/5 pl-3 sm:pl-7">
  <ToggleGroup.Root size="default" type="single" variant="default" onValueChange={(value) => handleToggle(value)}>
      <ToggleGroup.Item value="workExperience" class="rounded-xl bg-secondary shadow-xl hover:deepInnerShadow">Work Experience</ToggleGroup.Item>
      <ToggleGroup.Item value="projects" class="rounded-xl bg-secondary shadow-xl hover:deepInnerShadow">Projects</ToggleGroup.Item>
  </ToggleGroup.Root>
</div>
<div class="flex flex-col sm:flex-row w-screen sm:h-4/5 sm:overflow-x-scroll px-0 space-x-1 mb-8 sm:px-6">
  <ResumeCards cardList={displayableCards}></ResumeCards>
</div>

<style>
  ::-webkit-scrollbar {
    width: 20px;
    height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: rgba(66,65,65,1);
    border-radius: 10px;
    margin-left: 45px;
    margin-right: 45px;
}

::-webkit-scrollbar-track:hover {
    box-shadow: inset 0 0 5px rgba(49,49,49,0.5);
    background: rgba(49,49,49,0.5);
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: rgba(49,49,49,0.5);
    border-radius: 10px;
    width: auto;
    height: 50%;

}

::-webkit-scrollbar-thumb:hover {
    background: rgba(80,149,50,1);
    border-radius: 10px;
    width: auto;
    height: 50%;

}
</style>
