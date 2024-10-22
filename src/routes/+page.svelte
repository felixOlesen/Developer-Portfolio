<script lang="ts">
    import { info } from '$lib/data.js';
    import Projects from "./projects.svelte";
    import Socials from "./socials.svelte";
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
                <a href="/aboutMe">
                    <div class="flex flex-row w-fit bg-primary rounded-xl deepInnerShadow p-2 space-x-2 items-center group transition ease-in-out hover:scale-105 mt-1">
                        <svg class="transition ease-in-out group-hover:scale-105" fill="#509532" height="18" width="18" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 242.133 242.133" xml:space="preserve"><path id="XMLID_15_" d="M227.133,83.033c8.283,0,15-6.716,15-15V15c0-8.284-6.717-15-15-15H174.1c-8.284,0-15,6.716-15,15s6.716,15,15,15h16.82l-69.854,69.854L51.213,30h16.82c8.284,0,15-6.716,15-15s-6.716-15-15-15H15C6.717,0,0,6.716,0,15v53.033c0,8.284,6.717,15,15,15c8.285,0,15-6.716,15-15v-16.82l69.854,69.854L30,190.92V174.1c0-8.284-6.715-15-15-15c-8.283,0-15,6.716-15,15v53.033c0,8.284,6.717,15,15,15h53.033c8.284,0,15-6.716,15-15c0-8.284-6.716-15-15-15h-16.82l69.854-69.854l69.854,69.854H174.1c-8.284,0-15,6.716-15,15c0,8.284,6.716,15,15,15h53.033c8.283,0,15-6.716,15-15V174.1c0-8.284-6.717-15-15-15c-8.285,0-15,6.716-15,15v16.82l-69.854-69.854l69.854-69.854v16.82C212.133,76.317,218.848,83.033,227.133,83.033z"/></svg>
                        <h1 class="transition ease-in-out text-l text-primary-foreground group-hover:text-border group-hover:scale-95"> {info.about}</h1>
                    </div>
                </a>
                <a href="/resume">
                    <div class="flex flex-row w-fit bg-primary rounded-xl deepInnerShadow p-2 space-x-2 items-center group transition ease-in-out hover:scale-105 mt-1">
                        <svg class="transition ease-in-out group-hover:scale-105" height="20" width="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#509532" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                        
                        <h1 class="transition ease-in-out text-l text-primary-foreground group-hover:text-border group-hover:scale-95"> {info.resume}</h1>
                    </div>
                </a>
            </div>
        </div>
    </div>
    <div class="flex flex-col h-2/5">
        <Projects resumeData={data}></Projects>
    </div>
</div>



<style>
    /* div.scroller {
        
        scrollbar-color: rgba(80,149,50,1) rgba(49,49,49,1);
        scroll-behavior: smooth;
        scrollbar-gutter: stable;
    }  */

    /* width */

:global(div.scroller) {
  overflow-y: scroll;
  scrollbar-color: rgba(0,0,0,0) rgba(0,0,0,0);
} 
:global(div.deepInnerShadow) {
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}

</style>
