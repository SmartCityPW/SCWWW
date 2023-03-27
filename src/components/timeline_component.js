import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { TimelineOppositeContent } from '@mui/lab';

import szczur from './szczur.jpg';

export default function BasicTimeline() {
  return (
    <Timeline position='left'>
      {/* 2023 */}
      {/* <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          2023
        </TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          <img src={szczur} alt="React Image" />
          Członkowie projektu LIFT wyjechali na konferencję do LA
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Konferencja w Los Angeles
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          W trakcie wydarzenia na Gmachu Głównym PW wystawiliśmy projekt LIFT (znowu XD)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Dzień Dostępności PW
        </TimelineContent>
      </TimelineItem>

      {/* 2022 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2022</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Wyjazd do Krakowa na finał konkursu 
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Konkurs EKOinnowatorzy
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          CZŁONKOWIE PROJEKTU LIFT ...
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Konferencja "Jak wyleczyć nasze miasta?"
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>
          Członkowie projektu LIFT wyjechali na konferencję do LA
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Konferencja w Los Angeles
        </TimelineContent>
      </TimelineItem>

      {/* 2021*/}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2021</TimelineContent>
      </TimelineItem>
      {/* 2020 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2020</TimelineContent>
      </TimelineItem>
      {/* 2019 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2019</TimelineContent>
      </TimelineItem>
      {/* 2018 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2018</TimelineContent>
      </TimelineItem>
      {/* 2017 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>2017</TimelineContent>
      </TimelineItem>
      {/* 2016 */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant='outlined'/>
        </TimelineSeparator>
        <TimelineContent>2016</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
