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
    
    let hovering: boolean = false;
    let currentProject: any = null;
    
    export let cardList;


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

{#each cardList as project}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="transition ease-in-out min-w-96 max-w-96 scale-90 max-h-52 hover:scale-100" on:mouseenter={() => handleHoverEnter(project)} on:mouseleave={handleHoverLeave} out:fade>
    <a href="/{project.role}">
        <div class="flex flex-col h-full w-full p-3 space-y-2 rounded-xl bg-primary scroller justify-center items-center transition-all ease-in-out hover:justify-start deepInnerShadow">
            
            <!-- Header -->
            {#if hovering && currentProject === project}
                <div class="flex flex-row  w-full" in:fade={{duration:200}}>
                    <div class=" w-1/2 flex flex-row items-center">
                        <!-- Title -->
                        <div class=""><h1 class="text-md font-bold">{project.role}</h1></div>
                    </div>
                    <div class="w-1/2 flex flex-row place-content-end items-center space-x-4">
                        <!-- Duration -->
                        <div class=""><h3 class="text-sm font-light"> {project.duration}</h3></div>
                        <!-- Expand Icon -->
                        <div class=""><svg fill="#509532" height="18" width="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 242.133 242.133" xml:space="preserve"><path id="XMLID_15_" d="M227.133,83.033c8.283,0,15-6.716,15-15V15c0-8.284-6.717-15-15-15H174.1c-8.284,0-15,6.716-15,15s6.716,15,15,15h16.82l-69.854,69.854L51.213,30h16.82c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.717,0,0,6.716,0,15v53.033c0,8.284,6.717,15,15,15c8.285,0,15-6.716,15-15v-16.82l69.854,69.854L30,190.92V174.1c0-8.284-6.715-15-15-15c-8.283,0-15,6.716-15,15v53.033c0,8.284,6.717,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82l69.854-69.854l69.854,69.854H174.1c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.033c8.283,0,15-6.716,15-15V174.1c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15v16.82l-69.854-69.854l69.854-69.854v16.82C212.133,76.317,218.848,83.033,227.133,83.033z"/></svg></div>    
                    </div>           
                </div>
            {:else if currentProject !== project}
                <!-- Title -->
                <div class="flex flex-col w-full items-center" in:fade={{duration:200}}>
                        <div class=""><h1 class="text-xl font-bold">{project.role}</h1></div>
                </div>
            {/if}

            <!-- Content -->
            {#if hovering && currentProject === project}
                <div class="w-full h-full" in:fade={{duration:200}}>
                    <div class="mx-3"><p class="text-sm">{project.description}</p></div>
                </div>
            {:else if currentProject !== project}
                <div class="flex flex-col w-full items-center" in:fade={{duration:200}}>
                    <div><p class="text-sm font-extralight">{project.projectOrProfession}</p></div>
                </div>
            {/if}

            <!-- Footer -->
            {#if hovering && currentProject === project}
                <div class="flex flex-row flex-wrap w-full items-end space-x-1 space-y-1 pb-2" in:fade={{duration:200}}>
                    {#each project.tags as tag}
                        <Badge variant="outline" class="justify-center bg-primary h-fit">{tag}</Badge>
                    {/each}
                </div>
            {:else if currentProject !== project}
                <div class="flex flex-row flex-wrap w-full items-end justify-center space-x-1 space-y-1 pb-2" in:fade={{duration:200}}>
                    {#each project.tags as tag}
                        <Badge variant="outline" class="justify-center bg-primary h-fit">{tag}</Badge>
                    {/each}
                </div>
            {/if}

        </div>
    </a>
</div>

{/each}
