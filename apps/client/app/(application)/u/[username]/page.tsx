import { ProfileNotFound } from "./components/ProfileNotFound";

export default async function ProfilePage({ params }: { params: { username: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_PATH}/users/filter?key=username&value=${params.username}`
  );

  const data = await response.json();

  if (!response.ok || data.users?.length === 0) {
    return <ProfileNotFound />;
  }

  return (
    <div className="container">
      <pre>{JSON.stringify(data.users[0], null, 2)}</pre>
    </div>
  );
}
