const data = [
  {
    id: 'edutechs_web',
    imgPath: '/images/edutechs.png',
    usedTechs:
      'Javascript | JQuery | Firebase | WebRTC | NodeJS | Sass | Custom Redux Like Store Implementation | Responsive Design',
    heading: 'Edutechs',
    subHeading: 'One click digital classroom solution',
    shortDescription: `Edutechs is a one click digital video classroom solution along with all the features you need to be a successful teacher or to run a educational institution, first time in Bangladesh.
      <br /><br />
      I worked almost every part of this application, specially in Live Streaming, Signup-Signin, Topic Discussion and Chatting Section.`,
    description: `Edutechs is a one click digital video classroom solution along with all the features you need to be a successful teacher or to run a educational institution, first time in Bangladesh.
      <br /><br />
      I worked almost every part of this application, specially in Live Streaming, Signup-Signin, Topic Discussion and Chatting Section.`,
    liveLink: 'https://edutechs.org/',
  },
];

export default (req, res) => {
  res.statusCode = 200;
  res.json({ projects: data });
};
