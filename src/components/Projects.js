import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './projects.css'

export const Projects = ({projects}) => {
    return (
        <>
        <div className='project-body' id='projects'>
        <div className='project-title'>Projects</div>
        <div className='project-container d-flex flex-wrap justify-content-center'>
        {projects.map(project => (
        <div className='project-padding' key={project.id}>
        <Card className='cards'>
            <Card.Img variant="top" src={project.image} />
            <Card.Body>
                <Card.Title>{project.name}</Card.Title>
                    <Card.Text style={{ height: '150px'}}>{project.paragraph}</Card.Text>
                    <div className='d-flex justify-content-between'>
                    <Button className='btn-success' target="_blank" href={project.location} variant="primary">Demo</Button>
                    <Button className='btn-success' target="_blank" href={project.github} variant="primary">Github</Button>
                    </div>
            </Card.Body>
        </Card>
        </div>
    ))}
    </div>
    </div>
    </>
    )
}