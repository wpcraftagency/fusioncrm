import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '623'),
    exact: true
  },
  {
    path: '/blog/2021/03/20/gyors-bankkartyas-fizetes-woocommerce-re-paylike',
    component: ComponentCreator('/blog/2021/03/20/gyors-bankkartyas-fizetes-woocommerce-re-paylike', 'e0e'),
    exact: true
  },
  {
    path: '/blog/2021/05/13/kaphatok-egy-phpmyadmin-t',
    component: ComponentCreator('/blog/2021/05/13/kaphatok-egy-phpmyadmin-t', '8ab'),
    exact: true
  },
  {
    path: '/blog/2022/01/06/gvh-viszlat-kamu-ertekelesek-woocommerce-szempontbol',
    component: ComponentCreator('/blog/2022/01/06/gvh-viszlat-kamu-ertekelesek-woocommerce-szempontbol', '50d'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/bankkartyas-fizetes',
    component: ComponentCreator('/blog/tags/bankkartyas-fizetes', 'e1a'),
    exact: true
  },
  {
    path: '/blog/tags/gvh',
    component: ComponentCreator('/blog/tags/gvh', '4d9'),
    exact: true
  },
  {
    path: '/blog/tags/komment',
    component: ComponentCreator('/blog/tags/komment', 'f0d'),
    exact: true
  },
  {
    path: '/blog/tags/mysql',
    component: ComponentCreator('/blog/tags/mysql', '2a3'),
    exact: true
  },
  {
    path: '/blog/tags/online-fizetes',
    component: ComponentCreator('/blog/tags/online-fizetes', '1c0'),
    exact: true
  },
  {
    path: '/blog/tags/paylike',
    component: ComponentCreator('/blog/tags/paylike', '010'),
    exact: true
  },
  {
    path: '/blog/tags/phpmyadmin',
    component: ComponentCreator('/blog/tags/phpmyadmin', '81b'),
    exact: true
  },
  {
    path: '/cc-by-nc-sa-4.0',
    component: ComponentCreator('/cc-by-nc-sa-4.0', 'a76'),
    exact: true
  },
  {
    path: '/dokumentacio',
    component: ComponentCreator('/dokumentacio', '2a4'),
    exact: true
  },
  {
    path: '/hogyan-hasznald-a-hub-oldalt',
    component: ComponentCreator('/hogyan-hasznald-a-hub-oldalt', 'e20'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/mit-licensz',
    component: ComponentCreator('/mit-licensz', '6d0'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ef8'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ecf'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '59b'),
            routes: [
              {
                path: '/docs/dokumentacio/',
                component: ComponentCreator('/docs/dokumentacio/', '03f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/',
                component: ComponentCreator('/docs/dokumentacio/hellopack/', '065'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/aktivalas',
                component: ComponentCreator('/docs/dokumentacio/hellopack/aktivalas', '8a8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/bovitmenyek-frissitese',
                component: ComponentCreator('/docs/dokumentacio/hellopack/bovitmenyek-frissitese', '21c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/bovitmenyek-letoltese',
                component: ComponentCreator('/docs/dokumentacio/hellopack/bovitmenyek-letoltese', '431'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/bovitmenyek-telepitese',
                component: ComponentCreator('/docs/dokumentacio/hellopack/bovitmenyek-telepitese', '39e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/cli-parancsok',
                component: ComponentCreator('/docs/dokumentacio/hellopack/cli-parancsok', 'b0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/composer',
                component: ComponentCreator('/docs/dokumentacio/hellopack/composer', 'e50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/forditaskezeles',
                component: ComponentCreator('/docs/dokumentacio/hellopack/forditaskezeles', '720'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/hibaelharitas',
                component: ComponentCreator('/docs/dokumentacio/hellopack/hibaelharitas', '7bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/kezeles-kikapcsolasa',
                component: ComponentCreator('/docs/dokumentacio/hellopack/kezeles-kikapcsolasa', '364'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/kezeles-kikapcsolasa-sablon',
                component: ComponentCreator('/docs/dokumentacio/hellopack/kezeles-kikapcsolasa-sablon', '8d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/kovetelmenyek',
                component: ComponentCreator('/docs/dokumentacio/hellopack/kovetelmenyek', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/letoltes-telepites',
                component: ComponentCreator('/docs/dokumentacio/hellopack/letoltes-telepites', '333'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/tesztelo',
                component: ComponentCreator('/docs/dokumentacio/hellopack/tesztelo', '6db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellopack/white-label',
                component: ComponentCreator('/docs/dokumentacio/hellopack/white-label', '383'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellotools/',
                component: ComponentCreator('/docs/dokumentacio/hellotools/', '4f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellotools/hellocron',
                component: ComponentCreator('/docs/dokumentacio/hellotools/hellocron', '103'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellotools/helloimg',
                component: ComponentCreator('/docs/dokumentacio/hellotools/helloimg', '7f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/hellotools/hellopack',
                component: ComponentCreator('/docs/dokumentacio/hellotools/hellopack', 'c10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/', '01a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/', '290'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-api-kulcs-aktivalasa',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-api-kulcs-aktivalasa', '0d2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-builder-telepitese',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-builder-telepitese', '891'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-frissitese',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-frissitese', '467'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-header-es-footer-importalasa',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-header-es-footer-importalasa', '27b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-layout-weboldal-terv-importalasa',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-layout-weboldal-terv-importalasa', 'f0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-sablon-telepitese',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/divi-sablon-telepitese', '875'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/kesz-divi-szekciok-importalsa',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/kesz-divi-szekciok-importalsa', '918'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/komplett-divi-weboldal-telepitese',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/komplett-divi-weboldal-telepitese', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/regi-divi-api-kulcs-felulirasa-egy-uj-api-kulccsal',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/divi-komplett-weboldalak/regi-divi-api-kulcs-felulirasa-egy-uj-api-kulccsal', 'fcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/komplett-weboldalak/komplett-weboldal-telepitese-all-in-one-wp-migration-bovitmeny-segitsegevel',
                component: ComponentCreator('/docs/dokumentacio/komplett-weboldalak/komplett-weboldal-telepitese-all-in-one-wp-migration-bovitmeny-segitsegevel', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/',
                component: ComponentCreator('/docs/dokumentacio/mailhub/', '46a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/android',
                component: ComponentCreator('/docs/dokumentacio/mailhub/android', 'b30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/apple-macos-ios',
                component: ComponentCreator('/docs/dokumentacio/mailhub/apple-macos-ios', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/levelezes-beallitasa',
                component: ComponentCreator('/docs/dokumentacio/mailhub/levelezes-beallitasa', '5cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/microsoft-outlook',
                component: ComponentCreator('/docs/dokumentacio/mailhub/microsoft-outlook', '972'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/mozilla-thunderbird',
                component: ComponentCreator('/docs/dokumentacio/mailhub/mozilla-thunderbird', '049'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/mailhub/windows-mail',
                component: ComponentCreator('/docs/dokumentacio/mailhub/windows-mail', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/',
                component: ComponentCreator('/docs/dokumentacio/marketing/', '2cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Facebook/',
                component: ComponentCreator('/docs/dokumentacio/marketing/Facebook/', 'c93'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Facebook/facebook-hirdetesi-fiok-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Facebook/facebook-hirdetesi-fiok-letrehozasa', '60a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Facebook/facebook-hozzaferes-adasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Facebook/facebook-hozzaferes-adasa', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Facebook/facebook-oldal-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Facebook/facebook-oldal-letrehozasa', '441'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Facebook/facebook-vallalkozaskezelo-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Facebook/facebook-vallalkozaskezelo-letrehozasa', '43d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/', '329'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-ads-fiok-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-ads-fiok-letrehozasa', '41a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-ads-hozzafere-adasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-ads-hozzafere-adasa', 'b99'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-analytics-hozzaferes-adasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-analytics-hozzaferes-adasa', '786'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-analytics-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-analytics-letrehozasa', '7a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-merchant-center-hozzaferes-adasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-merchant-center-hozzaferes-adasa', '1cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/marketing/Google/google-merchant-center-letrehozasa',
                component: ComponentCreator('/docs/dokumentacio/marketing/Google/google-merchant-center-letrehozasa', '9ce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/', 'dae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/cloudflare-regisztracio-hozzaferes',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/cloudflare-regisztracio-hozzaferes', '0bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/hozzaferes-a-szerverhez',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/hozzaferes-a-szerverhez', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/levelezes-beallitasa',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/levelezes-beallitasa', '8a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/mi-nem-tartozik-bele-az-uzemeltetesbe',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/mi-nem-tartozik-bele-az-uzemeltetesbe', 'b3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/dokumentacio/uzemeltetes-karbantartas/technikai-adatok',
                component: ComponentCreator('/docs/dokumentacio/uzemeltetes-karbantartas/technikai-adatok', '5b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kozosseg/',
                component: ComponentCreator('/docs/kozosseg/', '050'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kozosseg/discord',
                component: ComponentCreator('/docs/kozosseg/discord', '251'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kozosseg/facebook',
                component: ComponentCreator('/docs/kozosseg/facebook', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/kozosseg/youtube',
                component: ComponentCreator('/docs/kozosseg/youtube', '7b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/',
                component: ComponentCreator('/docs/sugo/', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/egyeb/',
                component: ComponentCreator('/docs/sugo/egyeb/', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/egyeb/mi-a-kulonbseg-a-divi-mega-es-a-sima-divi-csomag-kozott',
                component: ComponentCreator('/docs/sugo/egyeb/mi-a-kulonbseg-a-divi-mega-es-a-sima-divi-csomag-kozott', 'c3b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/egyeb/white-label',
                component: ComponentCreator('/docs/sugo/egyeb/white-label', '38b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/',
                component: ComponentCreator('/docs/sugo/partnerprogram/', '05b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/kifizetesi-feltetelek',
                component: ComponentCreator('/docs/sugo/partnerprogram/kifizetesi-feltetelek', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/kozpont',
                component: ComponentCreator('/docs/sugo/partnerprogram/kozpont', 'c65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/partnerazonositod',
                component: ComponentCreator('/docs/sugo/partnerprogram/partnerazonositod', '619'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/partnerlink',
                component: ComponentCreator('/docs/sugo/partnerprogram/partnerlink', 'c52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/regisztracio',
                component: ComponentCreator('/docs/sugo/partnerprogram/regisztracio', '1ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/szabalyzat',
                component: ComponentCreator('/docs/sugo/partnerprogram/szabalyzat', '404'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/partnerprogram/szamla',
                component: ComponentCreator('/docs/sugo/partnerprogram/szamla', 'e03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/adoszamok',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/adoszamok', 'c20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizetes-csomagvaltas',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizetes-csomagvaltas', 'a34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizetes-elofizetes',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizetes-elofizetes', '8bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizetes-korabbi-megujitasa-kedvezmeny-felhasznalasa',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizetes-korabbi-megujitasa-kedvezmeny-felhasznalasa', 'ec2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizetes-lemondasa',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizetes-lemondasa', '3dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizetes-ujraaktivalasa',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizetes-ujraaktivalasa', '2af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/elofizeteshez-kapcsolodo-kartya-csereje',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/elofizeteshez-kapcsolodo-kartya-csereje', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/hol-talalom-a-szamlat',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/hol-talalom-a-szamlat', '658'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/manualis-bankkartya-terheles',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/manualis-bankkartya-terheles', 'ff1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/szamla-javitas-korrekcio',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/szamla-javitas-korrekcio', '9a9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/sugo/szamlazas-es-elofizetesek/szamlazasi-adat-modositas',
                component: ComponentCreator('/docs/sugo/szamlazas-es-elofizetesek/szamlazasi-adat-modositas', '702'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/',
                component: ComponentCreator('/docs/tudasbazis/', '156'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/', '641'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/account-funds-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/account-funds-for-woocommerce', 'd09'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/addify-advanced-product-quantity',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/addify-advanced-product-quantity', 'a7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/admin-menu-editor-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/admin-menu-editor-pro', '4f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/advanced-custom-fields-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/advanced-custom-fields-multilingual', '0a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/advanced-custom-fields-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/advanced-custom-fields-pro', 'c2d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp', '9c3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-area-shortcodes',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-area-shortcodes', '780'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-dashboard-sharing',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-dashboard-sharing', '5b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-portal',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-affiliate-portal', 'b31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-allowed-products',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-allowed-products', 'e9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-custom-affiliate-slugs',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-custom-affiliate-slugs', '480'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-direct-link-tracking',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-direct-link-tracking', '6cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-lifetime-commissions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-lifetime-commissions', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-multi-currency',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-multi-currency', 'e6b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-multi-tier-commissions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-multi-tier-commissions', '8d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-paypal-payouts',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-paypal-payouts', '41e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-recurring-referrals',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-recurring-referrals', '2e1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-rest-api-extended',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-rest-api-extended', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-show-affiliate-coupons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-show-affiliate-coupons', '150'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-signup-referrals',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-signup-referrals', 'b51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-store-credit',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-store-credit', '4dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-tiered-rates',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-tiered-rates', '28a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/affiliatewp-woocommerce-redirect-affiliates',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/affiliatewp-woocommerce-redirect-affiliates', '649'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-and-backup',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-and-backup', 'da2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-dropbox-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-dropbox-extension', '12b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-ftp-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-ftp-extension', 'df7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-google-drive-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-google-drive-extension', 'f03'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-multisite-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-multisite-extension', 'db9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-onedrive-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-onedrive-extension', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-unlimited-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-unlimited-extension', '3f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-url-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/all-in-one-wp-migration-url-extension', '3eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/amelia',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/amelia', '9e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-easy-digital-downloads',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-easy-digital-downloads', 'fd6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-email-notifications',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-email-notifications', '690'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-goals-key-events',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-goals-key-events', 'c1e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-pro', '896'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-utm-campaigns-tracking',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-utm-campaigns-tracking', '0ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/analytify-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/analytify-woocommerce', '722'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/api-manager-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/api-manager-for-woocommerce', 'ce8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/automatewoo',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/automatewoo', '209'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/automatewoo-birthdays-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/automatewoo-birthdays-add-on', '82b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/automatewoo-refer-a-friend-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/automatewoo-refer-a-friend-add-on', '442'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/automatorwp',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/automatorwp', '7a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/automatorwp-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/automatorwp-pro', '05c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/boilerplate-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/boilerplate-extension', 'ca3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/booster-plus-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/booster-plus-for-woocommerce', '8ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/bought-together-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/bought-together-for-woocommerce', 'd00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/buy-again-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/buy-again-for-woocommerce', '858'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/cartflows',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/cartflows', '5fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/cartflows-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/cartflows-pro', '347'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/checkoutwc',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/checkoutwc', 'd9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/complianz-privacy-suite-gdpr-ccpa-premium',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/complianz-privacy-suite-gdpr-ccpa-premium', '007'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/contact-form-7-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/contact-form-7-multilingual', 'df2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/custom-stock-status',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/custom-stock-status', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/custom-user-registration-fields-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/custom-user-registration-fields-for-woocommerce', 'c36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/customize-my-account-page-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/customize-my-account-page-for-woocommerce', '74e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/divi-menu-cart',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/divi-menu-cart', '322'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/divi-responsive-helper',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/divi-responsive-helper', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/divi-supreme-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/divi-supreme-pro', '913'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/divi-toolbox',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/divi-toolbox', 'f01'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/divipasswords',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/divipasswords', '14f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/dynamic-ooo-dynamic-content-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/dynamic-ooo-dynamic-content-for-elementor', '970'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/edit-order-by-customer',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/edit-order-by-customer', 'ffd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/elementor-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/elementor-pro', 'bf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/email-customizer-for-automatewoo',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/email-customizer-for-automatewoo', '29d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/email-customizer-for-woocommerce-subscriptions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/email-customizer-for-woocommerce-subscriptions', 'ece'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-boards-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-boards-pro', '013'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-forms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-forms', 'bda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-forms-pdf-generator',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-forms-pdf-generator', '69a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-forms-pro-add-on-pack',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-forms-pro-add-on-pack', '6a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-forms-signature-addon',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-forms-signature-addon', '034'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-support',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-support', 'a4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluent-support-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluent-support-pro', 'cda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentbooking-appointment-scheduling-booking-solution',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentbooking-appointment-scheduling-booking-solution', '7d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentbooking-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentbooking-pro', 'ad0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcart',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcart', 'b4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcart-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcart-pro', 'cdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcommunity',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcommunity', 'c7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcommunity-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcommunity-pro', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcrm-marketing-automation-for-wordpress',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcrm-marketing-automation-for-wordpress', '57f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentcrm-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentcrm-pro', 'b40'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/fluentsmtp',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/fluentsmtp', '535'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/free-gifts-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/free-gifts-for-woocommerce', 'bf1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gappointments',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gappointments', '6b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/generateblocks',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/generateblocks', '798'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/generateblocks-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/generateblocks-pro', '02d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gp-premium',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gp-premium', '4a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gravity-forms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gravity-forms', 'b8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gravity-forms-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gravity-forms-multilingual', '9cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gravity-forms-product-add-ons-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gravity-forms-product-add-ons-for-woocommerce', 'ba7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/gravity-smtp',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/gravity-smtp', 'ed6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jet-appointments-booking',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jet-appointments-booking', '8cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetblocks-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetblocks-for-elementor', '239'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetblog-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetblog-for-elementor', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetbooking',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetbooking', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetcomparewishlist-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetcomparewishlist-for-elementor', '976'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetelements-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetelements-for-elementor', '325'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine', 'c19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-custom-visibility-conditions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-custom-visibility-conditions', '989'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-dynamic-charts-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-dynamic-charts-builder', 'b57'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-dynamic-tables-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-dynamic-tables-builder', '8a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-get-attachment-file-link-by-id',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-get-attachment-file-link-by-id', 'f0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-layout-switcher',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-layout-switcher', '1bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-post-expiration-period-module',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-post-expiration-period-module', '84a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetengine-trim-string-callback',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetengine-trim-string-callback', 'afa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-address-autocomplete',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-address-autocomplete', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-advanced-color-picker',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-advanced-color-picker', 'c56'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-convertkit-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-convertkit-action', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-formless-actions-endpoints',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-formless-actions-endpoints', 'c96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-hierarchical-select',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-hierarchical-select', '125'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-hubspot-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-hubspot-action', '841'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-limit-form-responses',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-limit-form-responses', 'e34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-mailerlite-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-mailerlite-action', '842'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-mailpoet-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-mailpoet-action', 'c82'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-moosend-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-moosend-action', '120'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-paypal-recurring-payments',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-paypal-recurring-payments', '6e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-pdf-attachment',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-pdf-attachment', '72c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-save-form-progress',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-save-form-progress', '6ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-schedule-forms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-schedule-forms', '3be'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-select-autocomplete',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-select-autocomplete', '64b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-stripe-gateway',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-stripe-gateway', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-user-login-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-user-login-action', '607'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetformbuilder-woocommerce-cart-checkout-action',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetformbuilder-woocommerce-cart-checkout-action', 'c4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetmenu',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetmenu', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetpopup',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetpopup', '041'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetproductgallery',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetproductgallery', 'd8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetproducttables',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetproducttables', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetreviews-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetreviews-for-elementor', '122'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetsearch',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetsearch', 'ab1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetsmartfilters',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetsmartfilters', '90f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetstylemanager',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetstylemanager', 'd07'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jettabs-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jettabs-for-elementor', '2bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetthemecore',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetthemecore', 'e39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jettricks',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jettricks', '900'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/jetwoobuilder-for-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/jetwoobuilder-for-elementor', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-course-reviews',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-course-reviews', 'afe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms', '31e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-2checkout-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-2checkout-integration', '50b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-achievements',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-achievements', 'c71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-bbpress-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-bbpress-integration', '75b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-certificate-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-certificate-builder', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-course-grid',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-course-grid', '222'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-edd-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-edd-integration', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-elementor', 'e63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-event-espresso',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-event-espresso', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-gravityforms-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-gravityforms-integration', 'be5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-integrity',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-integrity', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-memberpress-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-memberpress-integration', 'c8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-migration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-migration', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-notifications',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-notifications', 'ea9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-paid-memberships-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-paid-memberships-pro', '4e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-restrict-content-pro-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-restrict-content-pro-integration', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-samcart-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-samcart-integration', 'ef8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-the-events-calendar-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-the-events-calendar-integration', '0e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-thrivecart-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-thrivecart-integration', 'ae3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-woocommerce-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-woocommerce-integration', '44c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-lms-zapier-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-lms-zapier-integration', '37a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/learndash-multilingual-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/learndash-multilingual-integration', '365'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mailchimp-for-woocommerce-memberships',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mailchimp-for-woocommerce-memberships', 'cf4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mailchimp-for-wordpress-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mailchimp-for-wordpress-multilingual', 'acc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-advanced-uptime-monitor-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-advanced-uptime-monitor-integration', '179'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-api-backups-extension-beta',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-api-backups-extension-beta', '35c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-article-uploader-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-article-uploader-extension', '463'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-atarim-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-atarim-extension', '91b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-buddy-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-buddy-extension', '076'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-bulk-settings-manager-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-bulk-settings-manager-extension', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-cache-control-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-cache-control-extension', '66e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-clone-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-clone-extension', '7fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-code-snippets-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-code-snippets-extension', '5bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-comments-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-comments-extension', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-custom-dashboard-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-custom-dashboard-extension', 'ac3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-custom-post-type',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-custom-post-type', 'aad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-dashboard',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-dashboard', 'f31'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-dashboard-lock-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-dashboard-lock-extension', '6b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-database-updater-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-database-updater-extension', 'b74'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-domain-monitor-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-domain-monitor-extension', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-favorites-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-favorites-extension', '297'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-file-uploader-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-file-uploader-extension', 'e5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-google-analytics-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-google-analytics-extension', '296'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-ithemes-security-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-ithemes-security-extension', '172'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-jetpack-protect-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-jetpack-protect-extension', '756'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-jetpack-scan-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-jetpack-scan-extension', '1ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-lighthouse-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-lighthouse-extension', '7ac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-maintenance-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-maintenance-extension', 'a96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-matomo-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-matomo-extension', 'b86'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-post-dripper-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-post-dripper-extension', '715'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-post-plus-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-post-plus-extension', 'bad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-pressable-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-pressable-extension', '64e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-pro-reports-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-pro-reports-extension', 'eca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-ssl-monitor-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-ssl-monitor-extension', '34f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-staging-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-staging-extension', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-sucuri-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-sucuri-extension', '8e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-team-control',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-team-control', 'fb0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-time-capsule-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-time-capsule-extension', 'b9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-updraftplus-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-updraftplus-extension', '9ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-url-extractor-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-url-extractor-extension', '671'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-virusdie-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-virusdie-extension', '73f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-vulnerability-checker-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-vulnerability-checker-extension', 'c00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-white-label-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-white-label-extension', '58b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-woocommerce-shortcuts-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-woocommerce-shortcuts-extension', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-woocommerce-status-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-woocommerce-status-extension', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-wordfence-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-wordfence-extension', '610'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-wordpress-seo-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-wordpress-seo-extension', '17c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mainwp-wp-compress-extension',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mainwp-wp-compress-extension', '8f2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-admin-columns',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-admin-columns', '7e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-blocks',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-blocks', 'e96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-builder', '349'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-conditional-logic',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-conditional-logic', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-custom-table',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-custom-table', '9bc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-favorite-posts',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-favorite-posts', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-frontend-submission',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-frontend-submission', '686'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-group',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-group', 'd41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-include-exclude',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-include-exclude', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-revision',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-revision', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-settings-page',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-settings-page', '2bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-tabs',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-tabs', '860'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-term-meta',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-term-meta', '0a1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-testimonials',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-testimonials', '923'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-tooltip',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-tooltip', '805'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-user-avatar',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-user-avatar', 'cf9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/mb-user-profile',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/mb-user-profile', '289'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/meta-box',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/meta-box', '73c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/meta-box-columns',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/meta-box-columns', 'b67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/meta-box-geolocation',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/meta-box-geolocation', '837'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/meta-box-show-hide',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/meta-box-show-hide', '8dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/meta-box-template',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/meta-box-template', '146'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-activecampaign',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-activecampaign', 'c7e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-conditional-logic',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-conditional-logic', 'f85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-excel-export',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-excel-export', '218'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-file-uploads',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-file-uploads', '05f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-layout-styles',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-layout-styles', '458'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-multi-part-forms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-multi-part-forms', 'd22'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-multilingual', '022'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-save-progress',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-save-progress', '174'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-stripe',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-stripe', '597'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-user-management',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-user-management', '9de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-webhooks',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-webhooks', '42c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ninja-forms-zapier',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ninja-forms-zapier', '0df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/notes-for-learndash',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/notes-for-learndash', 'c9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/oxyextras',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/oxyextras', 'af2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/oxygen',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/oxygen', 'bec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/oxygen-elements-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/oxygen-elements-for-woocommerce', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/oxygen-gutenberg-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/oxygen-gutenberg-integration', 'c05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/perfmatters',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/perfmatters', 'fec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/pixel-manager-pro-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/pixel-manager-pro-for-woocommerce', '981'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/polylang-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/polylang-for-woocommerce', 'e00'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/polylang-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/polylang-pro', '58c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/product-dynamic-pricing-and-discounts',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/product-dynamic-pricing-and-discounts', 'bcd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/product-video-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/product-video-for-woocommerce', '2f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/products-linked-by-variations-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/products-linked-by-variations-for-woocommerce', '70e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/qala-product-price-history',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/qala-product-price-history', '01c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/quadmenu',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/quadmenu', 'fd9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/quadmenu-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/quadmenu-pro', '2fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/request-a-quote-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/request-a-quote-for-woocommerce', '1da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/restrict-content-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/restrict-content-pro', 'f39'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/seopress',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/seopress', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/seopress-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/seopress-pro', '1a3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/slack-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/slack-for-woocommerce', 'bce'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/slider-revolution',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/slider-revolution', 'aef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/solid-security-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/solid-security-pro', 'd04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/teams-for-woocommerce-memberships',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/teams-for-woocommerce-memberships', 'dc3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/termageddon-for-mainwp',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/termageddon-for-mainwp', 'b37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/the-plus-addons-for-elementor-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/the-plus-addons-for-elementor-pro', '917'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/top-bar-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/top-bar-for-woocommerce', '653'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/translatepress-business',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/translatepress-business', 'add'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/translatepress-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/translatepress-multilingual', 'ff2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/tutor-lms-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/tutor-lms-pro', 'f95'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/ultimate-addons-for-elementor-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/ultimate-addons-for-elementor-pro', '1bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/updraftplus-backup-restore',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/updraftplus-backup-restore', '5e3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/userpro-5-1-11',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/userpro-5-1-11', '26d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/webinarpress-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/webinarpress-pro', 'c87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wholesale-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wholesale-for-woocommerce', 'd37'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-additional-variation-images',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-additional-variation-images', 'c67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-advanced-notifications',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-advanced-notifications', '6f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-all-products-for-subscriptions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-all-products-for-subscriptions', 'bc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-appointments',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-appointments', '3fd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-back-in-stock-notifications',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-back-in-stock-notifications', 'd65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-bookings',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-bookings', '74c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-bulk-stock-management',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-bulk-stock-management', 'bc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-checkout-add-ons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-checkout-add-ons', '236'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-checkout-field-editor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-checkout-field-editor', 'e4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-composite-products',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-composite-products', 'ae8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-conditional-shipping-and-payments',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-conditional-shipping-and-payments', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-cost-of-goods',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-cost-of-goods', '247'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-deposits',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-deposits', '33a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-dynamic-pricing',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-dynamic-pricing', '104'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-e-mail-attachments-by-inoplugs',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-e-mail-attachments-by-inoplugs', '5ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-email-customizer',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-email-customizer', '8f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-eu-vat-number',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-eu-vat-number', 'e19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-google-analytics-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-google-analytics-pro', '142'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-google-product-feed',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-google-product-feed', 'a85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-local-pickup-plus',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-local-pickup-plus', '575'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-mailchimp-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-mailchimp-integration', '0b5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-measurement-price-calculator',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-measurement-price-calculator', '188'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-memberships',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-memberships', 'ffc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-min-max-quantities',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-min-max-quantities', 'cc8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-name-your-price',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-name-your-price', 'b7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-one-page-checkout',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-one-page-checkout', '792'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-order-status-manager',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-order-status-manager', 'b2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-payment-gateway-based-fees',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-payment-gateway-based-fees', 'd0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-pdf-invoices',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-pdf-invoices', '0af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-pdf-watermark',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-pdf-watermark', '379'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-points-and-rewards',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-points-and-rewards', 'da8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-pre-orders',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-pre-orders', '488'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-price-per-unit-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-price-per-unit-pro', '731'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-add-ons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-add-ons', 'd06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-add-ons-ultimate',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-add-ons-ultimate', '192'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-bundles',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-bundles', '519'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-recommendations',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-recommendations', '730'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-reviews-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-reviews-pro', '0c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-product-vendors',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-product-vendors', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-sequential-order-numbers-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-sequential-order-numbers-pro', 'b8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-shipping-per-product-v2',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-shipping-per-product-v2', '0cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-smart-coupons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-smart-coupons', '920'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-social-login',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-social-login', '177'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-subscription-downloads',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-subscription-downloads', 'c6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-subscriptions',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-subscriptions', 'c2f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-tab-manager',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-tab-manager', 'f76'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-table-rate-shipping',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-table-rate-shipping', '124'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-url-coupons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-url-coupons', 'd0e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-warranty-requests',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-warranty-requests', 'abd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-wishlists',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-wishlists', 'd61'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/woocommerce-ws-form-pro-product-add-ons',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/woocommerce-ws-form-pro-product-add-ons', '0d1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-acf-export-add-on-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-acf-export-add-on-pro', '5e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-gravity-forms-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-gravity-forms-add-on', 'f2b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-jetengine-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-jetengine-add-on', 'aa0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-meta-box-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-meta-box-add-on', '846'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-pro', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-user-export-add-on-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-user-export-add-on-pro', '49e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-export-woocommerce-export-add-on-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-export-woocommerce-export-add-on-pro', '7f6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-acf-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-acf-add-on', '84f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-gravity-forms-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-gravity-forms-add-on', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-jetengine-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-jetengine-add-on', 'acb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-link-cloaking-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-link-cloaking-add-on', 'cc5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-meta-box-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-meta-box-add-on', '77f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-pro', '23c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-user-import-add-on-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-user-import-add-on-pro', '4d7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-all-import-woocommerce-import-add-on-pro',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-all-import-woocommerce-import-add-on-pro', 'a64'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system', '11a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-advanced-booking-restrictions-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-advanced-booking-restrictions-add-on', '547'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-authorize-net-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-authorize-net-add-on', 'f50'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-booking-manager',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-booking-manager', '84c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-calendar-organiser',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-calendar-organiser', 'af5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-contracts',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-contracts', '9f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-coupons-discounts-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-coupons-discounts-add-on', '461'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-customers',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-customers', 'b30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-email-reminders-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-email-reminders-add-on', 'f58'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-gopay-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-gopay-add-on', '0ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-inventory',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-inventory', '67c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-invoices',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-invoices', '835'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-mollie',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-mollie', '639'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-multiple-currencies',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-multiple-currencies', '5db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-paypal-buttons-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-paypal-buttons-add-on', '19f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-pricelabs',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-pricelabs', 'fd4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-redsys-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-redsys-add-on', 'b84'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-reporting-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-reporting-add-on', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-search-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-search-add-on', 'be3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-sms-notifications',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-sms-notifications', '24d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-square-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-square-add-on', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-stripe-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-stripe-add-on', 'e48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-booking-system-woocommerce-add-on',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-booking-system-woocommerce-add-on', 'dfe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder', '1e2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-beaver-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-beaver-builder', 'f44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-bricks',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-bricks', 'b72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-caching',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-caching', 'c4d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-elementor',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-elementor', 'eb4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-learndash',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-learndash', 'ecf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-map-facet',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-map-facet', '62e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-meta-box',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-meta-box', '6de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-multilingual', '678'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-oxygen',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-oxygen', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-grid-builder-pods',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-grid-builder-pods', '233'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-rocket',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-rocket', '270'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wp-rocket-integration',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wp-rocket-integration', 'd89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpbakery-page-builder',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpbakery-page-builder', 'cfa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpforms-multilingual',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpforms-multilingual', 'c8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-all-import',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-all-import', '0da'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-cms-navigation',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-cms-navigation', '02b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-media-translation',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-media-translation', 'd1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-multilingual-cms',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-multilingual-cms', '26c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-multilingual-multicurrency-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-multilingual-multicurrency-for-woocommerce', '4a5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-seo',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-seo', '8c7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/wpml-string-translation',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/wpml-string-translation', '0d0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/yaymail-pro-woocommerce-email-customizer',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/yaymail-pro-woocommerce-email-customizer', '6fa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/yith-infinite-scrolling-premium',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/yith-infinite-scrolling-premium', 'dd3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/yith-woocommerce-ajax-product-filter-premium',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/yith-woocommerce-ajax-product-filter-premium', '6d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/yoast-seo-premium',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/yoast-seo-premium', '95e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/yoast-seo-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/yoast-seo-woocommerce', '43f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/bovitmenyek/zapier-integration-for-woocommerce',
                component: ComponentCreator('/docs/tudasbazis/bovitmenyek/zapier-integration-for-woocommerce', '288'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/', 'aae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/acorn',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/acorn', '29b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/adminer',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/adminer', '199'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/bedrock',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/bedrock', 'e71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/bongeszo-firefox-developer-edition',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/bongeszo-firefox-developer-edition', '497'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/composer',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/composer', '6f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/cursor',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/cursor', 'eec'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/ddev',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/ddev', 'acd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/debug-bar',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/debug-bar', 'eb1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/deployer',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/deployer', '4c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/devkinsta',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/devkinsta', '8bb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/esbuild',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/esbuild', '70c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/github-actions',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/github-actions', '0cb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/localwp',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/localwp', '231'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/pest',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/pest', '1e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/phpcs-wpcs',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/phpcs-wpcs', '3fe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/phpstan',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/phpstan', 'ba4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/phpstorm',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/phpstorm', '612'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/phpunit',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/phpunit', 'e1b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/playwright',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/playwright', '8e5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/query-monitor',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/query-monitor', '6e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/sage',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/sage', '46c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/trellis',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/trellis', 'd43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/vite',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/vite', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/vscode',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/vscode', '50e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/wordpress-playground',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/wordpress-playground', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/wp-cli',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/wp-cli', '714'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/wpackagist',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/wpackagist', '945'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/fejlesztoi-eszkozok/xdebug',
                component: ComponentCreator('/docs/tudasbazis/fejlesztoi-eszkozok/xdebug', '69f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/', '604'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/1password',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/1password', '227'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/affinity',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/affinity', '6cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/anydesk',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/anydesk', 'b26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/bitwarden',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/bitwarden', '491'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/coolors',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/coolors', 'ba9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/figma',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/figma', '1f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/font-awesome',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/font-awesome', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/github-copilot',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/github-copilot', '9e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/github-desktop',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/github-desktop', 'cf0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/gtmetrix',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/gtmetrix', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/insomnia',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/insomnia', '070'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/iterm2',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/iterm2', '0a6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/postman',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/postman', 'c51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/tableplus',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/tableplus', '7aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/toggl-track',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/toggl-track', '340'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hasznos-eszkozok/warp',
                component: ComponentCreator('/docs/tudasbazis/hasznos-eszkozok/warp', 'a04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/', 'd20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/cURL-error-60',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/cURL-error-60', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/', 'b06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/learndash-quiz-karakterkeszlet-problemak-megoldasa',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/learndash-quiz-karakterkeszlet-problemak-megoldasa', 'e36'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/megoldas-az-elementor-szerkeszto-nem-tolt-be-szurke-hatter-lathato',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/premium-bovitmenyek/megoldas-az-elementor-szerkeszto-nem-tolt-be-szurke-hatter-lathato', 'e7d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/', '21f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/a-kovetett-hivatkozas-ervenyessege-lejart',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/a-kovetett-hivatkozas-ervenyessege-lejart', '13d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/bovitmeny-telepitesi-hiba',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/bovitmeny-telepitesi-hiba', '7eb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/hibakereses-wordpress-ben',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/hibakereses-wordpress-ben', '15d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/mysql-index-auto-increment',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/mysql-index-auto-increment', '1e0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/hibaelharitas/wordpress/sablon-telepitesi-hiba',
                component: ComponentCreator('/docs/tudasbazis/hibaelharitas/wordpress/sablon-telepitesi-hiba', 'bd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/', '866'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/', 'e8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/all-in-one-wp-migration-koltoztetes',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/all-in-one-wp-migration-koltoztetes', 'b25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/all-in-one-wp-migration-url-koltoztetes',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/all-in-one-wp-migration/all-in-one-wp-migration-url-koltoztetes', 'ab5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/AutomateWoo/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/AutomateWoo/', 'd19'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/AutomateWoo/mi-az-automatewoo',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/AutomateWoo/mi-az-automatewoo', 'e8f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/AutomateWoo/workflow-keszitese',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/AutomateWoo/workflow-keszitese', 'ab6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/', 'b28'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/Elementor flex konténer',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/Elementor flex konténer', '969'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/Elementor Workflow hatékonyság',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/Elementor Workflow hatékonyság', '1d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/elementor-urlap-checkbox-limitacio',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/elementor-urlap-checkbox-limitacio', '3cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/Toggle widget lapozás',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/Toggle widget lapozás', '66c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/elementor/Ultimate Header',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/elementor/Ultimate Header', '577'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/github/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/github/', 'e5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/github/github-kezdoknek/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/github/github-kezdoknek/', '42c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/github/hogyan-tolts-fel-github-ra/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/github/hogyan-tolts-fel-github-ra/', '89f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/JetEngine/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/JetEngine/', '899'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/JetEngine/JetEngine Áttekintő',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/JetEngine/JetEngine Áttekintő', '00b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/JetEngine/jetengine-cct-relations-jfb',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/JetEngine/jetengine-cct-relations-jfb', 'e8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/JetEngine/Praktikák/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/JetEngine/Praktikák/', '628'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/JetEngine/Praktikák/Meta vs taxonomy',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/JetEngine/Praktikák/Meta vs taxonomy', '78a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/', 'ba5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/checkoutwc-adoszam-hozzaadasa-a-penztar-oldalhoz',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/checkoutwc-adoszam-hozzaadasa-a-penztar-oldalhoz', 'fcc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/sms-ertesites-amelia-bovitmenyben',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/premium-bovitmenyek/sms-ertesites-amelia-bovitmenyben', 'b4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/uzemeltetes/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/uzemeltetes/', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/uzemeltetes/wordpress-telepitese-konnyeden-egy-telepito-fajl-segitsegevel',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/uzemeltetes/wordpress-telepitese-konnyeden-egy-telepito-fajl-segitsegevel', 'b32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/wordpress/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/wordpress/', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/wordpress/child-sablon',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/wordpress/child-sablon', '2f1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/wordpress/child-sablon-function-php-fajljanak-a-modositasa',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/wordpress/child-sablon-function-php-fajljanak-a-modositasa', '1f4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/wp-all-impot-export/',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/wp-all-impot-export/', 'a79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/oktatoanyagok/wp-all-impot-export/cron-job-beallitasa',
                component: ComponentCreator('/docs/tudasbazis/oktatoanyagok/wp-all-impot-export/cron-job-beallitasa', '586'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/', 'b27'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/', 'b6d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/divi',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/divi', '29a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/elementor',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/elementor', 'c7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/kadence',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/kadence', 'f72'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/woocommerce',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/woocommerce', '5ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/wordpress',
                component: ComponentCreator('/docs/tudasbazis/szerver-tarhely/ajanlott-tarhelybeallitasok/wordpress', '8ab'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
