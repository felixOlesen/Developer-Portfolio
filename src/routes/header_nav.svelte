<script>
    import { Button } from "$lib/components/ui/button/index.js";
</script>

<div class="flex flex-col md:flex-row place-content-center border-gray-400 md:border-b-1 bg-[#F6F2EB] items-center">
    <div class="flex flex-row border-gray-400 border-b-1 md:border-0 w-full md:w-7/16 items-center p-2 gap-2">
        <div class="px-3 py-1 rounded-lg bg-black"><p class="text-xl">F</p></div>
        <p class="text-lg text-gray-600">Felix Sylvest Olesen</p>
        <p class="text-sm text-gray-600 font-extralight">- Software Engineer</p>
    </div>
    <div class="flex w-full h-full place-content-start md:place-content-end border-gray-400 border-b-1 md:border-0 md:w-7/16 md:h-full items-center overflow-x-scroll md:overflow-x-hidden">
        <Button href="/" class="text-gray-600 font-light" size="sm" variant="ghost">Work</Button>
        <Button href="/aboutMe" class="text-gray-600 font-light" size="sm" variant="ghost">About</Button>
        <Button href="/resume" class="text-gray-600 font-light" size="sm" variant="ghost">Resume</Button>
        <span class="inline-block align-top font-thin text-gray-400 text-xl pb-1">|</span>
        <Button href="https://github.com/felixOlesen" class="text-gray-600 font-light" size="sm" variant="ghost">GitHub</Button>
        <Button href="https://www.linkedin.com/in/felix-sylvest-olesen/" class="text-gray-600 font-light" size="sm" variant="ghost">LinkedIn</Button>
        <Button href="https://atomicblitz.itch.io" class="text-gray-600 font-light" size="sm" variant="ghost">itch.io</Button>
    </div>
</div>
