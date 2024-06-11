import { SetStateAction, useState } from "react";
import "./Jobs.css";
import TabsButton from "../Tabs/TabsButton";
import TabList from "../Tabs/TabList";
import Section from "../Section/Section";
import { EXAMPLES } from "../../data";

interface Job {
  nickname: string;
  title: string;
  company: string;
  date: string;
  description: string;
  code: string;
}

export default function Jobs() {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  function handleSelect(selectedButton: Job, currentJob: Job | null) {
    if (selectedButton === currentJob) {
      setSelectedJob(null);
    } else {
      setSelectedJob(selectedButton);
    }
  }

  let tabContent: JSX.Element | null = null;

  if (selectedJob) {
    tabContent = (
      <div id="tab-content">
        <h3>{selectedJob.title}</h3>
        <p>{selectedJob.description}</p>
        <pre>
          <h3>Technologies & Skills</h3>
          <code>{selectedJob.code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Section title="Job History" id="examples">
        <p>Select a position to learn more.</p>
        <TabList
          ButtonsContainer="div"
          buttons={
            <>
              {EXAMPLES.map((job) => (
                <TabsButton
                  key={job.nickname}
                  onClick={() => handleSelect(job, selectedJob)}
                  iSelected={selectedJob === job}
                  tabContent={tabContent}
                >
                  <span className="title">{job.company}</span>
                  <span className="title-date">{job.date}</span>
                </TabsButton>
              ))}
            </>
          }
        >
          {tabContent}
        </TabList>
      </Section>
    </>
  );
}

