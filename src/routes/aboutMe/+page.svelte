<script lang="ts">
import Socials from "../socials.svelte";
import Button from "$lib/components/ui/button/button.svelte";
import { onNavigate } from '$app/navigation';
import * as Carousel from "$lib/components/ui/carousel/index.js";


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

<div class="flex flex-row w-screen h-screen">
    <!-- Socials -->
    <div class="flex flex-col h-full ml-6 ">
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
    <!-- About Me Component -->
     <div class="flex flex-col w-full h-full  items-center p-4 space-y-4">
        <div class=""><h1 class="text-2xl text-white">About me!</h1></div>
        <!-- Images Carousel -->
        <div class="flex w-full rounded-xl bg-primary  justify-center deepInnerShadow p-4">
            <Carousel.Root opts={{ align: "center", loop: true, }} class="w-full max-w-6xl">
                <Carousel.Content>
                    {#each Array(10) as _, i (i)}
                    <Carousel.Item class="md:basis-1/2 lg:basis-1/3">
                        <div class="flex p-1  justify-center">
                            <span class="text-3xl font-semibold">{i + 1}</span>
                        </div>
                    </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous />
                <Carousel.Next />
            </Carousel.Root>
        </div>
        <div class="flex flex-row w-full h-full space-x-4 ">
            <!-- International Background -->
            <div class="flex flex-col w-2/5 h-full space-y-4 ">
                <div class="flex bg-primary rounded-xl h-1/2 w-full deepInnerShadow"></div>
                <div class="flex bg-primary rounded-xl h-1/2 w-full deepInnerShadow"></div>
            </div>
            <!-- Aspirations -->
            <div class="flex w-3/5 h-full ">
                <div class="bg-primary rounded-xl h-full w-full deepInnerShadow"></div>
            </div>
        </div>
     </div>
</div>

