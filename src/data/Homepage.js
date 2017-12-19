const Homepage = {
  header: {
    background: 'home',
    heading: 'Front End Developer & Brand Specialist',
    caption: '<q>The art behind javascirpt</q>',
    scroll: {
      to: 'services',
      anchor: 'Start'
    }
  },
  introduction: {
    heading: 'Few words about me',
    caption: 'Welcome',
    text: 'I’m a perfectionist with a strong eye, ear and heart not only for the details but the perfection of a whole. As a Front End Developer with a marketing background, I am not only able to build a modern application based on Javascript but add to it unique creative ideas. In my work, I focus on user problems and provide genuine solutions. I specialize in brand identity, web design and of course... front-end development.',
    reverse: 'no'
  },
  services: {
    heading: 'Services',
    items: [
      { icon: 'fa fa-4x fa-paint-brush', heading: 'Beautiful Design', text: 'Every website is beautiful unique and tailored to suit your needs and requirements.', id: 1, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-code', heading: 'Clean Code', text: 'All websites are written in valid and clean HTML5 CSS3 and JavaScript.', id: 2, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-tablet', heading: 'Always Responsive', text: 'All websites are responsive. They will look great on desktop tablets and mobile phones too.', id: 3, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-line-chart', heading: 'SEO Friendly', text: 'Seeing your site as the search engines do', id: 4, redirect: '/experience', anchor: 'learn more' }
    ]
  },
  about: {
    heading: 'My background',
    text: 'Hi, </br></br> I&apos;m Greg and I&apos;m a “<b>Front End Developer</b>”. I started out my career as ... a Public Relations Specialist. I know how this sounds but please stay with me.  As part of my responsibilities, I was in charge of creating engaging content for my client&apos; s webpages and social media. This allowed me to have a first contact with how modern web pages and applications are built. Thanks to this and people who I was lucky to meet I fell in love with the web.</br></br> Since that time I have been making websites and learning Javascript... and I still can&apos;t get enough of it. Along the way, I found a passion for code and data analysis and I use those passions in my everyday work.</br></br> When I &apos;m not coding, I enjoy reading books, bike raiding, and music.',
    imageName: 'business',
    alt: 'creative-picture',
    redirect: '/blog',
    anchor: 'know me better',
    reverse: 'no'
  },
  contact: {
    heading: 'Are you looking for Front End Developer?',
    redirect: '/contact',
    anchor: 'Let&apos; s work together',
    external: false
  }
};

export default Homepage;
