<script lang="ts">
import Socials from "../socials.svelte";
import Button from "$lib/components/ui/button/button.svelte";
import { onNavigate } from "$app/navigation";
import { aboutMe } from "$lib/data.js";

const gradPhotoUrl: string = aboutMe.media;




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

<div class="flex flex-col sm:flex-row w-screen h-screen sm:space-y-0">
    <!-- Socials -->
    <div class="flex flex-row h-fit space-x-3 sm:space-x-0 sm:flex-col sm:h-full ml-6">
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
     <div class="flex flex-col w-full h-full items-center pt-32 sm:pt-4 p-4 space-y-4">
        
        <div class="flex flex-col sm:flex-row w-full h-full space-x-4 space-y-4 items-center justify-center sm:space-y-0">
            <!-- International Background -->
            <div class="flex w-fit h-fit p-4 bg-primary rounded-xl deepInnerShadow">
                <img class="max-h-[350px]" src={gradPhotoUrl} alt="graduateMedia">
            </div>
            <!-- Aspirations -->
            <div class="flex flex-col w-fit sm:max-w-[600px] h-fit sm:max-h-[382px] p-4 bg-primary rounded-xl deepInnerShadow space-y-3">
                <h1 class="text-lg font-semibold">Hi, I'm Felix!</h1>
                <p class="text-md ml-1 font-light">{aboutMe.origin}</p>
                <p class="text-md ml-1 font-light">{aboutMe.background}</p>
                <p class="text-md ml-1 font-light">{aboutMe.hobbies}</p>

            </div>
        </div>

     </div>
</div>

