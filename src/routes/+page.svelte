<script lang="ts">
    import { ScrollArea, Scrollbar } from "$lib/components/ui/scroll-area/index.js";
    import * as Avatar from "$lib/components/ui/avatar";
    import image from '$lib/assets/profilePicture.png';
    import { info } from '$lib/data.js';
    import Projects from "./projects.svelte";
    import * as Menubar from "$lib/components/ui/menubar";
</script>



<div class="flex flex-row">
    <div class="flex flex-col w-1/2 ">
        <div class="flex pl-6 ">
            <Menubar.Root>
                <Menubar.Menu>
                    <Menubar.Trigger>About</Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger>Contact</Menubar.Trigger>
                </Menubar.Menu>
                <Menubar.Menu>
                    <Menubar.Trigger>Resume</Menubar.Trigger>
                </Menubar.Menu>
            </Menubar.Root>
        </div>
        <div class="flex flex-row items-center justify-center space-x-4 pt-10 pb-4 ">
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
        <div class="pl-32">
            <p>{info.about}</p>
        </div>
        <div class="b">

        </div>
    </div>
    <div class="flex min-h-screen w-1/2 flex-col pt-0 pr-12 justify-center">
        <div class="overflow-scroll hideScroll w-3/4 h-screen p-2">
            <Projects></Projects>
        </div>
        
        <!-- <ScrollArea id="scrollingBlock" class="flex hideScroll justify-center w-3/4 h-screen rounded-sm p-2" orientation="vertical">
            <Projects></Projects>
        </ScrollArea> -->
    </div>
</div>


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



