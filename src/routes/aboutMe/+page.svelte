<script lang="ts">
    import aboutMeFullImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?enhanced';
    import aboutMeTinyImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?w=20&enhanced';
    import Socials from "../socials.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { onNavigate } from "$app/navigation";
    import { aboutMe } from "$lib/data.js";
    import MinusIcon from "@lucide/svelte/icons/minus";
    import Dot from "@lucide/svelte/icons/dot";

    let loaded = $state(false);


    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<div class="flex flex-col w-full md:w-7/8 place-self-center gap-14">
    <div class="flex flex-col mt-20 gap-6 w-full px-2 pt-2 md:px-0 md:pt-0 md:w-7/8 place-self-center">
        <div class="flex flex-row">
            <MinusIcon class="text-[#B45F38]"/> <p class="text-[#B45F38]">About</p>
        </div>
        <div class=""><p class="text-black text-9xl">Hi, I'm <b class="text-[#B45F38]">Felix</b></p></div>
    </div>
    <div class="flex flex-col md:flex-row  mb-20">
        <div class="flex flex-col w-full md:w-3/8 items-center gap-2">
            <div class="relative border-2 rounded-xl w-[300px] h-[350px]  md:w-[350px] md:h-[400px] overflow-hidden m-1">
    
                <div class="absolute inset-0 z-0">
                    <enhanced:img 
                        src={aboutMeTinyImage} 
                        alt="Felix Sylvest Olesen Blur"
                        class="w-full h-full object-cover blur-xl scale-110"
                    />
                </div>

                <div 
                    class="absolute inset-0 z-10 transition-opacity duration-700"
                    class:opacity-0={!loaded}
                    class:opacity-100={loaded}
                >
                    <enhanced:img 
                        src={aboutMeFullImage} 
                        alt="Felix Sylvest Olesen"
                        onload={() => loaded = true}
                        class="w-full h-full object-cover"
                    />
                </div>

            </div>

            <div class="flex flex-row border-gray-400 border-b-1 border-t-1 w-[300px] md:w-[350px] p-3 place-content-between">
                <p class="text-black text-sm font-extralight">Based in</p>
                <p class="text-black text-sm font-heavy">London, UK</p>
            </div>
            <div class="flex flex-row border-gray-400 border-b-1 w-[300px] md:w-[350px] p-3 place-content-between">
                <p class="text-black text-sm font-extralight">Studying</p>
                <p class="text-black text-sm font-heavy">MSc · Imperial</p>
            </div>
            <div class="flex flex-row border-gray-400 border-b-1 w-[300px] md:w-[350px] p-3 place-content-between">
                <p class="text-black text-sm font-extralight">Languages</p>
                <p class="text-black text-sm font-heavy">EN · DA · ES</p>
            </div>
            <div class="flex flex-row border-gray-400 border-b-1 w-[300px] md:w-[350px] p-3 place-content-between">
                <p class="text-black text-sm font-extralight">Status</p>
                <p class="text-black text-sm font-heavy">Open to 2026-27 Roles</p>
            </div>
            <div class="flex flex-row border-gray-400 border-b-1 w-[300px] md:w-[350px] p-3 place-content-between">
                <p class="text-black text-sm font-extralight">Started Coding</p>
                <p class="text-black text-sm font-heavy">2013 (Scratch)</p>
            </div>
        </div>
        <div class="flex flex-col w-full md:w-5/8 px-12 gap-8 pt-6">
            <p class="text-black text-xl font-bold">{aboutMe.origin}</p>
            <p class="text-black text-xl">{aboutMe.background}</p>
            <p class="text-black text-xl">{aboutMe.hobbies}</p>
            <div class="flex flex-col gap-4 pt-3">
                <p class="text-black font-light">Outside the Editor</p>
                <div class="flex flex-row p-2 gap-3 flex-wrap">
                    {#each aboutMe.hobbyList as hobby }
                        <div class="flex flex-row border rounded-xl pl-2 pr-4 py-2 items-center"><Dot class="text-[#6bc651]"/><p class="text-black text-sm font-bold">{hobby}</p></div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>


<!-- <div class="sm:flex grid grid-cols-1 sm:flex-row w-screen h-screen sm:space-y-0 ">
    <div class="flex flex-row h-fit space-x-3 sm:space-x-0 sm:flex-col sm:h-full ml-6 ">
        <Button class="mt-4 rounded-xl bg-secondary shadow-xl hover:deepInnerShadow fill-white hover:fill-border" href="/">
            <svg height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 219.151 219.151" xml:space="preserve">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <g> 
                        <path d="M109.576,219.151c60.419,0,109.573-49.156,109.573-109.576C219.149,49.156,169.995,0,109.576,0S0.002,49.156,0.002,109.575 C0.002,169.995,49.157,219.151,109.576,219.151z M109.576,15c52.148,0,94.573,42.426,94.574,94.575 c0,52.149-42.425,94.575-94.574,94.576c-52.148-0.001-94.573-42.427-94.573-94.577C15.003,57.427,57.428,15,109.576,15z"></path> <path d="M94.861,156.507c2.929,2.928,7.678,2.927,10.606,0c2.93-2.93,2.93-7.678-0.001-10.608l-28.82-28.819l83.457-0.008 c4.142-0.001,7.499-3.358,7.499-7.502c-0.001-4.142-3.358-7.498-7.5-7.498l-83.46,0.008l28.827-28.825 c2.929-2.929,2.929-7.679,0-10.607c-1.465-1.464-3.384-2.197-5.304-2.197c-1.919,0-3.838,0.733-5.303,2.196l-41.629,41.628 c-1.407,1.406-2.197,3.313-2.197,5.303c0.001,1.99,0.791,3.896,2.198,5.305L94.861,156.507z"></path> 
                    </g> 
                </g>
            </svg>
        </Button>
        <Socials></Socials>
    </div>
    
    <div class="flex flex-col w-full h-full items-center mt-2 p-4 space-y-4 sm:mt-0">
        
        <div class="flex flex-col sm:flex-row w-full h-full space-x-4 space-y-4 items-center justify-center sm:space-y-0 ">
            <div class="flex w-fit h-fit p-4 bg-primary rounded-xl deepInnerShadow">
                <enhanced:img class="max-h-[350px] w-auto object-cover rounded-md" src={gradPhotoUrl} alt="graduateMedia" />
            </div>            
            <div class="flex flex-col w-fit sm:max-w-[600px] h-fit sm:max-h-[382px] p-4 bg-primary rounded-xl deepInnerShadow space-y-3">
                <h1 class="text-lg font-semibold">Hi, I'm Felix!</h1>
                <p class="text-md ml-1 font-light">{aboutMe.origin}</p>
                <p class="text-md ml-1 font-light">{aboutMe.background}</p>
                <p class="text-md ml-1 font-light">{aboutMe.hobbies}</p>
            </div>
        </div>
     </div>
</div> -->
