const Header = ({ courseName }) => <h1>{courseName}</h1>

const Part = ({ part }) =>
    <p>
        {part.name} {part.exercises}
    </p>

const Content = ({ parts }) =>
    <>
        {parts.map(part => (
            <Part key={part.id} part={part} />
        ))}
    </>

const Course = ({ course }) => {
    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
        </div>
    );

}

export default Course;