function Student(props) {
    return ( <
        div className = "student-card" >
        <
        h2 > { props.name } < /h2> <
        p > Roll Number: { props.rollNo } < /p> <
        p > Department: { props.department } < /p> <
        p > Year: { props.year } < /p> <
        p > College: { props.college } < /p> <
        /div>
    );
}

export default Student;