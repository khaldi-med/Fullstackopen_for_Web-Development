const App = () => {
  const course = 'Half Stack application development'
  
  const Part = ({name, exercises}) => {
    return(
      <div>
        <p>{name} {exercises}</p>
      </div>
    )
  } 

  const Content = () => {
    const parts = [
    {name:'Fundamentals of React', exercises:10},
    {name:'Using props to pass data', exercises:7},
    {name:'State of a component', exercises:14}
   ]
  return( 
      <div>
       <h1>{course}</h1>
        <Part name={parts[0].name} exercises={parts[0].exercises}/>
        <Part name={parts[1].name} exercises={parts[1].exercises}/>
        <Part name={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
  } 
  return(
    <>
      <Content />
    </>
  )
}

export default App