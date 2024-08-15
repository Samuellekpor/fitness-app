import React from 'react'
import ExerciseCard from './ExerciseCard'
import SectionWrapper from './SectionWrapper'


export default function Workout(props) {
  const {workout} = props
  return (
    <SectionWrapper
      header={"Welcome to"}
      title={["The", "danger", "zone"]}
    >
      <div className='flex flex-col gap-4'>
        {workout.map((exercise, i) =>{
          return (
            <ExerciseCard i={i} key={i} exercise={exercise} />
          )
        })}
      </div>
    </SectionWrapper>
  )
}
