import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.css';
import {
  faGithub, faInstagram, faDiscord, faTiktok,
  faFacebook, faYoutube, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const app = new App({
  target: document.body,
  props: {
    name: 'SEBASTIAN JN',
    username: 'sebastianjnuwu',
    avatarUrl: 'https://avatars.githubusercontent.com/u/101356556',
    url: [
      {
        name: 'Instagram',
        url: 'https://instagram.com/sebastianjnuwu',
        icon: faInstagram,
      },
      {
        name: 'Youtube',
        url: 'https://youtube.com/c/SEBASTIANJNUWU',
        icon: faYoutube,
      },
           {
        name: 'Tiktok',
        url: 'https://tiktok.com/@sebastianjnuwu',
        icon: faTiktok,
      },
     {
        name: 'Twitter',
        url: 'https://twitter.com/sebastianjnuwu',
        icon: faTwitter,
      },
           {
        name: 'Github',
        url: 'https://github.com/sebastianjnuwu',
        icon: faGithub,
      },
      {
        name: 'Discord',
        url: 'https://discord.gg/NDzFeDp8YE',
        icon: faDiscord,
      }
    ],
  },
});

export default app;
