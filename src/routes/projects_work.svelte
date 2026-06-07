<script lang="ts">
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
  import { derived } from "svelte/store";
    import ResumeCard from "./resumeCard.svelte";

    interface Props {
        resumeData: any;
    }

    let { resumeData }: Props = $props();

    // 1. Reactive state for the active filter ('all', 'workExperience', 'projects')
    let filter = $state('all'); 
    // 2. Extract arrays from props
    let experience = $derived(resumeData.experience);
    let projects = $derived(resumeData.projects);

    // 3. Automatically calculate exactly which cards to display based on the active filter
    let visibleCards = $derived(
        filter === 'workExperience' ? experience :
        filter === 'projects' ? projects :
        [...experience, ...projects]
    );

    // 4. Handle toggle and catch empty string "" fallback when a user deselects
    function handleToggle(value: string | undefined) {
        filter = value || 'all';
    }
</script>

<div class="flex flex-col items-center gap-14 px-2 mt-10 md:mt-20 mb-20">
    <div class="flex flex-row w-full md:w-7/8">
        <p class="text-black text-3xl md:text-5xl">Selected Work and Projects</p>
    </div>

    <div class="flex flex-row w-full md:w-7/8 place-content-between items-center">
        <ToggleGroup.Root 
            type="single" 
            value={filter} 
            onValueChange={handleToggle}>
            <ToggleGroup.Item value="workExperience" class="rounded-xl border-1 border-gray-500 text-gray-600">
                Work Experience
            </ToggleGroup.Item>
            <ToggleGroup.Item value="projects" class="rounded-xl border-1 border-gray-500 text-gray-600">
                Projects
            </ToggleGroup.Item>
        </ToggleGroup.Root>
        <p class="text-gray-600 font-light text-sm">{visibleCards.length} Entries</p>
    </div>

    <div class="flex flex-col items-center w-full md:w-7/8">
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full p-4">
            {#each visibleCards as project, i}
                <ResumeCard project={project} projectNumber={i+1} />
            {/each}
        </div>
    </div>
</div>