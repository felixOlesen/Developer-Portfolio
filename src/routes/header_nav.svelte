<script>
    import { Button } from "$lib/components/ui/button/index.js";

</script>

<div class="flex flex-col md:flex-row place-content-center border-gray-300 md:border-b-1 bg-[#F6F2EB] items-center">
    <div class="flex flex-row border-gray-300 border-b-1 md:border-0 w-full md:w-3/8 items-center p-2 gap-2">
        <div class="px-3 py-1 rounded-lg bg-black"><p class="text-xl">F</p></div>
        <p class="text-lg text-black">Felix Sylvest Olesen</p>
        <p class="text-sm text-black">- Software Engineer</p>
    </div>
    <div class="flex overflow-x-scroll w-full h-full place-content-start md:place-content-end border-gray-300 border-b-1 md:border-0 md:w-3/8 md:h-full items-center">
        <Button class="text-black" size="sm" variant="ghost">Work</Button>
        <Button class="text-black" size="sm" variant="ghost">About</Button>
        <Button class="text-black" size="sm" variant="ghost">Resume</Button>
        <span class="inline-block align-top text-black text-xl pb-1">|</span>
        <Button class="text-black" size="sm" variant="ghost">GitHub</Button>
        <Button class="text-black" size="sm" variant="ghost">LinkedIn</Button>
        <Button class="text-black" size="sm" variant="ghost">itch.io</Button>
    </div>
</div>