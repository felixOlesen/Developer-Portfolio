<script lang="ts">
    import aboutMeFullImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?enhanced';
    import aboutMeTinyImage from '$lib/assets/aboutMe/aboutMeGraduate.webp?w=20&enhanced';
    
    import { Button } from "$lib/components/ui/button/index.js";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
    import MinusIcon from "@lucide/svelte/icons/minus";

    // Track the loading state
    let loaded = $state(false);
</script>

<div class="flex flex-col md:flex-row place-content-center">
    <div class="flex flex-col w-full pl-4 md:w-9/16 place-content-center gap-6 mt-20 md:mt-40">
        <div class="flex flex-row"><MinusIcon class="text-[#B45F38]" /><p class="font-light text-[#B45F38] text-base"> Computer Science · London, UK</p></div>
        <div><p class="text-black text-6xl md:text-8xl font-bold">I build useful, <b class="text-[#B45F38]">inspiring</b> software people use every day.</p></div>
        <div><p class="text-black text-xl font-normal md:pr-64">Software engineer and CS graduate working across the full stack — from React & C#/Unity front-ends to Python ML systems and containerised deployment. Web-apps, games, and tools that improve everyday life.</p></div>
        <div class="flex flex-row p-1 gap-6 mt-10 items-center">
            <Button href="/aboutMe" class="text-white font-light" size="lg" >More About Me  <ArrowRightIcon /></Button>
            <Button href="/resume" class="text-gray-600 font-light" variant="outline">Resume <ArrowDownIcon /></Button>
        </div>
    </div>
    <div class="flex flex-col w-full md:w-5/16 items-center gap-4 mt-10 md:mt-20">
        <div class="relative border-2 rounded-xl h-[200px] w-[200px] md:w-[300px] md:h-[300px] overflow-hidden m-1">
    
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
        
        <hr class=""/>
        <div class="flex flex-col border-gray-400 border-b-1 w-[300px] p-3">
            <p class="text-black text-sm font-extralight">CURRENTLY</p>
            <p class="text-black text-sm font-heavy">Imperial College, MSc Computing - Software Engineering</p>
        </div>
        <div class="flex flex-col border-gray-400 border-b-1 w-[300px] p-3">
            <p class="text-black text-sm font-extralight">STATUS</p>
            <p class="text-black text-sm font-heavy">Open to 2026 Roles</p>
        </div>
        <div class="flex flex-col border-gray-400 border-b-1 w-[300px] p-3">
            <p class="text-black text-sm font-extralight">FOCUS</p>
            <p class="text-black text-sm font-heavy">Full-Stack · ML · Game Dev</p>
        </div>
        <div class="flex flex-col border-gray-400 border-b-1 w-[300px] p-3">
            <p class="text-black text-sm font-extralight">LANGUAGES</p>
            <p class="text-black text-sm font-heavy">English · Danish · Spanish</p>
        </div>
    </div>
</div>
<div class="w-full md:w-7/8 h-3 border-b-1 border-gray-500 self-center mt-15"></div>