const App = () => {
  const course = 'Half Stack application development'

  const parts = {
    
      part1:'Fundamentals of React',
      part2:'Using props to pass data',
      part3:'State of a component',
  }

  const ex = {
    exercises1:10,
    exercises2:7,
    exercises3:14,
  }

  const Header = ({course}) => {
  
    return(
      <div>
        <h1>{course}</h1>
      </div>
    );
  } 

  const Content = ({parts}) => {
      
    return(
      <div>
        <p>{parts.part1}</p>
        <p>{parts.part2}</p>
        <p>{parts.part3}</p>
      </div>
      );
  }

  const Total = ({ex}) =>{
   
    return(
      <div>
        <p>Number of exercises: {ex.exercises1 + ex.exercises2 + ex.exercises3}</p>
      </div>
    )
  }
  
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total ex={ex} />
    </div>
  )
}

export default App