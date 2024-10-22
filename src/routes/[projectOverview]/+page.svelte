<script lang="ts">
    import Socials from "../socials.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import { onNavigate } from '$app/navigation';


    export let data;
    const overview = data.projectOverview;

    onNavigate((navigation) => {
	if (!document.startViewTransition) return;

	return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
		    });
	    });
    });

    let hoverClass:string = "transition ease-in-out hover:scale-105 fill-border hover:fill-white";

</script>

<div class="flex flex-row w-screen h-screen">
    
    <div class="flex flex-col h-full ml-6">
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
    <div class="flex flex-row w-full">
        <!-- Project Text -->
        <div class="flex flex-col w-1/2 space-y-6 m-4">
            <div class="flex flex-col rounded-xl bg-primary deepInnerShadow p-3">
                <!-- Header -->
                <div class="flex flex-row w-full">
                    <div class="flex flex-col w-1/2 p-1">
                        <div>
                            <h1 class="text-lg font-semibold">{overview.role}</h1>
                        </div>
                        <div>
                            <p class="text-sm font-light">{overview.overviewDuration}</p>
                        </div>
                    </div>
                    <div class="flex flex-row w-1/2 place-content-end pr-1 space-x-2">
                        <!-- Github Link -->
                        {#if overview.githubLink !== ''}
                            <a href={overview.githubLink}>
                                <svg class={hoverClass} width="35px" height="35px" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"  d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                                </svg>
                            </a>
                        {/if}

                        <!-- Alternate Link -->
                        {#if overview.alternateLink !== ''}
                            <a href={overview.alternateLink}>
                                <svg class={hoverClass} width="35px" height="35px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C12.4142 2.75 12.75 2.41421 12.75 2C12.75 1.58579 12.4142 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12Z"></path> 
                                        <path d="M12.4697 10.4697C12.1768 10.7626 12.1768 11.2374 12.4697 11.5303C12.7626 11.8232 13.2374 11.8232 13.5303 11.5303L21.25 3.81066V7.34375C21.25 7.75796 21.5858 8.09375 22 8.09375C22.4142 8.09375 22.75 7.75796 22.75 7.34375V2C22.75 1.58579 22.4142 1.25 22 1.25H16.6562C16.242 1.25 15.9062 1.58579 15.9062 2C15.9062 2.41421 16.242 2.75 16.6562 2.75H20.1893L12.4697 10.4697Z"></path> 
                                    </g>
                                </svg>
                            </a>
                        {/if}
                        
                    </div>
                </div>
                <!-- Technologies Used -->
                <div class="flex flex-col space-y-2 p-2">
                    <div class=""><h2 class="text-md font-extralight text-white/70">Technologies</h2></div>
                    <div class="flex flex=row flex-wrap space-x-3 p-3">
                        {#each overview.technologies as technology }
                            <img class="w-[60px] h-[60px]" src={technology} alt='tech'/>
                        {/each}
                    </div>
                </div>
            </div>
    
            <div class="flex flex-col space-y-4 rounded-xl bg-primary p-4 deepInnerShadow">
                <h1 class="text-lg font-semibold">What did I get up to?</h1>
                {#each overview.overviewDescription as paragraph }
                    <p class="text-sm">{paragraph}</p>
                {/each}
                
            </div>
        </div>
    
        <!-- Project Media -->
        <div class="flex flex-col w-1/2 space-y-6 p-4 scroller overflow-visible">
            {#each overview.overviewMedia as media, i}
            <div class="transition ease-in-out hover:scale-105 bg-primary rounded-xl p-3 deepInnerShadow">
                <img src={media} alt="overviewMedia"/>
            </div>
            {/each}

        </div>
    </div>
</div>

