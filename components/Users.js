
const Users = props => {
  console.log(props)
  return (
    <div>
      <ul className="list-group">
        {
          props.users.map(user => (
            <li key={user.id} className="list-group-item list-group-item-action">
              <h5>{user.name}</h5>
              <p>Email: {user.email}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Users;
