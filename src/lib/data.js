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
        overviewLessons: ['Communicating with the end users enables a developer to implement a detailed and tailored scope for software, creating something that is truly useful for the average user.', 'DRY and clean code is of utmost importance when working with huge object-oriented codebases to allow for the best developer experience possible for your co-workers.'],
        youtubeVideo: ''

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
        overviewLessons: ['The importance of testing is paramount to delivering a successful product. It is inevitable that people will make mistakes in such large projects, and QA roles help to mitigate any problems that may happen.', 'When working in such a large company with countless different teams each playing their part, it is a valuable skill to be proactive and manage your time regardless of your surroundings.'],
        youtubeVideo: ''


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
        overviewLessons: ['Designing a web-app from scratch takes time, and effort towards design and UX that should be respected. The polish that you apply to every detail of the site can be make or break.', "There are a lot of ways to implement the same design in the front-end of a web-app, it is my belief that occam's razor applies here, the simpler you can achieve the same goal, the better."],
        youtubeVideo: ''

    },
    {
        role: 'Aquetect',
        duration: 'Apr - Present 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a 2D top-down isometric tycoon game with Unity and C#. Featuring completely original assets made in Aseprite, and utilising modern design patterns.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP', 'Aseprite'],
        filterable: 'gameDev',
        overviewDescription: ['I developed started this project as a submission to the 2024 Pixel Jam as a solo game developer. Entrants were given seven days to develop a playable demo of a game under two restricitons: it must feature pixel art, and must have water in it in any shape or form.', 'After some brain-storming, I decided to develop a rollercoaster tycoon-like Aquetect builder/manager game with some inspiration from minimotorways in terms its puzzle levels.', 'I used this as an opportunity to try my hand at creating my own art for each of the isometric blocks and placeable objects/buildings within the game.'],
        overviewMedia: ['/assets/aquetect/aquetect1.webp', '/assets/aquetect/aquetect2.webp', '/assets/aquetect/aquetect3.webp'],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'April - Present 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['I learned how crucial it is to manage your time wisely under such strict time conditions. To make a project in such a short time usually means that keeping the game loop and concept simple is a good way to go.', 'Making your own art is rewarding but with a high time-cost, it is important to develop the core functionality before you decide to adorn it with cool art.'],
        youtubeVideo: ''

    },
    {
        role: 'QUAD-RE',
        duration: 'Mar - Present 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a Endless runner game with Unity and C# inspired by Geometry Dash and Super Hexagon.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP'],
        filterable: 'gameDev',
        overviewDescription: ['QUAD-RE began as a side project to test out using different design patterns used in video games to improve the developer experience. I was inspired by the endless runner games I would always play as a kid (Super Hexagon, Temple Run, Doodle Jump, Iron Pants) which led me to want design my own endless runner with a focus on shifting perspectives and camera angles to disorient the player and up the difficulty.', 'With this project, I wanted to learn to properly implement design patterns toa make debugging and the complexity of the codebase a lot simpler. I decided on using a classic state machine for the main playable aquare, the singleton pattern for in-game objects, and the strategy pattern for generating traversible segments of the game.'],
        overviewMedia: ['/assets/quadRe/quadre1.webp', '/assets/quadRe/quadre2.webp', '/assets/quadRe/quadre3.webp'],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'December 2023 -  February 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['Implementing design patterns allows for a structured and simpler way of designing increasingly complex software systems. It gives you an understanding of how the software should work at a more palatable higher level of abstraction.'],
        youtubeVideo: ''

    },
    {
        role: 'Bugs TDF',
        duration: 'Dec 2023 - Feb 2024',
        projectOrProfession: 'Game Dev Project',
        description: 'Designed, developed, and published a sci-fi tower defence game with Unity and C# with inspiration from the Bloons Tower Defence series. Fully published on itch.io for multiple platforms.',
        tags: ['C#', 'Unity', 'Github', 'Game Design', 'OOP'],
        filterable: 'gameDev',
        overviewDescription: ['Bugs TDF was my first attempt to take a game idea and build it up from scratch all the way until publishing. I did this to get e better understanding of how to piece the different aspects of game together in a more seamless way, with a satisfying and enjoyable game at the end!', 'I utilised some asset packs for the art and music so that I could focus on designing a clean gameplay loop with a variety of ways to complete each respective level.', 'I was able to create several levels with different terrains and layouts to give some variety to the gameplay, along with increasing difficulties as you progressed through the levels. I implemented a scoring and star system to incentivise the players to replay different levels in case they let enemies get through.'],
        overviewMedia: ['/assets/bugsTDF/bugsTDFMainMenu.webp', '/assets/bugsTDF/bugsTDFWelcome.webp', '/assets/bugsTDF/bugsTDFLevel2.webp', '/assets/bugsTDF/bugsTDFLevel3.webp', '/assets/bugsTDF/bugsTDFLevel1GameOver.webp'],
        githubLink: 'https://github.com/felixOlesen/BugsTDF',
        alternateLink: 'https://atomicblitz.itch.io/bugs-tdf',
        overviewDuration: 'December 2023 -  February 2024',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
        overviewLessons: ['Planning and design choices made early on in the project can streamline the development process by tenfold if well thought out. Exploring each individual task you need to complete regarding the code, art, sound, and design in a hierarchical manner on a piece of paper helps to maintain a specific scope and keep you on track.', 'Implementing the gameplay loop with simple blocks and shapes can save a lot of hassle in spotting mistakes or missing information from your initial design.'],
        youtubeVideo: ''

    },
    {
        role: 'AI Game Tester + Level Generator',
        duration: 'Sept 2022 - Jun 2023',
        projectOrProfession: 'University Dissertation',
        description: 'Developed a game-testing AI and level-generating AI that train in unison and adversarially to each other.',
        tags: ['ML', 'Deep RL', 'Unity', 'Unity ML Agents', 'C#', 'Python', 'Adversarial RL'],
        filterable: 'machineLearning',
        overviewDescription: ['I came up with the idea for this dissertation after finding a research paper made by SEED, the R&D company for Electronic Arts, which acted as a showcase for how AI could improve the game development process in the future. These AI agents were dubbed the "ARLPCG"', 'I was inspired to A: implement this process using a basic laptop, and B: try and improve on their design by making it more accessible to indie game developers with only a laptop or PC to work with.', 'After reading countless papers, creating the simple 3D platforming game to train the models on, and implementing the base ARLPCG, I decided on adding Imitation Learning to the training process. This entails having the AI start training with a metaphorical guidebook of human gameplay to learn from rather than just making random decisions and losing valuable time because of it. I dubbed this design the "IL-ARLPCG"', 'After a lot of hyper-parameter tuning and playing around with the reward function, I had found a sweet spot for the new IL-ARLPCG that was able to speed up the training process and maximise reward faster than the original design.'],
        overviewMedia: ['/assets/arlpcg/arlpcg3.webp', '/assets/arlpcg/arlpcg1.webp', '/assets/arlpcg/arlpcg2.webp'],
        githubLink: 'https://github.com/felixOlesen/IL-ARLPCG',
        alternateLink: 'https://www.youtube.com/watch?v=DcBS5_sZu2M',
        overviewDuration: 'September 2022 - June 2023',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'],
        overviewLessons: ['Even with pseudocode and guidelines for implementation and performance, creating a functional model is never easy. Research is an arduous yet rewarding trial and error process that thrives with creative, out-of-the-box decisions.'],
        youtubeVideo: 'https://www.youtube.com/embed/DcBS5_sZu2M?si=MyEdvmZmsVzmI8Y6'

    },
    {
        role: 'Skin Cancer Classifier',
        duration: 'Jan - July 2023',
        projectOrProfession: 'University Project',
        description: 'Developed a top-down broad search for optimal ML methods of classifying the HAM10000 skin cancer dataset. Worked in team to approach this task from supervised and unsupervised ML points of view.',
        tags: ['Python', 'Pytorch', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: ['I worked together in a team with my coursemates to exploratively research how different types of ML methods worked on multi-class Skin Cancer image classification. We decided as a group to approach the classification task in a multi-pronged fashion. We split up in to sub-groups to focus on Supervised ML, Unsupervised ML, and Synthetic Data Generation. My task was to explore the realm of unsupervised image classification.', 'I dove into the research to try and find past examples of efficient unsupervised image classification and the architecture that stood out to me was SimCLR by Google Research. SimCLR as an unsupervised approach has two stages: training a CNN on the unlabeled data to create latent output data, and then for an MLP to train on the latent output data to see if it can learn any specific patterns.', 'After optimising the hyper-parameters for both models, I then applied the same process to the dataset which had been supplemented with synthetic data produced by another sub-group in my team, this high-quality data-balancing allowed for a major 10% increase in test prediction accuracy.'],
        overviewMedia: ['/assets/deepLearning/deepLearning1.webp', '/assets/deepLearning/deepLearning2.webp'],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'January -  July 2023',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'],
        overviewLessons: ['"Garbage in, garbage out" is rule to live by when undertaking ML tasks. Thankfully methods such as data transformation, synthetic data, outlier removal, any many others can vastly increase the generalisability of the models you wish to train if done right'],
        youtubeVideo: ''

    },
    {
        role: 'Optimisation Algorithm Visualizer',
        duration: 'Sept 2022 - Jun 2023',
        projectOrProfession: 'Software Project',
        description: 'A visualizer designed in python for seeing how optimisation algorithms traverse the decision space differently.',
        tags: ['Python', 'Optimisation Algorithms', 'PSO', 'Genetic Algorithms'],
        filterable: 'machineLearning',
        overviewDescription: ['I began this project as a form of hands-on revision for my university computational intelligence course, where I would be able to practice implementing a series of population-based optimisation algorithms.', 'I decided on using python, as the course was doing the same and it is a language I am veyr familiar with. I started off simply implementing each algorithm from pseudo-code and testing them by printing their outputs to the console based on how they solved basic mathematical fitness functions for finding global optima.', 'Afterwards, I searched for a GUI library I could use to give the algorithm some visual aid so I could learn a different abstraction of the decision space and how the algorithms worked differently.'],
        overviewMedia: ['/assets/algoVis/algoVis2.webp', '/assets/algoVis/algoVis1.webp', '/assets/algoVis/algoVis3.webp'],
        githubLink: 'https://github.com/felixOlesen/Algorithm-Visualiser',
        alternateLink: '',
        overviewDuration: 'September 2022 - June 2023',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'],
        overviewLessons: ['I was able to study a more visual version of how the algorithms solved problems without the need for gradient descent, and also learned to implement them in an object-oriented way with interchangable fitness functions and algorithms through the GUI library that I found.'],
        youtubeVideo: ''

    },
    {
        role: 'Genetically Modified Wolf Optimser',
        duration: 'Sept - Dec 2022',
        projectOrProfession: 'Published Research',
        description: 'Research into gradient-descent alternatives for weight and bias optimisation of a convolutional neural network applied to the CIFAR-10 dataset.',
        tags: ['Python', 'Optimisation Algorithms', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: ['This was a group project for university where we were tasked with finding a novel method for optimising the weights and biases of a neural network that did not rely solely on convnetional gradient descent methods and also used population-based algorithms.', 'My group and I came up with a hybrid algorithm which utilised Grey Wolf Optimiser hybridised with Genetic Algorithm during the mutation phase of the lifecycle to explore the decision space. We then combined this explorational approach with teh exploitative approach of Stochastic Gradient Descent to converge on any optima found in the decision space. After a set amount of epochs during the training process, we would iteratively switch in and out the two algorithms to exploit, then explore until it would converge on an optima.', 'Our novel approach to this task helped us achieve the highest grade in the cohort and incentivised us to publish a paper based on this research with the approval of our lecturers.'],
        overviewMedia: ['/assets/gmw/gmw1.webp', '/assets/gmw/gmw2.webp'],
        githubLink: '',
        alternateLink: 'https://arxiv.org/abs/2301.08950',
        overviewDuration: 'September -  December 2022',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-plain-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'],
        overviewLessons: ['The "No Free Lunch" theorem should always be taken into acount when applying optimisation algorithms to different fitness functions. It means that no individual algorithm can be seen as being objectively better than any other for every optimisation task.'],
        youtubeVideo: ''

    },
    {
        role: 'Video Game Sale Data Analytics',
        duration: 'Sept - Dec 2022',
        projectOrProfession: 'University Project',
        description: 'Business analytics project for finding the optimal type of video game to maximiase sales in different continents using R and web-scraping.',
        tags: ['R', 'Data Analytics', 'Clustering', 'Web-Scraping'],
        filterable: 'machineLearning',
        overviewDescription: ['This was a team project for my Business Analytics course in university, where I worked in a group to identify a dataset to analyse for the sake of providing a hypothetical benefit to a hypothetical business which we would then pitch to the lecturer at the end of the term.', 'As a group, we came up the idea for analyzing an extensive video game sales database to try and find the optimal type of game to maximise video game sales in different regions of the world.', 'To approach this task, we split up into groups to, process/clean the data, supplement missing data through web-scraping, remove outliers, and apply a multitude of different supervised and unsupervised algorithms on the dataset.', 'My focus was on outlier removal as well as K-means clustering for an unsupervised approach to see any patterns that could be algorithmically spotted in the data. I used the elbow-method for determining the best amount of centroids to cluster around, which allowed for useful insights into how different video games were more popular in different regions of the world.'],
        overviewMedia: ['/assets/pba/pba1.webp', '/assets/pba/pba2.webp', '/assets/pba/pba3.webp'],
        githubLink: 'https://github.com/felixOlesen/GameSales-BusinessAnalytics',
        alternateLink: '',
        overviewDuration: 'September -  December 2022',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg'],
        overviewLessons: ['There are no hard an fast rules to truly determine the perfect parameters for an algorithm to use when analysing data. It is very useful to create graphical representations of your findings along the way so that you can tune parameters for anything the algorithms have missed.'],
        youtubeVideo: ''

    },
    {
        role: 'Game Discussion Forum',
        duration: 'Sept - Dec 2020',
        projectOrProfession: 'University Project',
        description: 'A web and database coursework project featruing RubyOnRails and SQL in an MVC monolith architecture. I created a discussion forum for video games utlising the GiantBombDB API.',
        tags: ['Ruby', 'Rails', 'BootStrap', 'Testing', 'API Interaction'],
        filterable: 'softDev',
        overviewDescription: ['I decided to implement a discussion forum for video games that would automatically create forum pages based on user searches on the site itself by querying the GiantBomb video game API. This would allow users to automatically start up a forum that other suers could access to start talking about their favourite games.', 'As a part of the assigned taks, I has to feature API interactions, a mailer implementation, a well-styled set of views to navigate through, as well as thorough intergtation and unit testing. All of this also was required to be implemented using the RubyOnRails web-framework', 'Once all of these features had been developed, the site was then hosted on Heroku for final examination from the lecturer.'],
        overviewMedia: [],
        githubLink: 'https://github.com/felixOlesen/GameRadar',
        alternateLink: '',
        overviewDuration: 'September - December 2020',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-original-wordmark.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-plain-wordmark.svg'],
        overviewLessons: ['One of the most rewarding tasks to do well is the unit and integration testing for your site. It helps catch countless issues that can slip passed anyone.', 'Creating a fully-functional web-application from the ground up is a time connsuming process with lots of potential setbacks. It is very important to stick to your scope and if time allows, improve upon it from there.'],
        youtubeVideo: ''

    },
    {
        role: 'Butterfly Image Classifier',
        duration: 'Sept - Dec 2020',
        projectOrProfession: 'Kaggle Competition',
        description: 'A university-based kaggle competition for developing an AI model that could classify seven different butterfly classes as accurately as possible.',
        tags: ['Python', 'TensorFlow', 'ML', 'Computer Vision'],
        filterable: 'machineLearning',
        overviewDescription: ['This was an open competition to the members of the cohort to try and test their computer vision skills by implementing as a good a butterfly classifier as they could train within the time limits of the current term.', 'My approach to this task involved using a convolutional neural networks for fine-tuning a pre-trained model, which is a process called transfer learning. This allowed for my model to get a very high accuracy from the get-go while also having some room for further fine-tuning based on the CNN applied on top of it.', 'Using this method, I was able to make it into the top-10 classifiers in the cohort.'],
        overviewMedia: [],
        githubLink: '',
        alternateLink: '',
        overviewDuration: 'September - December 2020',
        technologies: ['https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg', 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg'],
        overviewLessons: ['Transfer learning can be a very powerful and highly accessible tool for achieving good classification accuracy in a short amount of time.', 'Hyper-parameter tuning and and data-preprocessing can help to majorly boost generalisability of your model.'],
        youtubeVideo: ''

    },

]