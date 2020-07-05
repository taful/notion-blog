import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import Facebook from '../components/svgs/facebook'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

const contacts = [
   {
     Comp: Twitter,
     alt: 'twitter icon',
     link: 'https://twitter.com/puhitaku',
   },
   {
     Comp: Facebook,
     alt: 'facebook icon',
     link: 'https://www.facebook.com/puhitaku/',
   },
   {
     Comp: GitHub,
     alt: 'github icon',
     link: 'https://github.com/puhitaku',
   },
   {
     Comp: LinkedIn,
     alt: 'linkedin icon',
     link: 'https://www.linkedin.com/in/takumi-sueda-110026195/',
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
