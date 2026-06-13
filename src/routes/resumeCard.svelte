<script lang="ts">
    import { Badge } from "$lib/components/ui/badge";
    import { fade} from 'svelte/transition';
    import { onNavigate } from '$app/navigation';

    onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
		    });
	    });
    });
    
    let hovering: boolean = $state(false);
    let currentProject: any = $state.raw(null);
    
    let { project, projectNumber } = $props();

    function handleHoverEnter(project:any) {
        // console.log("Entering!");
        hovering = true;
        currentProject = project;
    }
    
    function handleHoverLeave() {
        // console.log("Leaving!");
        hovering = false;
        currentProject = null;
    }

</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->

<div class="flex flex-col border-1 border-gray-400 p-4 rounded-xl bg-[#ECE5DB] overflow-hidden">
    <a href="/{project.role+project.orgOrEvent}" class="flex flex-col gap-6">
        <div class="flex flex-row  w-full place-content-between">
            <p class="text-gray-600 text-md font-extralight place-content-center">{projectNumber}</p>
            <p class="text-gray-600 border-1 rounded-full py-1 px-2 font-light">{project.projectOrProfession}</p>
        </div>
            {#if project.overviewMedia.length > 0}
                <div class="flex flex-row flex-wrap border-1 border-gray-500 bg-[#857969] rounded-xl place-self-center overflow-hidden place-content-center w-[325px] lg:w-[375px] h-[225px] ">
                    <enhanced:img class="object-fill" src={project.overviewMedia[0]} alt="overviewMedia" loading="lazy"/>                
                </div>
            {:else}
                <p class="border text-white font-bold rounded-xl p-3 bg-[#857969] w-[325px] lg:w-[375px] h-[225px] overflow-y-scroll scrollbar-track-transparent place-self-center place-content-center">{project.description}</p>
            {/if}
        <div class="flex flex-row  w-full flex-wrap gap-1">
            <p  class="text-black font-bold text-xl">{project.role}</p> {#if project.orgOrEvent != ''}<p class="text-black font-bold text-xl">{'- ' + project.orgOrEvent}</p> {/if}
        </div>
        <div class="flex flex-row w-full">
            <p  class="text-sm font-light text-gray-600">{project.duration}</p>
        </div>
        <div class="flex flex-row  w-full flex-wrap gap-2">
            {#each project.skills as skill}
                <div class="border-1 rounded-full py-1 px-2 bg-[#f5f0e6]"><p class="text-gray-600 font-extralight text-sm">{skill}</p></div>
            {/each}
        </div>
    </a>
</div>


