import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Facebook from '../components/svgs/facebook'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'
import Twitter from '../components/svgs/twitter'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/htaful',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/taful',
  },
  {
    Comp: Facebook,
    alt: 'facebook icon',
    link: 'https://www.facebook.com/hamlet.taful',
  },
]
   
export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <img
        src="/zeit-and-notion.png"
        height="85"
        width="250"
        alt="Vercel + Notion"
      />
      <h1>My Notion Blog</h1>
	  
      <Features />
	  </div>
  </>
)
