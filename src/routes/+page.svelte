<script lang="ts">
    import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
    import * as Avatar from "$lib/components/ui/avatar";
    import image from '$lib/assets/profilePicture.png';
    import { info } from '$lib/data.js';
    import { Button } from "$lib/components/ui/button";
    import Projects from "./projects.svelte";
</script>
<div class="flex flex-row">
    <div class="flex flex-row w-1/3 items-center space-x-4 border p-4">
        <div>
            <Avatar.Root class="h-20 w-20">
                <Avatar.Image src={image} alt="FO" />
                <Avatar.Fallback>FO</Avatar.Fallback>
            </Avatar.Root>
        </div>
        <div class="flex flex-col">
            <h1 class="scroll-m-20 text-2xl tracking-tight lg:text-3xl">
                Felix Sylvest Olesen
            </h1>
            <h2 class="scroll-m-20 text-l tracking-tight">
                {info.title}
            </h2>
        </div>
    </div>
    <div class="border w-2/3 flex flex-row justify-end items-center pr-8 space-x-20">
        <p>About</p>
        <p>Contact</p>
        <p>Resume</p>
    </div>
</div>
<div class="flex min-h-screen w-2/5 place-content-center flex-col border">
    <ScrollArea class=" w-full rounded-md p-4 border">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup, even
        in the royal toilet. The king was furious, but he couldn't seem to stop
        Jokester. And then, one day, the people of the kingdom discovered that the
        jokes left by Jokester were so funny that they couldn't help but laugh. And
        once they started laughing, they couldn't stop.
    </ScrollArea>
    <Button variant="outline">Button</Button>

</div>

<Projects>

</Projects>
