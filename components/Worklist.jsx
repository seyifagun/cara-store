import "@styles/WorkList.scss"
import WorkCard from "./WorkCard"
import DummyCard from "./DummyCard"
import {CardImage} from "./HeroImages"

const WorkList = ({ data }) => {

  return (
    <>
    <div className="work-list">

      {data.map((work) => (
        <WorkCard
          key={work._id}
          work={work}
        />
      ))}
    </div>
    </>
  )
}

export default WorkList;