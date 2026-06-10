<script lang="ts">
import Socials from "../socials.svelte";
import Button from "$lib/components/ui/button/button.svelte";
import { onNavigate } from '$app/navigation';
import {info} from '$lib/data.js';

let resumeUrl = $derived(info.resumePath);

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

<div class="flex flex-col sm:flex-row w-screen h-screen">
    <!-- About Me Component -->
     <div class="flex flex-col w-full h-full  items-center p-4 space-y-4">
        <div class="w-full h-full rounded-xl bg-primary p-4">
            <embed src={resumeUrl} title="resume" width="100%" height="100%">            
        </div>
     </div>
</div>


