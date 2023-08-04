import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'
import ExtLink from '../components/ext-link'

const img = require('../../assets/buildings.png')

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <div className={sharedStyles.imageContainer}>
          <img src="/buildings.png" />
        </div>
        <h2>Mark Windsor - Software Engineer</h2>
        <div className="explanation">
          <p>
            A knowledge base and collection of writings as I attempt to
            understand the world through a lens of{' '}
            <ExtLink href="https://en.wikipedia.org/wiki/Economics">
              economics
            </ExtLink>
            ,{' '}
            <ExtLink href="https://en.wikipedia.org/wiki/Technology">
              technology
            </ExtLink>{' '}
            and
            <ExtLink href="https://en.wikipedia.org/wiki/Politics">
              {' '}
              politics
            </ExtLink>
            .
          </p>
          <p>
            Student of the past and future. Interested to see what's in store
            for us.
          </p>
        </div>
      </div>
    </>
  )
}
