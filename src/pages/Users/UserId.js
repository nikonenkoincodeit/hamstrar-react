import { useParams } from 'react-router-dom';

export default function UserId() {
  const { nameUser } = useParams();
  console.log(nameUser);
  return <h3>User {nameUser}</h3>;
}
