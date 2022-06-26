const Header = ({ courseName }) => <h1>{courseName}</h1>

const Total = ({ sum }) => <p>total of {sum} exercises</p>

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

    const initialSum = 0;
    const totalSum = course.parts.reduce((result, part) => result + part.exercises, initialSum);

    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total sum={totalSum} />
        </div>
    );

}

export default Course;