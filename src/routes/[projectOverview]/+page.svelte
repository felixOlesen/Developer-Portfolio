<script lang="ts">
    import Socials from "../socials.svelte";
    export let data;
    const overview = data.projectOverview;
</script>

<div class="flex flex-row w-screen h-screen">
    <div class="flex flex-col h-full ml-6"><Socials></Socials></div>
    <!-- Project Text -->
    <div class="flex flex-col w-1/2 space-y-6 m-3 justify-center">
        <div class="flex flex-col rounded-xl bg-primary">
            <!-- Header -->
            <div class="flex flex-row w-full p-2">
                <div class="flex flex-col w-1/2">
                    <div>
                        <h1 class="text-lg font-semibold">{overview.role}</h1>
                    </div>
                    <div>
                        <p class="text-sm font-light">{overview.overviewDuration}</p>
                    </div>
                </div>
                <div class="flex flex-row w-1/2 place-content-end">
                    <!-- Github Link -->
                    <!-- Alternate Link -->
                </div>
            </div>
            <!-- Technologies Used -->
            <div class="flex flex-col space-y-2 p-2">
                <div class=""><h2 class="text-md">Technologies</h2></div>

            </div>
        </div>

        <div class="rounded-xl bg-primary p-2">
            {#each overview.overviewDescription as paragraph }
                <p class="text-sm">{paragraph}</p>
            {/each}
            
        </div>
    </div>

    <!-- Project Media -->
    <div class="flex flex-col w-1/2 space-y-6 m-3 justify-center">
        <div class="bg-primary rounded-xl overflow-hidden p-3"><img src={overview.overviewMedia[0]} alt="overviewMedia"/></div>
        <div></div>
    </div>
</div>