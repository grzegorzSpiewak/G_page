const Experience = {
  header: {
    background: 'technology',
    heading: 'Javascript',
    caption: '<q>My leading technology</q>',
    scroll: {
      to: 'technology',
      anchor: 'my tools'
    }
  },
  about: {
    heading: 'Chosing the right tools',
    caption: 'My skills',
    text: 'Whenever you want to build a product from scratch, the best option is to go with the easiest solution. A landing page with external CMS could well be enough. Maybe even a static page faking what you’re try to solve would work. Products should be built for their users. What product do you want to build? How can you create the best user experience? Think about who will be using your system. Will they work on desktops or tablets? Will they access things via a mobile connection (as 70% of all users currently do)? Thanks to my experience and knowledge in front-end development I&apos;m able to answer on all this questions.',
    reverse: 'no'
  },
  technologies: {
    heading: 'Technologies',
    items: [
      { icon: 'js', heading: 'JavaScript', alt: 'Java Script icon', id: 1, text: 'JavaScript is one of the all-around easiest results-oriented language for web development. The language makes processing and calculation of data a cakewalk. It also helps for adding visual effects to the screen.' },
      { icon: 'react', heading: 'React', alt: 'React Icon', id: 2, text: 'My favorite JavaScript Framework. React makes it painless to create interactive UIs. Design simple views for each state of the application, and React will efficiently update and render just the right components when the data changes.' },
      { icon: 'redux', heading: 'Redux', alt: 'Redux Icon', id: 3, text: 'I use redux for application state management. To summarize it, it&apos;s a <q>brain</q> of any app or webpage which controls how it should respond to user interactions.' },
      { icon: 'node', heading: 'Node JS', alt: 'Node JS icon', id: 4, text: ' It’s used by me to build utility tools which help in my development (webpack, gulp, grunt). I’m currently in process of learning how to use Node to build a web server. To use the power of Javascript on back-end side.' },
      { icon: 'jquery', heading: 'JQuery', alt: 'Jquery icon', id: 5, text: ' Query&apos;s syntax is designed to make it easier to navigate a document, select DOM elements, create animations, handle events, and develop Ajax applications. jQuery also provides capabilities for developers to create plug-ins on top of the JavaScript library.' },
      { icon: 'bootstrap', heading: 'Bootstrap', alt: 'Bootstrap icon', id: 6, text: 'Bootstrap makes front-end web development faster and easier. ItI&apos;s made for folks of all skill levels, devices of all shapes, and projects of all sizes.' },
      { icon: 'github', heading: 'Github', alt: 'Github icon', id: 7, text: '"In case of Fire ... git commit, git push and run".</br></br> Github is a version control system which allows me to work in a team and keep track of the various changes made to every iteration.' },
      { icon: 'sass', heading: 'Sass', alt: 'Sass Icon', id: 8, text: 'As web pages and apps get more complex style sheets get larger and harder to maintain.</br></br> CSS preprocessors like Sass helps me in keeping style sheets concise and allowing to modularize code while offering a whole slew of features not yet available in regular CSS.' },
      { icon: 'webpack', heading: 'Webpack', alt: 'Webpack Icon', id: 9, text: 'Webpack is the latest and greatest in front-end development tools. It is a module bundler that works great with the most modern of front-end workflows including Babel, ReactJS, CommonJS, among others. It allows me to create a working environment for building websites and apps.' }
    ]
  },
  contact: {
    heading: 'Check me Github to download this page in development',
    redirect: '//github.com/grzegorzSpiewak/G_page',
    anchor: 'Go to github',
    external: true
  },
  marketing: {
    heading: 'Not only code skills',
    text: 'Some projects require teamwork to get things done more efficiently while other tasks are individual and can be completed by one person. I have worked with others, as well as independently, and have been successful in both positions.  Before starting working on IT for few years I was a Public Relation Specialist. This time allowed me not only to gain necessary teamwork and communication skills but develop a much better user-oriented approach.',
    imageName: 'team',
    alt: 'creative-picture presenting team work',
    redirect: '/blog',
    anchor: 'learn more',
    reverse: 'yes'
  }
};

export default Experience;
