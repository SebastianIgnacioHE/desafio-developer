const UserCard = ({ user, users, setUsers, setFilteredUsers }) => {
  const { picture, name, gender, dob, email, login, id } = user;

  const handleDeleteUser = () => {
    const filteredArray = users.filter((user) => user.id.value !== id.value);
    setUsers(filteredArray);
    setFilteredUsers(filteredArray);
  };

  return (
    <div className="user">
      <img src={picture.large} alt={name.title} />

      <div>
        <h4>
          {name.first} {name.last}
        </h4>
        <p className="gender">{gender}</p>
        <p>Edad: {dob.age}</p>
        <p>{email}</p>
        <p>Usuario: {login.username}</p>

        <button onClick={handleDeleteUser}>x</button>
      </div>
    </div>
  );
};

export default UserCard;
