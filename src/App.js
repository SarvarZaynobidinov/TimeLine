import './App.css';
import { ReactComponent as MonitorIcon } from "./assets/programming-svgrepo-com.svg"
import { ReactComponent as SchoolIcon } from "./assets/school-sharp-svgrepo-com.svg"
import timelineElements from "./TimeLineElements"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function App() {
  let monitorIconStyles = { background: "#ffb13a" };
  let schoolIconStyles = { background: "#7e4ebc" };

  return (
    <div>
      <h1 className='title'>TimeLine</h1>
      <VerticalTimeline>
        {
          timelineElements.map(element => {
            let isMonitorIcon = element.icon === "monitor";
            let showButton = element.buttonText !== undefined && element.buttonText !== null && element.buttonText !== "";
            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle={isMonitorIcon ? monitorIconStyles : schoolIconStyles}
                animate={true}
                contentArrowStyle={{ borderRight: '10px solid  white' }}
                icon={isMonitorIcon ? <MonitorIcon /> : <SchoolIcon />}
              >
                <h2 className='vertical-timeline-element-title'>{element.title}</h2>
                <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
                <p id="description">{element.description}</p>
                {showButton && <a href="/" className={`button ${isMonitorIcon ? "monitorButton" : "schoolButton"}`}>{element.buttonText}</a>}
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
    </div>
  );
}

export default App;
