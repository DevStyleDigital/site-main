import { iFollows } from '@/types/follows'
import DevStyle from '@/assets/img/devstyle.png'
import Instagram from '@/assets/img/isntagram.jpg'
import GitHub from '@/assets/img/github.png'
import Linkedin from '@/assets/img/linkedin.webp'
export const FollowsArray: iFollows[] = [
  {
    id: 1,
    label: 'Instagram',
    link: 'https://www.instagram.com/devstyled/',
    name: '@DevStyled',
    logo:DevStyle,
    img: Instagram
  },
  {
    id: 2,
    label: 'Github',
    link: 'https://github.com/DevStyleDigital',
    name: '@DevStyleDigital',
    logo:DevStyle,
    img: GitHub
  },
  {
    id: 3,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/afonso-bezerra-33b495174/',
    name: '@DevStyle',
    logo:DevStyle,
    img: Linkedin
  },
]
