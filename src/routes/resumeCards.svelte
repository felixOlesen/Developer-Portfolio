<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";

    const dispatch = createEventDispatcher();

    export let cardList;
    export let cardListName;
    let fart:string;
    function handleHover(project:any) {
        dispatch('cardHover', {
            project: project
        });
    }
  
</script>

<h1 class="text-2xl">{cardListName}</h1>
<!-- <div class="place-self-start pl-6">
    <ToggleGroup.Root size="sm" type="multiple" variant="outline">
        <ToggleGroup.Item value="gameDev">Game Dev</ToggleGroup.Item>
        <ToggleGroup.Item value="softwareDev">Software Dev</ToggleGroup.Item>
        <ToggleGroup.Item value="machineLearn">ML</ToggleGroup.Item>
        <ToggleGroup.Item value="qualityAssur">QA</ToggleGroup.Item>
        </ToggleGroup.Root>
</div> -->
{#each cardList as project}
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- <a on:click={() => handleClick(project.role)} on:keypress={() => handleClick(project.role)} href="/"> -->
    <Card.Root class="rounded-sm hover:bg-slate-200 border-0">
        <div class="flex flex-row" on:mouseenter={() => handleHover(project)}>
            <div class="flex pt-2 pl-2 w-2/5">
                <h1>
                    {project.duration}
                </h1>
            </div>
            <div class="w-full">
                <Card.Header class="p-2 pl-0">
                    <Card.Title>{project.role}</Card.Title>
                    <Card.Description>{project.description}</Card.Description>
                </Card.Header>
                
                <Card.Footer class="p-1 pl-0 w-full space-x-1 space-y-1 flex flex-row flex-wrap">
                    {#each project.tags as tag}
                        <Badge variant="outline" class="flex justify-center">{tag}</Badge>
                    {/each}
                </Card.Footer>
            </div>
        </div>
    </Card.Root>
<!-- </a> -->
{/each}