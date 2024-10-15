<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import CardContent from "$lib/components/ui/card/card-content.svelte";

    const dispatch = createEventDispatcher();

    export let cardList;
    function handleHover(project:any) {
        console.log("I'm working!");
        dispatch('cardHover', {
            project: project
        });
    }
  
</script>

{#each cardList as project}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <a on:click={() => handleClick(project.role)} on:keypress={() => handleClick(project.role)} href="/"> -->
<Card.Root class="min-w-96 max-h-48 rounded-xl hover:bg-primary border-0 shadow-inner">
    <div class="scroller" on:mouseenter={() => handleHover(project)}>
        <Card.Header class="">
            <Card.Title><h1>{project.role}</h1></Card.Title>
            <Card.Description><p class="mx-3">{project.description}</p></Card.Description>
        </Card.Header>
        <Card.Content class=" p-1">
            <!-- <p>{project.description}</p> -->
        </Card.Content>
        <Card.Footer class="flex flex-row flex-wrap space-x-1 space-y-1 items-center ">
            {#each project.tags as tag}
                <Badge variant="outline" class="justify-center mt-1 bg-primary">{tag}</Badge>
            {/each}
        </Card.Footer>
    </div>
</Card.Root>
<!-- </a> -->
{/each}

<style>
div.scroller {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  scrollbar-color: rgba(0,0,0,0) rgba(0,0,0,0);
} 
</style>