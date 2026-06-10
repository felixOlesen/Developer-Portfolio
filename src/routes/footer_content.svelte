<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import MinusIcon from "@lucide/svelte/icons/minus";
    import MoveUpRight from "@lucide/svelte/icons/move-up-right";

</script>

<div class="flex flex-col border-t-1 border-gray-400 place-content-center bg-[#F6F2EB] gap-10 p-10">
    <div class="flex flex-row items-center">
        <MinusIcon class="text-black"/>
        <p class="text-black font-extralight">GET IN TOUCH</p>
    </div>

    <div class="flex flex-col lg:flex-row lg:items-end">
        <div class="w-1/4">
            <p class="text-black text-6xl font-bold">Let's Build Something</p>
        </div>
        <div class="flex flex-row w-3/4 items-end pl-0 lg:pl-14">
            <MinusIcon class="text-[#B45F38] size-16 pt-4"/>
            <a href="mailto:felixolesen@gmail.com" class="text-[#B45F38] text-6xl">say hello</a>
            <MoveUpRight class="text-[#B45F38] size-24"/>
        </div>
    </div>
    
    <div class="flex flex-col md:flex-row md:place-content-between gap-8 overflow-x-scroll md:overflow-x-hidden">
        <div class="flex flex-row">
            <Button class="bg-[#F6F2EB] text-gray-600 font-light" size="sm" variant="ghost">GitHub</Button>
            <Button class="bg-[#F6F2EB] text-gray-600 font-light" size="sm" variant="ghost">LinkedIn</Button>
            <Button class="bg-[#F6F2EB] text-gray-600 font-light" size="sm" variant="ghost">itch.io</Button>
            <Button class="bg-[#F6F2EB] text-gray-600 font-light" size="sm" variant="ghost">Goodreads</Button>
            <Button class="bg-[#F6F2EB] text-gray-600 font-light" size="sm" variant="ghost">Ko-Fi</Button>
        </div>
        <div class="flex flex-row">
            <p class="text-gray-600 text-sm font-extralight">Felix Sylvest Olesen — © 2026 <br/> London, UK · felixolesen@gmail.com</p>
        </div>
    </div>
</div>