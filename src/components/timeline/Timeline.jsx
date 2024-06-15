import React from 'react';
import './Timeline.css'; 

const education = [
  { id: 1, year: '2024 - In view', degree: 'Bachelor of Science in Computer Science', school: 'Global Wealth University Lome Togo' },
  { id: 2, year: '2023', degree: 'Awarded by David J. Malan', school: 'Havard Univerty CS50x' },
  { id: 3, year: '2021', degree: 'British Columbia', school: 'Ministry of Justice, British Columbia, Canada' },
];

const jobExperience = [
  { id: 1, year: '2024 - Present', title: 'Software Engineer', company: 'Miatos Solutions' },
  { id: 2, year: '2023 - Three Months', title: 'Junior Software Engineering Intern', company: 'ProjectStack (Remote)' },
  { id: 3, year: '2023 - Three Months', title: 'Frontend Development Intern', company: 'Zuri CDT (Remote)' },
];

const Timeline = () => {
  return (
    <div className="timeline-container my-10 p-5 lg:grid lg:grid-cols-2 lg:gap-8">
      <div>
        <h2 className="text-xl font-bold mb-5">Education</h2>
        {education.map((item) => (
          <div key={item.id} className="timeline-item mb-8 flex lg:flex-row-reverse">
            <div className="timeline-content bg-white p-5 rounded-lg shadow-md max-w-xs w-full ml-6 lg:ml-0 lg:mr-6">
              <h3 className="text-lg font-semibold mb-2 text-[#6371F6]">{item.degree}</h3>
              <time className="text-sm text-gray-500">{item.year}</time>
              <p className="mt-2">{item.school}</p>
            </div>
            <div className="timeline-marker w-10 h-10 rounded-full bg-[#6371F6] flex items-center justify-center text-white font-bold absolute left-0 lg:left-auto lg:hidden">
              {item.id}
            </div>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-5">Job Experience</h2>
        {jobExperience.map((job) => (
          <div key={job.id} className="timeline-item mb-8 flex lg:flex-row-reverse">
            <div className="timeline-content bg-white p-5 rounded-lg shadow-md max-w-xs w-full ml-6 lg:ml-0 lg:mr-6">
              <h3 className="text-lg font-semibold mb-2 text-[#6371F6]">{job.title}</h3>
              <time className="text-sm text-gray-500">{job.year}</time>
              <p className="mt-2">{job.company}</p>
            </div>
            <div className="timeline-marker w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-bold absolute left-0 lg:left-auto lg:hidden">
              {job.id}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
