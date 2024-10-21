<script lang="ts">
    import { info } from '$lib/data.js';
    import Projects from "./projects.svelte";
    import Socials from "./socials.svelte";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";
    export let data;

</script>
<div class="flex flex-col h-screen">
    <div class="flex flex-row h-3/5">
        <div class="flex flex-col h-full ml-6">
            <Socials></Socials>
        </div>
        <div class="flex flex-col h-full w-11/12 pt-52 items-center justify-center">
            <div class="flex flex-col w-3/8 justify-center space-y-1">
                <h1 class="text-3xl"> Hi, I'm</h1>
                <h1 class="text-5xl font-semibold">{info.name}</h1>
                <h1 class="text-2xl">{info.title}</h1>
                <a href="/">
                    <div class="flex flex-row w-fit bg-primary rounded-xl shadow-inner p-2 space-x-2 items-center group transition ease-in-out hover:scale-105 ">
                        <svg class="transition ease-in-out group-hover:scale-105" fill="#509532" height="18" width="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 242.133 242.133" xml:space="preserve"><path id="XMLID_15_" d="M227.133,83.033c8.283,0,15-6.716,15-15V15c0-8.284-6.717-15-15-15H174.1c-8.284,0-15,6.716-15,15s6.716,15,15,15h16.82l-69.854,69.854L51.213,30h16.82c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.717,0,0,6.716,0,15v53.033c0,8.284,6.717,15,15,15c8.285,0,15-6.716,15-15v-16.82l69.854,69.854L30,190.92V174.1c0-8.284-6.715-15-15-15c-8.283,0-15,6.716-15,15v53.033c0,8.284,6.717,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82l69.854-69.854l69.854,69.854H174.1c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.033c8.283,0,15-6.716,15-15V174.1c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15v16.82l-69.854-69.854l69.854-69.854v16.82C212.133,76.317,218.848,83.033,227.133,83.033z"/></svg>
                        <h1 class="transition ease-in-out text-l text-border group-hover:text-primary-foreground group-hover:scale-95"> More about me</h1>
                    </div>
                </a>
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
        <div class="flex flex-row w-screen h-4/5 overflow-x-scroll space-x-1 mb-8 px-6">
            <Projects resumeData={data}></Projects>
        </div>
    </div>
</div>



<style>
    /* div.scroller {
        
        scrollbar-color: rgba(80,149,50,1) rgba(49,49,49,1);
        scroll-behavior: smooth;
        scrollbar-gutter: stable;
    }  */

    /* width */
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
    box-shadow: inset 0 0 5px rgba(49,49,49,1);
    box-shadow: inset 0 0 5px rgba(49,49,49,1);
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
    background: rgba(80,149,50,0.7);
    border-radius: 10px;
    width: auto;
    height: 50%;

}

</style>
