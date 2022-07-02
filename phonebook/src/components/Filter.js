const Filter = ({ searchedName, setSearchedName }) => {

    const handleSearchedNameChange = (event) => {
        setSearchedName(event.target.value);
    }
    return (
        <div>
            <h2>Phonebook</h2>
            filter shown with <input value={searchedName} onChange={handleSearchedNameChange} />
        </div >
    );
}

export default Filter;