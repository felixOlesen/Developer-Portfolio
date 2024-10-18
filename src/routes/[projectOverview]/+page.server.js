import { experience, projects } from "$lib/data.js";
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const projectsAndExperience = experience.concat(projects);
    const projectOverview = projectsAndExperience.find((projectOverview) => projectOverview.role === params.projectOverview)

    if (!projectOverview) throw error(404);

    return {
        projectOverview
    };
}