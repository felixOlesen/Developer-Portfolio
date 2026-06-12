/// <reference types="@sveltejs/enhanced-img" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare module '*&enhanced' {
    const image: any;
    export default image;
}

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};