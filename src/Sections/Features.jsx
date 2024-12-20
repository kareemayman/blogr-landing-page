import { Article } from "../Components/Article"

export function Features({ title = false, imgDesk, imgMob, art1Title, art1Parag, art2Title, art2Parag, id = 'features' }) {
  return (
    <div className="features overpass" id={id}>
      <div className="container">
        {title && <h1>{title}</h1>}
        <img src={imgDesk} alt={imgDesk} className="desktop"/>
        <img src={imgMob} alt={imgMob} className="mobile"/>
        <div className="article-container">
          <Article title={art1Title}>{art1Parag}</Article>
          <Article title={art2Title}>{art2Parag}</Article>
        </div>
      </div>
    </div>
  )
}
