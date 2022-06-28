const Filter = ({ searchedName, handleSearchedNameChange }) => {
    return (
        <div>
            filter shown with <input value={searchedName} onChange={handleSearchedNameChange} />
        </div >
    );
}

export default Filter;