<script lang="ts">
    import aboutMeFullImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?enhanced';
    import aboutMeTinyImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?w=20&enhanced';
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