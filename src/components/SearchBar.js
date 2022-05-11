const SearchBar = ({ users, setFilteredUsers }) => {
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;

    if (searchTerm.length !== 0) {
      const filteredArray = users.filter((user) => {
        const fullName = `${user.name.first.toLowerCase()} ${user.name.last.toLowerCase()}`;
        return fullName.includes(searchTerm.toLowerCase());
      });
      setFilteredUsers(filteredArray);
    } else {
      setFilteredUsers(users);
    }
  };

  return (
    <input
      type="text"
      placeholder="Buscar nombre"
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
