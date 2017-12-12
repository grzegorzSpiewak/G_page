const Contact = {
  header: {
    background: 'contact',
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Curabitur quis lorem vitae massa fermentum facilisis in sit amet magna',
    scroll: {
      to: 'contact',
      anchor: 'contact me'
    }
  },
  introduction: {
    heading: 'Lorem ipsum dolor sit amet',
    caption: 'Lorem ipsum dolor',
    text: 'Cras vel turpis et tellus interdum pellentesque. Ut cursus eget est molestie porttitor. Curabitur semper sapien vel tellus cursus, vitae vulputate metus blandit. Cras vulputate ut risus quis suscipit. Quisque egestas mauris a nunc feugiat, a aliquet mauris consequat. Fusce et tincidunt mi. Nam finibus orci sit amet dui ornare, ac cursus quam dapibus. Nam id congue sapien. Etiam hendrerit, nulla eget ultricies aliquet, justo mauris placerat mauris, lacinia blandit lorem sem ut orci. Aenean congue faucibus dolor, eget vestibulum odio commodo in. Ut sed vulputate risus. Aenean eleifend gravida sem, ac maximus arcu pulvinar vel.',
    reverse: 'yes'
  },
  form: {
    heading: 'Contact',
    submit: 'Submit',
    inputs: {
      onLeft: [
        { class: 'contact__form', type: 'text', name: 'name', label: 'Your name', icon: 'fa fa-user', placeholder: 'Type in your name', id: 'input_01' },
        { class: 'contact__form', type: 'email', name: 'email', label: 'Your email', icon: 'fa fa-envelope-o', placeholder: 'Type in your Email', id: 'input_02' },
        { class: 'contact__form', type: 'text', name: 'subject', label: 'Subject', icon: 'fa fa-info', placeholder: 'reason why you contact me', id: 'input_03' }
      ],
      onRight: [
        { class: 'contact__form', type: 'textarea', name: 'massage', label: 'Your massage', icon: 'fa fa-comments-o', placeholder: 'massage', id: 'input_04' }
      ]
    },
    succes: {
      heading: 'Thanks you for you massage',
      redirect: '/blog',
      anchor: 'Check my blog'
    }
  }
};

export default Contact;
