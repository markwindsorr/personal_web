import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/whiteBuildingsVisual.png"
          height="30%"
          width="50%"
          alt="mark windsor portfolio"
        />
        <h1>Mark Windsor</h1>
      </div>
    </>
  )
}
