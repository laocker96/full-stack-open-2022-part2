const Persons = ({ filteredPersons }) => {
    return (
        <>
            {filteredPersons.map(person =>
                <p key={person.name}>
                    {person.name}&nbsp;{person.number}
                </p>
            )}
            {filteredPersons.length == 0 &&
                <p>No persons found</p>
            }
        </>
    );
}

export default Persons;