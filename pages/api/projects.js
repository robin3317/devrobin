const Projects = [
  {
    id: `edutechs_web`,
    imgPath: `/images/edutechs.png`,
    usedTechs: `Javascript | JQuery | Firebase | WebRTC | NodeJS | Sass | 
    Custom Redux Like Store Implementation | Responsive Design`,
    heading: `Edutechs`,
    subHeading: `One click digital classroom solution`,
    shortDescription: `Edutechs is a one click digital video classroom solution along with all the 
    features you need to be a successful teacher or to run a educational institution, first time in Bangladesh.`,
    description: `Edutechs is a one click digital video classroom solution along with all the features 
    you need to be a successful teacher or to run a educational institution, first time in Bangladesh.
    <br /><br />
    I worked almost every part of this application, specially in Live Streaming, Signup-Signin, 
    Topic Discussion and Chatting Section.`,
    links: {
      live: `https://edutechs.org/`,
    },
  },
  {
    id: `edutechs_mobile`,
    imgPath: `/images/edutech-mobile.png`,
    usedTechs: `ReactNative | NativeBase | Firebase`,
    heading: `Edutechs Mobile`,
    subHeading: `One click Digital Classroom Streaming and Conferencing Solution`,
    shortDescription: `Edutech is Bangladesh's first advanced Integrated Education
    Ecosystem. Introduce your students to a seamless classroom to
    digital learning experience. Monitor their progress and extend
    your support truly beyond the classroom with our One-Click
    Digital Streaming Technology.`,
    description: `Edutech is Bangladesh's first advanced Integrated Education
    Ecosystem. Introduce your students to a seamless classroom to
    digital learning experience. Monitor their progress and extend
    your support truly beyond the classroom with our One-Click
    Digital Streaming Technology.
    <br />
    <br />
    Implement all the web features in Mobile Application. This
    application is developed by ReactNative and we use NativeBase as
    ReactNative UI library. This was a challenging experience,
    because some apis were different than web!`,
    links: {
      playStore: `https://play.google.com/store/apps/details?id=com.openvidu_react_native`,
      appStore: `https://apps.apple.com/gb/app/edutech-bd/id1533784019`,
    },
  },
  {
    id: `ecommerz`,
    imgPath: `/images/ecommerz.png`,
    usedTechs: `ReactJS | Redux | Firebase | GraphQL + Apollo`,
    heading: `Ecommerz BD`,
    subHeading: `An online shopping app`,
    shortDescription: `An online shopping application where you can buy your products
    and pay bills online along with all the features an ecommerce should have.`,
    description: `An online shopping application where you can buy your products
    and pay bills online along with all the features an ecommerce should have..
    <br />
    <br />
    This is a practice project using ReactJS, React Hooks, React
    Context API, Redux, Firebase, Stripe, Service Workers &amp; Web
    Workers.`,
    links: {
      live: `http://ecommerz-bd.herokuapp.com/`,
      github: `https://github.com/robin3317/ecommerce`,
    },
  },
  {
    id: `diu_faculty_site`,
    imgPath: `/images/diu_faculty_site.png`,
    usedTechs: `ReactJS | NextJS | SCSS | MySQL`,
    heading: `DIU Faculty Site`,
    subHeading: `All the information about DIU faculties`,
    shortDescription: `From design to development, I do everything of this site.
    Although actual DIU faculty site is not updated with this design
    and code but you can see the live version of this project by
    bellow following link, hopefully will live very soon.`,
    description: `From design to development, I do everything of this site.
    Although actual DIU faculty site is not updated with this design
    and code but you can see the live version of this project by
    bellow following link, hopefully will live very soon.`,
    links: {
      live: `https://diu-faculty-site.vercel.app/`,
      design: `https://www.figma.com/proto/hrVzyQfzcZuFHuaKNLURQH/diu-faculty-page?node-id=239%3A1&scaling=min-zoom&hide-ui=1`,
    },
  },
  {
    id: `goTemplate`,
    imgPath: `/images/gotemplate.png`,
    usedTechs: `PHP | Laravel | SCSS | MySQL`,
    heading: `GoTemplate`,
    subHeading: `Easy Way To Sell Your Digital Products and Templates`,
    shortDescription: `GoTemplate is a digital platform where one can buy and sell
    his/her digital products like as web template, themes,
    illustrations e.t.c.`,
    description: `GoTemplate is a digital platform where one can buy and sell
    his/her digital products like as web template, themes,
    illustrations e.t.c.
    <br />
    <br />
    From design to development, I do the Design and Frontend part of
    this project. I needed to work some Backend part of this project
    also.`,
    links: {
      live: `http://gotemplate.emediaglobal.biz/`,
      design: `https://www.figma.com/proto/iuipBt8sRnacTrBqoI4wO1/Landing-Page?node-id=4%3A0&scaling=min-zoom&hide-ui=1`,
    },
  },
];

export { Projects };

export default (req, res) => {
  res.statusCode = 200;
  res.json({ projects: Projects });
};
