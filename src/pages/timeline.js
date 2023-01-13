import React from 'react';
import Header from '../components/header';
import BasicTimeline from '../components/timeline_component';

function Timeline() {
    return (
        <div className="App">
            <Header />
            <h1>
                Timeline
            </h1>
            <BasicTimeline></BasicTimeline>
        </div>
    );
}

export default Timeline;
