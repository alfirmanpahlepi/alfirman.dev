"use client";

import { Timeline, TimelineEvent } from "./TimeLineExp";

const CurrentTimeLineExp = () => {
  return (
    <Timeline>
      <TimelineEvent active>
        <TimelineEvent.Title>
          <strong>Frontend Developer</strong>
          <br />
          PT Kode Inovasi Teknologi (CODR) · Feb 2023 - Currently
        </TimelineEvent.Title>
      </TimelineEvent>

      <TimelineEvent>
        <TimelineEvent.Title>
          <strong>Frontend Developer</strong>
          <br />
          Erloom Digital Venture · Jan 2022 - Jan 2023
        </TimelineEvent.Title>
      </TimelineEvent>
      <TimelineEvent last>
        <TimelineEvent.Title>
          <strong>Frontend Developer</strong>
          <br />
          PT Permata Indonesia · Jan 2022 - Jan 2023
        </TimelineEvent.Title>
      </TimelineEvent>
    </Timeline>
  );
};

export default CurrentTimeLineExp;
