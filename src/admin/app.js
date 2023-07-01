import AuthLogo from './extensions/favicon-32x32.png';
import MenuLogo from './extensions/favicon-32x32.png';
import favicon from './extensions/favicon-32x32.png';

export default {
    config: {
      auth: {
        logo: AuthLogo,
      },
      menu: {
        logo: MenuLogo,
      },
      head: {
        favicon: favicon,
      },
      translations: {
        en: {
          'app.components.LeftMenu.navbrand.title': 'xplor Dashboard',
          'app.components.LeftMenu.navbrand.workplace': 'xplor Workplace',
          "Auth.form.welcome.title": "Welcome to xplor",
          "Auth.form.welcome.subtitle": "Log in to xplor Development",
        },
      },
    },
    bootstrap() {},
  };
