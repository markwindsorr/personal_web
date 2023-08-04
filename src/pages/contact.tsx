import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const img = require('../../assets/fed.png')

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/atlas_assistant',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/markwindsorr',
  },
  {
    Comp: LinkedIn,
    alt: 'linkedin icon',
    link: 'https://www.linkedin.com/in/markwindsorr/',
  },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:markwindsorr@atlas-finance.io',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/fed.png" alt="logo" />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          Mark Windsor - Software Engineer{' '}
          <ExtLink style={{ color: '#038CF3' }} href="https://atlas-finance.io">
            @ Atlas Finance
          </ExtLink>
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink
                style={{ color: 'white' }}
                key={link}
                href={link}
                aria-label={alt}
              >
                <Comp height={32} style={{ color: 'white' }} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
