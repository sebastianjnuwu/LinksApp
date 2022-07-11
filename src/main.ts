import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min.css';
import {
  faGithub,
  faInstagram,
  faDiscord,
  faFacebook,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const app = new App({
  target: document.body,
  props: {
    name: 'SEBASTIAN JN',
    username: 'sebastianjnuwu',
    avatarUrl: 'https://media.discordapp.net/attachments/991506128972304414/995977109551984680/profile-picture.jpg',
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
        name: 'Discord',
        url: 'https://discord.gg/NDzFeDp8YE',
        icon: faDiscord,
      }
    ],
  },
});

export default app;
