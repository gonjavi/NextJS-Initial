import { useRouter } from 'next/router';

const UserProfile = () => {
  const router = useRouter();
  const obj = router.query;
  console.log(obj)
  return (
    <div>
      <h1>Profile</h1>
    </div>
  )
}

export default UserProfile;
