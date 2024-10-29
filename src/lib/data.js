export const info =
{
    name: 'Felix Sylvest Olesen',
    title: 'Computer Science Graduate',
    about: 'More about me',
    resume: 'Resume',
    aboutThisSite: 'This web app was made using Svelte and ShadCN UI and hosted using Vercel.',
    resumePath: '/assets/resume/Felix S Olesen - Resume.pdf'
}

export const aboutMe =
{
    introduction: "Hi, I'm Felix",
    origin: "It all started for me back in 2013 when I learned to drag code blocks around with Scratch. Ever since then, I have had the privilege of working on an open-source education platform, publishing machine learning research and video games, and conducting QA testing for a globally-renowned broadcasting company.",
    background: "My current focus and trade is in making useful and inspiring software experiences that large audiences can enjoy in their everyday lives. It is my pleasure and joy to make web-apps, video games, and tools that improve the quality of life of the people in my community.",
    hobbies: "When I'm not at the computer, I'm usually out on a run, hiking, crocheting a mega-blanket, or traversing the depths of Tartarus in Hades 2.",
    media: '/assets/aboutMe/aboutMeGraduate.webp'
}

export const experience = [
    {
        role: 'Software Developer - ICHK',
        duration: 'Dec 2023 - Feb 2024',
        projectOrProfession: 'Work Experience',
        description: 'Worked for a secondary school in Hong Kong on their open-source education platform "Gibbon". Refactored and re-designed features to adhere to DRY coding principles.',
        tags: ['PHP', 'SQL', 'JQuery', 'Tailwind', 'OOP', 'JavaScript'],
        filterable: 'softwareDev',
        overviewDescription: ['The refactoring work began with editing old code for browser alerts to be changed to calling a new oo-ified alert module for the platform to allow for cleaner code. This gave me a better understanding of the codebase as a whole by sifting through each file and searching for different alert scenarios.', 'From then on I worked on more complex bug-fixing tasks and module development where I first started interacting with students to understand why they wanted certain changes.', 'I developed a new house-points display system for students and faculty to check how their intermural competitions were going.'],
        overviewMedia: ['/assets/gibbon/gibbonDevSite.webp', '/assets/gibbon/ichkMainSite.webp', '/assets/gibbon/ichkSecondaryGibbon.webp'],
        githubLink: 'https://github.com/GibbonEdu/core',
        alternateLink: 'https://gibbonedu.org',
        overviewDuration: 'December 2023 -  February 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'],
        overviewLessons: ['Communicating with the end users enables a developer to implement a detailed and tailored scope for software, creating something that is truly useful for the average user.', 'DRY and clean code is of utmost importance when working with huge object-oriented codebases to allow for the best developer experience possible for your co-workers.']

    },
    {
        role: 'Associate Test Engineer - Sky',
        duration: 'Jun 2021 - Jul 2022',
        projectOrProfession: 'Work Experience',
        description: 'Conducted manual E2E testing on the SkyQ set-top-boxes. Automated my test cases with an in-house Python testing framework. Developed a testing tool for Sky to replace an archaic with a new full-stack web-application.',
        tags: ['Testing', 'Bash', 'Jira', 'Jenkins', 'Python', 'QA', 'VueJS', 'Tailwind', 'Flask'],
        filterable: 'qualityAssurance',
        overviewDescription: ['Manually tested the end-to-end video-on-demand services associated with the all SkyQ platforms (8 different machines). This involved testing end-to-end interactions based on Video-On-Demand functionality and watermarking of specific channels provided by sky.', 'Implemented a brand new full-stack test tool in VueJs, Tailwind CSS, and Flask. This allowed for testers to have a smooth user experience while updating the video-on-demand catalogue on SkyQ boxes.', 'I also approached the test automation team to get involved with automating my own test cases, allowing for more attention towards important bug testing requests. This allowed me to improve my Python skills to an industrial standard with excellent professional feedback.'],
        overviewMedia: ['/assets/sky/skyBeReal.webp', '/assets/sky/skyCentral.webp', '/assets/sky/sky4.webp', '/assets/sky/sky4Interior.webp'],
        githubLink: '',
        alternateLink: 'https://www.sky.com/tv/sky-q',
        overviewDuration: 'June 2021 - July 2022',
        technologies: ['https://raw.githubusercontent.com/odb/official-bash-logo/e44dab9f89aadd410ff04825b2692eab16711211/assets/Logos/Icons/SVG/128x128_white.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg'],
        overviewLessons: ['The importance of testing is paramount to delivering a successful product. It is inevitable that people will make mistakes in such large projects, and QA roles help to mitigate any problems that may happen.', 'When working in such a large company with countless different teams each playing their part, it is a valuable skill to be proactive and manage your time regardless of your surroundings.']


    }
]

export const projects = [
    {
        role: 'Portfolio Website',
        duration: 'Sept - Present 2024',
        projectOrProfession: 'Web Dev Project',
        description: 'Designed and developed the very website you are looking at right now! I first created a mock=up of the website in Figma before implementing it using Svelte, ShadCN UI, and Tailwind CSS.',
        tags: ['JavaScript', 'TypeScript', 'Github', 'Svelte', 'Figma', 'Tailwind', 'Vercel'],
        filterable: 'softDev',
        overviewDescription: ['I created a portfolio website to be able to display my projects and experience in a more engaging way than simply sending over a github repo. I also used this as a chance to learn the Svelte web-framework and TypeScript for the first time.', 'I started by designing a mockup of the different website views in Figma, which I then implemented using the Svelte component-based system as well as Tailwind CSS combine with ShadCN/UI components.', 'Once I filled out the information and designed each layout, I implemented Svelte animations and Tailwind transitions to make the site more interactive. After completing the portfolio, I deployed the app using Vercel for your viewing pleasure!'],
        overviewMedia: ['/assets/portfolioProject/portfolioHomePage.webp', '/assets/portfolioProject/portfolioProjectPage.webp', '/assets/portfolioProject/portfolioFigmaMockup.webp'],
        githubLink: 'https://github.com/felixOlesen/Developer-Portfolio',
        alternateLink: 'https://felixsolesen.vercel.app',
        overviewDuration: 'September - Present 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'],
        overviewLessons: ['Designing a web-app from scratch takes time, and effort towards design and UX that should be respected. The polish that you apply to every detail of the site can be make or break.', "There are a lot of ways to implement the same design in the front-end of a web-app, it is my belief that occam's razor applies here, the simpler you can achieve the same goal, the better."]

    },
    {
        role: 'Aquetect',
        duration: 'Apr - Present 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a 2D top-down isometric tycoon game with Unity and C#. Featuring completely original assets made in Aseprite, and utilising modern design patterns.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP', 'Aseprite'],
        filterable: 'gameDev',
        overviewDescription: ['I developed started this project as a submission to the 2024 Pixel Jam as a solo game developer. Entrants were given seven days to develop a playable demo of a game under two restricitons: it must feature pixel art, and must have water in it in any shape or form.', 'After some brain-storming, I decided to develop a rollercoaster tycoon-like Aquetect builder/manager game with some inspiration from minimotorways in terms its puzzle levels.', 'I used this as an opportunity to try my hand at creating my own art for each of the isometric blocks and placeable objects/buildings within the game.'],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'April - Present 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['I learned how crucial it is to manage your time wisely under such strict time conditions. To make a project in such a short time usually means that keeping the game loop and concept simple is a good way to go.', 'Making your own art is rewarding but with a high time-cost, it is important to develop the core functionality before you decide to adorn it with cool art.']

    },
    {
        role: 'QUAD-RE',
        duration: 'Mar - Present 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a Endless runner game with Unity and C# inspired by Geometry Dash and Super Hexagon.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP'],
        filterable: 'gameDev',
        overviewDescription: ['QUAD-RE began as a side project to test out using different design patterns used in video games to improve the developer experience. I was inspired by the endless runner games I would always play as a kid (Super Hexagon, Temple Run, Doodle Jump, Iron Pants) which led me to want design my own endless runner with a focus on shifting perspectives and camera angles to disorient the player and up the difficulty.', 'With this project, I wanted to learn to properly implement design patterns toa make debugging and the complexity of the codebase a lot simpler. I decided on using a classic state machine for the main playable aquare, the singleton pattern for in-game objects, and the strategy pattern for generating traversible segments of the game.'],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'December 2023 -  February 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['Implementing design patterns allows for a structured and simpler way of designing increasingly complex software systems. It gives you an understanding of how the software should work at a more palatable higher level of abstraction.']

    },
    {
        role: 'Bugs TDF',
        duration: 'Dec 2023 - Feb 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a sci-fi tower defence game with Unity and C# with inspiration from the Bloons Tower Defence series. Fully published on itch.io for multiple platforms.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP'],
        filterable: 'gameDev',
        overviewDescription: ['Bugs TDF was my first attempt to take a game idea and build it up from scratch all the way until publishing. I did this to get e better understanding of how to piece the different aspects of game together in a more seamless way, with a satisfying and enjoyable game at the end!', 'I utilised some asset packs for the art and music so that I could focus on designing a clean gameplay loop with a variety of ways to complete each respective level.', 'I was able to create several levels with different terrains and layouts to give some variety to the gameplay, along with increasing difficulties as you progressed through the levels. I implemented a scoring and star system to incentivise the players to replay different levels in case they let enemies get through.'],
        overviewMedia: [],
        githubLink: 'https://github.com/felixOlesen/BugsTDF',
        alternateLink: 'https://atomicblitz.itch.io/bugs-tdf',
        overviewDuration: 'December 2023 -  February 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['Planning and design choices made early on in the project can streamline the development process by tenfold if well thought out. Exploring each individual task you need to complete regarding the code, art, sound, and design in a hierarchical manner on a piece of paper helps to maintain a specific scope and keep you on track.', 'Implementing the gameplay loop with simple blocks and shapes can save a lot of hassle in spotting mistakes or missing information from your initial design.']

    },
    {
        role: 'AI Game Tester + Level Generator',
        duration: 'Sept 2022 - Jun 2023',
        projectOrProfession: 'University Dissertation',
        description: 'Developed a game-testing AI and level-generating AI that train in unison and adversarially to each other.',
        tags: ['ML', 'Deep RL', 'Unity', 'Unity ML Agents', 'C#', 'Python', 'Adversarial RL'],
        filterable: 'machineLearning',
        overviewDescription: ['I came up with the idea for this dissertation after finding a research paper made by SEED, the R&D company for Electronic Arts, which acted as a showcase for how AI could improve the game development process in the future. These two AI agents were dubbed the "ARLPCG"', 'I was inspired to A: implement this process using a laptop and any further descriptions I could find in their publicatio, and B: try and improve on their design by making it more accessible to indie game developers with only a laptop or PC to work with.', 'After reading countless papers, creating the simple 3D platforming game to train the models on, and implementing the base ARLPCG, I decided on adding Imitation Learning to the training process. This entails having the AI start training with a metaphorical guidebook of human gameplay to learn from rather than just making random decisions and losing valuable time because of it.'],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September 2022 - June 2023',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Skin Cancer Classifier',
        duration: 'Jan - July 2023',
        projectOrProfession: 'University Project',
        description: '',
        tags: ['Python', 'Pytorch', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'January -  July 2023',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Optimisation Algorithm Visualizer',
        duration: 'Sept 2022 - Jun 2023',
        projectOrProfession: 'Software Project',
        description: '',
        tags: ['Python', 'Optimisation Algorithms', 'PSO', 'Genetic Algorithms'],
        filterable: 'machineLearning',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September 2022 - June 2023',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Genetically Modified Wold Optimser',
        duration: 'Sept - Dec 2022',
        projectOrProfession: 'Published Research',
        description: '',
        tags: ['Python', 'Optimisation Algorithms', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September -  December 2022',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Video Game Sale Data Analytics',
        duration: 'Sept - Dec 2022',
        projectOrProfession: 'University Project',
        description: '',
        tags: ['R', 'Data Analytics', 'Clustering', 'Web-Scraping'],
        filterable: 'machineLearning',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September -  December 2022',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Spotify Run Planner',
        duration: 'Jan - Jun 2021',
        projectOrProfession: 'University Project',
        description: '',
        tags: ['Ruby', 'RubyOnRails', 'Agile', 'Documentation', 'Project Management'],
        filterable: 'softDev',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'January - June 2021',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Game Discussion Forum',
        duration: 'Sept - Dec 2020',
        projectOrProfession: 'University Project',
        description: '',
        tags: ['Ruby', 'RubyOnRails', 'BootStrap', 'Testing', 'API Interaction'],
        filterable: 'softDev',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September - December 2020',
        technologies: [],
        overviewLessons: ['']

    },
    {
        role: 'Butterfly Image Classifier',
        duration: 'Sept - Dec 2020',
        projectOrProfession: 'Kaggle Competition',
        description: '',
        tags: ['Python', 'TensorFlow', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: [],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September - December 2020',
        technologies: [],
        overviewLessons: ['']

    },

]