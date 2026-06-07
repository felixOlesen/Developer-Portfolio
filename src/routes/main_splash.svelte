<script>
    import { Button } from "$lib/components/ui/button/index.js";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import ArrowRightIcon from "@lucide/svelte/icons/arrow-right";
    import MinusIcon from "@lucide/svelte/icons/minus";
</script>

<div class="flex flex-col md:flex-row place-content-center">
    <div class="flex flex-col w-full pl-4 md:w-9/16 place-content-end gap-6 mt-20 md:mt-40">
        <div class="flex flex-row"><MinusIcon class="text-black" /><p class="font-light text-black text-base"> Computer Science · London, UK</p></div>
        <div><p class="text-black text-6xl md:text-8xl font-bold">I build useful, inspiring software people use every day.</p></div>
        <div><p class="text-black text-xl font-normal md:pr-64">Software engineer and CS graduate working across the full stack — from React & C#/Unity front-ends to Python ML systems and containerised deployment. Web-apps, games, and tools that improve everyday life.</p></div>
        <div class="flex flex-row p-1 gap-6 mt-10 items-center">
            <Button class="text-white font-light" size="lg" >More About Me  <ArrowRightIcon /></Button>
            <Button class="text-gray-600 font-light" variant="outline">Resume <ArrowDownIcon /></Button>
        </div>
    </div>
    <div class="flex flex-col w-full md:w-5/16 items-center gap-4 mt-10 md:mt-20">
        <div class="border-2 rounded-xl h-[200px] w-[200px] md:w-[300px] md:h-[300px] overflow-hidden m-1">Image Here</div>
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
            <p class="text-black text-sm font-heavy">English · Danish · Spanishs</p>
        </div>
    </div>
</div>

<div class="flex flex-row place-content-center mt-10">
    <div class="flex flex-row w-full md:w-7/8 border-t-1 border-b-1 border-gray-500 py-6 place-content-center overflow-hidden gap-4">
        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>
        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>
        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>

        <p class="text-black">Sliding Skills</p>
        <p class="text-black">·</p>
        <p class="text-black">Sliding Skills</p>
    </div>
</div>