<script>
    import * as Card from "$lib/components/ui/card";
    import { Badge } from "$lib/components/ui/badge";
    import * as ToggleGroup from "$lib/components/ui/toggle-group";

    export let cardList;
    export let cardListName;
  
</script>

<h1 class="text-2xl">{cardListName}</h1>
<div class="place-self-start pl-6">
    <ToggleGroup.Root size="sm" type="multiple" variant="outline">
        <ToggleGroup.Item value="gameDev">Game Dev</ToggleGroup.Item>
        <ToggleGroup.Item value="softwareDev">Software Dev</ToggleGroup.Item>
        <ToggleGroup.Item value="machineLearn">ML</ToggleGroup.Item>
        <ToggleGroup.Item value="qualityAssur">QA</ToggleGroup.Item>
        </ToggleGroup.Root>
</div>
{#each cardList as project} 
    <Card.Root class="rounded-sm">
        <div class="flex flex-row">
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
                
                <Card.Footer class="p-2 pl-0">
                    {#each project.tags as tag}
                        <Badge variant="outline">{tag}</Badge>
                    {/each}
                </Card.Footer>
            </div>
        </div>
    </Card.Root>
{/each}