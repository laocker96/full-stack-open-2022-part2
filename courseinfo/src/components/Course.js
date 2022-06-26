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

    const calculateSum = () => {
        let sum = 0;
        course.parts.forEach(part => sum += part.exercises);
        return sum;
    };

    return (
        <div>
            <Header courseName={course.name} />
            <Content parts={course.parts} />
            <Total sum={calculateSum()} />
        </div>
    );

}

export default Course;