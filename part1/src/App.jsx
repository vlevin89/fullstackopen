const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content part={part1} num_exercises={exercises1} />
      <Content part={part2} num_exercises={exercises2} />
      <Content part={part3} num_exercises={exercises3} />

      <Total num1={exercises1} num2={exercises2} num3={exercises3} />
    </div>
  )
}

const Total = (props) => {
console.log(props)
return (
      <p>
      Number of exercises {props.num1 + props.num2 + props.num3}</p>
  )
}

const Content = (props) => {
console.log(props)
return (

<p> {props.part} {props.num_exercises} </p>
  )
}


const Header = () => {
  const course = 'Half Stack application development'
  return (
<h1> {course} </h1>

    )
}

export default App