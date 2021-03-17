import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aneta Stojanowska | Product Designer', // e.g: 'Name | Developer'
  lang: 'nl, en, pl', // e.g: en, es, fr, jp
  description: `I'm a Product Designer and I build beautifully designed web and mobile projects. With UX/UI practices I use the latest trends in the industry. I'm a problem solver and blogger. My ambition is to make the client happy with a user-friendly digital products. Could you use some help on design and front-end? Or do you have any questions? Git in touch!`, // e.g: Welcome to my website
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'problem.png',
    title: `Problem.`,
    info: `Our data reports inform people about the current job markets. It is complex data visualized through generic charts and ready-made dashboards, which results in less accessibility for the users on their mobile devices. The company wants to make their reports more appealing to their users. Based on LEAN problem analyses, I have hypothesized that data view should be more user-centered and designed simple enough to be understood by a maximum number of users.`,
    info2: `Platform: Web & mobile.`,
  },
  {
    id: nanoid(),
    img: 'roles-played.png',
    title: `ROLE(S) PLAYED.`,
    info: `I was Designer and Developer. I was responsible for translating a large amount of data into a story telling, combining graphics with informatica. As a developer, I have implemented my designs in HTML and CSS.`,
    info2: `Skills performed: Problem analyses, sketches, user flows, site maps, prototypes & low & high-fidelity wireframes, responsive design in CSS.`,
  },
  {
    id: nanoid(),
    img: 'research.png',
    title: `RESEARCH.`,
    info: `While sketching the user flows up to the high-fidelity wireframes, I constantly revised and updated designs and documentation through user testing and customer feedback.`,
    info2: `Based on A/B testing I choose more simplicity and lesser content. The charts had to become self-explanatory without labels.`,
  },
  {
    id: nanoid(),
    img: 'solution.png',
    title: `SOLUTION.`,
    info: `Combining words and images to tell the story quickly, concisely and in an entertaining fashion led to the desired result to visualize data easily and organize the content in a way that it is most accessible.`,
    info2: `During the Development phase, I applied responsive design in CSS and I implemented the design into HTML/CSS scroll infographic. It is a one pager that made the story more appealing to the users on web and mobile screen.`,
  },
  {
    id: nanoid(),
    img: 'challanges.png',
    title: `CHALLANGES.`,
    info: `During the Post Launch phase when monitoring the Launch phase the data charts were not efficient. During collection of the information, the results were not always precisely. The charts about tasks that belong to industrial machinery mechanics were too ambiguous.`,
    info2: `Instead of looking at the results as an exact representation of reality, I looked at them as a frosted glass: I can see the contours, but it will never be very sharp. I decided to use text card instead of charts.`,
  },
  {
    id: nanoid(),
    img: 'impact.png',
    title: `IMPACT.`,
    info: `The business goal was to make the company data dashboards more appealing and make them accessible for users on mobile devices.`,
    info2: `By closing the gap between the graphic design and informatics, the represented story in a user-centered way made the users understand complex data at a glance.`,
  },
  {
    id: nanoid(),
    img: 'lessons-learned.png',
    title: `LESSONS LEARNED.`,
    info: `Because of this project I realized the importance of planning and deciding how to map the entire story.`,
    info2: `It made me interact with the company in an early stage, so that I can plan and have decided the goals that I want to achieve with my story.`,
  },
];

// CONTACT DATA
export const contactData = {
  cta: `Home`,
  btn: 'Back',
  url: 'https://aneta-uwv-uxprocess.netlify.app',
  repo: `https://aneta.netlify.app/#projects`,
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/a_stojanowska',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/aneta-s',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/stojanowska',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aneta-s',
    },
  ],
};
