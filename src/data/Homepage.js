const Homepage = {
  header: {
    background: 'home',
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Curabitur quis lorem vitae massa fermentum facilisis in sit amet magna',
    scroll: {
      to: 'services',
      anchor: 'about me'
    }
  },
  introduction: {
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor',
    text: 'Cras vel turpis et tellus interdum pellentesque. Ut cursus eget est molestie porttitor. Curabitur semper sapien vel tellus cursus, vitae vulputate metus blandit. Cras vulputate ut risus quis suscipit. Quisque egestas mauris a nunc feugiat, a aliquet mauris consequat. Fusce et tincidunt mi. Nam finibus orci sit amet dui ornare, ac cursus quam dapibus. Nam id congue sapien. Etiam hendrerit, nulla eget ultricies aliquet, justo mauris placerat mauris, lacinia blandit lorem sem ut orci. Aenean congue faucibus dolor, eget vestibulum odio commodo in. Ut sed vulputate risus. Aenean eleifend gravida sem, ac maximus arcu pulvinar vel.',
    reverse: 'no'
  },
  services: {
    heading: 'Services',
    items: [
      { icon: 'fa fa-4x fa-paint-brush', heading: 'Beautiful Design', text: 'Every website is beautiful unique and tailored to suit your needs and requirements.', id: 1, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-code', heading: 'Clean Code', text: 'All websites are written in valid and clean HTML5 CSS3 and JavaScript.', id: 2, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-tablet', heading: 'Always Responsive', text: 'All websites are responsive. They will look great on desktop tablets and mobile phones too.', id: 3, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-line-chart', heading: 'SEO Friendly', text: 'All websites are responsive. They will look great on desktop tablets and mobile phones too.', id: 4, redirect: '/experience', anchor: 'learn more' }
    ]
  },
  about: {
    heading: 'About',
    text: 'Cras vel turpis et tellus interdum pellentesque. Ut cursus eget est molestie porttitor. Curabitur semper sapien vel tellus cursus, vitae vulputate metus blandit. Cras vulputate ut risus quis suscipit. Quisque egestas mauris a nunc feugiat, a aliquet mauris consequat. Fusce et tincidunt mi. Nam finibus orci sit amet dui ornare, ac cursus quam dapibus. Nam id congue sapien. Etiam hendrerit, nulla eget ultricies aliquet, justo mauris placerat mauris, lacinia blandit lorem sem ut orci. Aenean congue faucibus dolor, eget vestibulum odio commodo in. Ut sed vulputate risus. Aenean eleifend gravida sem, ac maximus arcu pulvinar vel.',
    imageName: 'business',
    alt: 'creative-picture',
    redirect: '/blog',
    anchor: 'know me better',
    reverse: 'no'
  },
  contact: {
    heading: 'You are looking for Front End Developer?',
    redirect: '/contact',
    anchor: 'contact'
  }
};

export default Homepage;
