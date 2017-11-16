import React, { Component } from 'react';
import Header from 'components/Header';
import FrameWithText from 'components/FrameWithText';
import Services from 'components/Services';
import PageWrap from 'components/PageWrap';
import ImageWithText from 'components/ImageWithText';

const homepage = {
  header: {
    background: 'home',
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Curabitur quis lorem vitae massa fermentum facilisis in sit amet magna',
    scroll: {
      to: 'services',
      anchor: 'about me'
    }
  },
  about: {
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor',
    text: 'Cras vel turpis et tellus interdum pellentesque. Ut cursus eget est molestie porttitor. Curabitur semper sapien vel tellus cursus, vitae vulputate metus blandit. Cras vulputate ut risus quis suscipit. Quisque egestas mauris a nunc feugiat, a aliquet mauris consequat. Fusce et tincidunt mi. Nam finibus orci sit amet dui ornare, ac cursus quam dapibus. Nam id congue sapien. Etiam hendrerit, nulla eget ultricies aliquet, justo mauris placerat mauris, lacinia blandit lorem sem ut orci. Aenean congue faucibus dolor, eget vestibulum odio commodo in. Ut sed vulputate risus. Aenean eleifend gravida sem, ac maximus arcu pulvinar vel.'
  },
  services: {
    heading: 'Services',
    items: [
      { icon: 'fa fa-4x fa-paint-brush', heading: 'Beautiful Design', text: 'Every website is beautiful unique and tailored to suit your needs and requirements.', id: 1, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-code', heading: 'Clean Code', text: 'All websites are written in valid and clean HTML5 CSS3 and JavaScript.', id: 2, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-tablet', heading: 'Always Responsive', text: 'All websites are responsive. They will look great on desktop tablets and mobile phones too.', id: 3, redirect: '/experience', anchor: 'learn more' },
      { icon: 'fa fa-4x fa-line-chart', heading: 'SEO Friendly', text: 'All websites are responsive. They will look great on desktop tablets and mobile phones too.', id: 4, redirect: '/experience', anchor: 'learn more' }
    ]
  }
};

class Home extends Component {

  render() {
    return (
      <PageWrap>
        <Header {...homepage.header} />
        <FrameWithText {...homepage.about} />
        <Services {...homepage.services} />
        <ImageWithText />
      </PageWrap>
    );
  }
}

export default Home;
