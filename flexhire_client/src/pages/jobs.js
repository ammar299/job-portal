import React, { useState, useEffect } from 'react';
import JobTableComponent from "../components/JobTableComponent";

function Job() {
    // Define state to hold the fetched data
    const [jobs, setJobs] = useState([]);

    // Fetch data from the localhost:3000/projects endpoint when the component mounts
    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then(response => response.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching projects:', error));
    }, []);

    return (
        <div>
            <JobTableComponent jobs={jobs.contracts} />
        </div>
    );
}

export default Job;
