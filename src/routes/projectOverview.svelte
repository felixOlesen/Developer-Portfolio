<script lang='ts'>
export let project;
</script>

<div class="flex flex-col p-3 space-y-2 bg-slate-100 rounded-md">
    <p class="text-2xl">{project.role}</p>
    <!-- {#if project.overviewMedia.length > 0}
        <img src={project.overviewMedia[0]} alt="overviewMedia"/>
    {/if} -->
    {#if project.overviewDescription.length > 0}
        <div class="flex flex-col space-y-2">
            {#each project.overviewDescription as sentence}
            <p>{sentence}</p>            
            {/each}
        </div>
    {/if}
    
</div>