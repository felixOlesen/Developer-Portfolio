<script lang="ts">
    import MainSplash from './main_splash.svelte';
    import ProjectsWork from './projects_work.svelte';
    let { data } = $props();

</script>
<div class="flex flex-col bg-[#F6F2EB] gap-3">
    <!-- main -->
    <MainSplash />
    <ProjectsWork resumeData={data}/>
</div>
