# React Timeline Component

This project is a customizable timeline component built with React. It allows you to display a list of events with corresponding dates, descriptions, and time, using a visually appealing layout with support for small, medium, and large views.

## Features

- Display a series of events with their date, time, title, and description.
- Adjustable size: small, medium, and large views for different screen sizes or use cases.
- Easily customizable styles using CSS modules.



example :

import { Timeline } from 'reactjs-timeline-component';


import './App.css'
import { Timeline } from 'reactjs-timeline-component';

function App() {
  const data = [
    {
      "date": "2024-08-22T10:30:00", 
      "title": "Project Kickoff",
      "desc": "The project officially begins with team assignments and goals outlined."
    },
    {
      "date": "2024-09-01T15:00:00",
      "title": "Design Phase Complete",
      "desc": "The design phase has been completed, including all wireframes and prototypes."
    },
    {
      "date": "2024-10-05T12:00:00",
      "title": "Development Start",
      "desc": "Development for the core features has begun, focusing on the backend first."
    },
    {
      "date": "2024-11-20T09:00:00",
      "title": "Beta Release",
      "desc": "The beta version of the product is released for internal testing."
    },
    {
      "date": "2025-01-15T17:30:00",
      "title": "Launch",
      "desc": "The product is officially launched to the public."
    }
  ];

  return (
    <>
      <Timeline items={data} size="lg" />
    </>
  );
}

export default App;



![image](https://github.com/user-attachments/assets/3519a753-addd-4630-a968-200f7ae06286)

