interface Tool {
  name: string
  imgAlt: string
  linkName: string
  linkTo: string
  linkAria: string
}

interface ToolCategory {
  id: string
  title: string
  tools: Tool[]
}

export const toolData: ToolCategory[] = [
  {
    id: 'Inspiration',
    title: 'Inspiration',
    tools: [
      {
        name: 'landbook.png',
        imgAlt: 'Land book image',
        linkName: 'Land Book',
        linkTo: 'http://land-book.com/',
        linkAria: 'Land Book Link'
      },
      {
        name: 'onepagelove.jpg',
        imgAlt: 'One Page love image',
        linkName: 'One Page love',
        linkTo: 'https://onepagelove.com/inspiration',
        linkAria: 'One Page love link'
      },
      {
        name: 'Screenlane.png',
        imgAlt: 'Screenlane image',
        linkName: 'Screelane',
        linkTo: 'https://screenlane.com/',
        linkAria: 'Screenlane link'
      },
      {
        name: 'dribbble.png',
        imgAlt: 'Dribbble img',
        linkName: 'Dribbble',
        linkTo: 'https://dribbble.com/',
        linkAria: 'Dribble link'
      }
    ]
  },
  {
    id: 'Colors',
    title: 'Colors',
    tools: [
      {
        name: 'coolors.png',
        imgAlt: 'Coolors image',
        linkName: 'Coolors Contrast Checker',
        linkTo: 'https://coolors.co/contrast-checker/112a46-acc8e5',
        linkAria: 'Coolors Link'
      },
      {
        name: 'opencolor.png',
        imgAlt: 'Open Color image',
        linkName: 'Open Color',
        linkTo: 'https://yeun.github.io/open-color/',
        linkAria: 'Open Color link'
      },
      {
        name: 'tailwind.png',
        imgAlt: 'TailwindCSS image',
        linkName: 'TailwindCSS',
        linkTo: 'https://tailwindcss.com/docs/customizing-colors',
        linkAria: 'TailwindCSS link'
      },
      {
        name: 'flatuicolors.png',
        imgAlt: 'Flatuicolors img',
        linkName: 'Flatuicolors',
        linkTo: 'http://flatuicolors.com/',
        linkAria: 'Flatuicolors link'
      },
      {
        name: 'uicolors.png',
        imgAlt: 'UI Colors img',
        linkName: 'UI Colors',
        linkTo: 'https://uicolors.app/create',
        linkAria: 'UI Colors link'
      }
    ]
  },
  {
    id: 'Master',
    title: 'Master',
    tools: [
      {
        name: 'apple-touch-icon-60x60.png',
        imgAlt: 'Jonas Schmedtmann image',
        linkName: 'Jonas Schmedtmann',
        linkTo: 'https://codingheroes.io/resources/',
        linkAria: 'Jonas Schmedtmann'
      },
      {
        name: 'roadmapsh.png',
        imgAlt: 'Roadmap sh image',
        linkName: 'Roadmap sh',
        linkTo: 'https://roadmap.sh/frontend',
        linkAria: 'Roadmap sh link'
      },
      {
        name: 'joshwcomeau.png',
        imgAlt: 'Joshw Comeau image',
        linkName: 'Joshw Comeau',
        linkTo: 'https://www.joshwcomeau.com/',
        linkAria: 'Joshw Comeau link'
      }
    ]
  },
  {
    id: 'Icons',
    title: 'Icons',
    tools: [
      {
        name: 'heroicons.png',
        imgAlt: 'Hero Icons image',
        linkName: 'Hero Icons',
        linkTo: 'https://heroicons.com/',
        linkAria: 'Hero Icons'
      },
      {
        name: 'phosphoricons.png',
        imgAlt: 'Phosphor Icons image',
        linkName: 'Phosphor Icons',
        linkTo: 'https://phosphoricons.com/',
        linkAria: 'Phosphor Icons link'
      },
      {
        name: 'iconduck.png',
        imgAlt: 'Iconduck image',
        linkName: 'Iconduck',
        linkTo: 'https://iconduck.com/',
        linkAria: 'Iconduck link'
      },
      {
        name: 'ionicon.png',
        imgAlt: 'Ionicon image',
        linkName: 'Ionicon',
        linkTo: 'https://ionic.io/ionicons',
        linkAria: 'Ionicon link'
      },
      {
        name: 'svgrepo.png',
        imgAlt: 'SVG Repo image',
        linkName: 'SVG Repo',
        linkTo: 'https://www.svgrepo.com/',
        linkAria: 'SVG Repo link'
      }
    ]
  },
  {
    id: 'Fonts',
    title: 'Fonts',
    tools: [
      {
        name: 'googlefonts.png',
        imgAlt: 'Google Fonts image',
        linkName: 'Google Fonts',
        linkTo: 'https://www.google.com/fonts',
        linkAria: 'Google Fonts'
      },
      {
        name: 'fontsquirrel.jpg',
        imgAlt: 'Fontsquirrel image',
        linkName: 'Fontsquirrel',
        linkTo: 'https://www.fontsquirrel.com/',
        linkAria: 'Fontsquirrel link'
      }
    ]
  },
  {
    id: 'Images and Videos',
    title: 'Images and Videos',
    tools: [
      {
        name: 'unsplash.png',
        imgAlt: 'Unsplash image',
        linkName: 'Unsplash',
        linkTo: 'https://unsplash.com/',
        linkAria: 'Unsplash'
      },
      {
        name: 'pexels.png',
        imgAlt: 'Pexels image',
        linkName: 'Pexels',
        linkTo: 'https://www.pexels.com/',
        linkAria: 'Pexels link'
      },
      {
        name: 'undraw.png',
        imgAlt: 'unDraw image',
        linkName: 'unDraw',
        linkTo: 'https://undraw.co/illustrations',
        linkAria: 'unDraw link'
      },
      {
        name: 'randomuser.png',
        imgAlt: 'Random User Generator image',
        linkName: 'Random User Generator',
        linkTo: 'https://randomuser.me/',
        linkAria: 'Random User Generator link'
      },
      {
        name: 'themeisle.png',
        imgAlt: 'Theme Isle image',
        linkName: 'Theme Isle',
        linkTo: 'https://themeisle.com/illustrations/',
        linkAria: 'Theme Isle link'
      },
      {
        name: 'storyset.png',
        imgAlt: 'Storyset image',
        linkName: 'Storyset',
        linkTo: 'https://storyset.com/',
        linkAria: 'Storyset link'
      },
      {
        name: 'manypixels.png',
        imgAlt: 'Many Pixels image',
        linkName: 'Many Pixels',
        linkTo: 'https://www.manypixels.co/gallery',
        linkAria: 'Many Pixels link'
      }
    ]
  },
  {
    id: 'Templates',
    title: 'Templates',
    tools: [
      {
        name: 'nicepage.png',
        imgAlt: 'Nicepage image',
        linkName: 'Nicepage',
        linkTo: 'https://nicepage.com/',
        linkAria: 'Nicepage'
      },
      {
        name: 'uideck.png',
        imgAlt: 'UI Deck image',
        linkName: 'UI Deck',
        linkTo: 'https://uideck.com/templates/',
        linkAria: 'UI Deck link'
      }
    ]
  },
  {
    id: 'Challenges',
    title: 'Challenges',
    tools: [
      {
        name: 'codewell.png',
        imgAlt: 'Codewell image',
        linkName: 'Codewell',
        linkTo: 'https://www.codewell.cc/',
        linkAria: 'Codewell'
      },
      {
        name: 'frontendmentor.png',
        imgAlt: 'Frontend Mentor image',
        linkName: 'Frontend Mentor',
        linkTo: 'https://www.frontendmentor.io/challenges',
        linkAria: 'Frontend Mentor link'
      }
    ]
  },
  {
    id: 'HTML5',
    title: 'HTML5',
    tools: [
      {
        name: 'icon-mdn.png',
        imgAlt: 'HTML5 image',
        linkName: 'HTML5 Reference by MDN',
        linkTo: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element',
        linkAria: 'HTML5 link'
      },
      {
        name: 'icon-tricks.svg',
        imgAlt: 'CSS Tricks image',
        linkName: 'HTML Entity Reference by CSS-Tricks',
        linkTo: 'https://css-tricks.com/snippets/html/glyphs/',
        linkAria: 'CSS Tricks link'
      }
    ]
  },
  {
    id: 'Others',
    title: 'Others',
    tools: [
      {
        name: 'pixelarts.png',
        imgAlt: 'Piexelarts image',
        linkName: 'Pixel Art CSS',
        linkTo: 'https://pixelartcss.com/',
        linkAria: 'Piexelarts link'
      }
    ]
  }
]
