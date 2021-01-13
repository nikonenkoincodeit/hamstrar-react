import { useRouteMatch } from 'react-router-dom';

function Users() {
  const url = useRouteMatch().url;
 
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li>
          <a href={`${url}/ivanov`}>Ivanov</a>
        </li>
        <li>
          <a href={`${url}/petrov`}>Petrov</a>
        </li>
      </ul>
    </>
  );
}

export default Users;
