import { experience, projects } from "$lib/data.js";

export function load() {

    return {
        projects: projects,
        experience: experience
    };
}