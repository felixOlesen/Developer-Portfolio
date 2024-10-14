<script lang="ts">
    import { info } from '$lib/data.js';
    import Projects from "./projects.svelte";
    import ProjectOverview from "./projectOverview.svelte";
    import Socials from "./socials.svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";

    $: activeProject = null;

    function handleCardHover(event:any) {
        activeProject = event.detail.project;
    }

</script>
<div class="flex flex-col h-screen">
    <div class="flex flex-row h-3/5">
        <div class="flex flex-col h-full ml-6">
            <Socials></Socials>
        </div>
        <div class="flex flex-col h-full w-11/12 pt-52 items-center justify-center">
            <div class="flex flex-col w-3/8 justify-center space-y-1">
                <h1 class="text-3xl"> Hi, I'm</h1>
                <h1 class="text-5xl font-semibold"> Felix Sylvest Olesen</h1>
                <h1 class="text-2xl"> Computer Science Graduate</h1>
                <div class="flex flex-row w-fit bg-primary rounded-xl shadow-inner p-2 space-x-2 items-center">
                    <svg fill="#509532" height="18" width="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 242.133 242.133" xml:space="preserve"><path id="XMLID_15_" d="M227.133,83.033c8.283,0,15-6.716,15-15V15c0-8.284-6.717-15-15-15H174.1c-8.284,0-15,6.716-15,15s6.716,15,15,15h16.82l-69.854,69.854L51.213,30h16.82c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.717,0,0,6.716,0,15v53.033c0,8.284,6.717,15,15,15c8.285,0,15-6.716,15-15v-16.82l69.854,69.854L30,190.92V174.1c0-8.284-6.715-15-15-15c-8.283,0-15,6.716-15,15v53.033c0,8.284,6.717,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82l69.854-69.854l69.854,69.854H174.1c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.033c8.283,0,15-6.716,15-15V174.1c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15v16.82l-69.854-69.854l69.854-69.854v16.82C212.133,76.317,218.848,83.033,227.133,83.033z"/></svg>
                    <h1 class="text-l text-primary-foreground"> More about me</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col h-2/5">
        <div class="flex flex-row w-full h-1/5 pl-7">
            <ToggleGroup.Root size="default" type="single" variant="default">
                <ToggleGroup.Item value="workExperience" class="rounded-xl bg-secondary shadow-xl">Work Experience</ToggleGroup.Item>
                <ToggleGroup.Item value="projects" class="rounded-xl bg-secondary shadow-xl">Projects</ToggleGroup.Item>
            </ToggleGroup.Root>
        </div>
        <div class="flex flex-row w-screen h-4/5 overflow-x-scroll hideScroll space-x-6 mb-8 px-6">
            <Projects on:cardHover={handleCardHover}></Projects>
        </div>
    </div>
</div>


<!-- <div class="flex flex-row">
    <div class="flex flex-col w-1/2 pt-12 items-center">
        <div class="flex flex-row items-center space-x-4 pt-10 pb-4  w-3/5">
            <div class="">
                <Avatar.Root class="h-24 w-24">
                    <Avatar.Image src={image} alt="FO" />
                    <Avatar.Fallback>FO</Avatar.Fallback>
                </Avatar.Root>
            </div>
            <div class="flex flex-col">
                <h1 class="scroll-m-20 text-2xl tracking-tight lg:text-4xl">
                    Felix Sylvest Olesen
                </h1>
                <h2 class="scroll-m-20 text-l tracking-tight">
                    {info.title}
                </h2>
            </div>
        </div>
        <div class="w-3/5">
            {#if activeProject != null}
                <ProjectOverview project={activeProject}></ProjectOverview>
            {/if}
        </div>
        <div class="flex flex-col h-full justify-end w-3/5">
            <Socials></Socials>
        </div>
    </div>
    <div class="flex min-h-screen w-1/2 flex-col pt-0 pr-12">
        <div class="overflow-scroll hideScroll w-3/4 h-screen p-2">
            <Projects on:cardHover={handleCardHover}></Projects>
        </div>
    </div>
</div> -->


<style>
	.hideScroll::-webkit-scrollbar { display: none; }
	.hidescroll {
  	-ms-overflow-style: none;  /* IE and Edge */
  	scrollbar-width: none;     /* Firefox */
	}
	.spacer { height: 10vh; }
	#scrollingBlock {
		border: 2px solid black;
		/*box-shadow: 10px 5px 5px red;*/
		overflow-y: scroll;
	}
</style>



