import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
//import Envelope from '../components/svgs/envelope'
//import LinkedIn from '../components/svgs/linkedin'
import Facebook from '../components/svgs/facebook'

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
//  {
//    Comp: Envelope,
//    alt: 'envelope icon',
//    link: 'mailto:jj@jjsweb.site?subject=Notion Blog',
//  },
]

export default () => (
  <>
    <Header titlePre="Contact" />
    <div className={sharedStyles.layout}>
      <div className={contactStyles.avatar}>
        <img src="/avatar.png" alt="avatar with letters taful"/>
      </div>

      <h1 style={{ marginTop: 0 }}>Contact</h1>

      <div className={contactStyles.name}>
	  hamlet @{' '} TAFUL
      </div>

      <div className={contactStyles.links}>
        {contacts.map(({ Comp, link, alt }) => {
          return (
            <ExtLink key={link} href={link} aria-label={alt}>
              <Comp height={32} />
            </ExtLink>
          )
        })}
      </div>
    </div>
  </>
)
