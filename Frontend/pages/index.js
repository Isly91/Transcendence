export async function getServerSideProps() {
	const res = await fetch('http://backend:3001/users');
	const users = await res.json();
  
	return { props: { users } };
  }
  
  export default function Home({ users }) {
	return (
	  <div>
		<h1>Users</h1>
		<ul>
		  {users.map(user => (
			<li key={user.id}>{user.name} ({user.email})</li>
		  ))}
		</ul>
	  </div>
	);
  }
  