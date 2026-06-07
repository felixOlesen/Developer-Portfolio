<script lang="ts">
    import * as ToggleGroup from "$lib/components/ui/toggle-group";

    import ResumeCards from "./resumeCards.svelte";
    interface Props {
        resumeData: any;
    }

    let { resumeData }: Props = $props();

    let displayableCards = $derived(resumeData.experience.concat(resumeData.projects));

    function handleToggle(toggleValue:any) {
        // if(toggleValue == "workExperience") {
        // displayableCards = resumeData.experience;
        // } else if(toggleValue == "projects") {
        // displayableCards = resumeData.projects;
        // } else {
        // displayableCards = resumeData.experience.concat(resumeData.projects);
    }
</script>

<div class="flex flex-col h-1/2 items-center gap-4">
    <div class="flex flex-row border-2 w-full md:w-7/8 border-2">
        <p class="text-black text-3xl md:text-5xl">Selected Work and Projects</p>
    </div>
    <div class="flex flex-row border-2 w-full md:w-7/8">
        <ToggleGroup.Root size="default" type="single" variant="default" onValueChange={(value) => handleToggle(value)}>
            <ToggleGroup.Item value="workExperience" class="rounded-xl bg-secondary shadow-xl hover:deepInnerShadow">Work Experience</ToggleGroup.Item>
            <ToggleGroup.Item value="projects" class="rounded-xl bg-secondary shadow-xl hover:deepInnerShadow">Projects</ToggleGroup.Item>
        </ToggleGroup.Root>
    </div>
    <div class="flex flex-col border-2 items-center">
        <div class="flex flex-row border-2"><h1>Grid</h1></div>
        <div class="flex flex-row border-2">
            <div class="flex flex-row border-2">
                <h1>Experience Filter</h1>
            </div>
        </div>
        <div class="grid grid-cols-4 gap-4">
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
            <div><p>Grid Item</p></div>
        </div>
    </div>
</div>