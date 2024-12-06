import { auth, currentUser } from '@clerk/nextjs/server'

export default async function DashboardPage() {
  const { userId } = await auth()
  const user = await currentUser();

   /* show information user 
   console.log(user); */
  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }

  return (
    <div className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-lg shadow-lg  dark:bg-gray-800 ">
  <h1 className="text-3xl font-bold text-gray-800 text-center dark:text-white">Welcome</h1>
  <ul className="mt-6 space-y-4 ">
    <li className="flex items-center">
      <span className="font-semibold text-gray-600 w-32 dark:text-white">First Name:</span>
      <span className="text-gray-700 dark:text-white">{user.firstName}</span>
    </li>
    <li className="flex items-center">
      <span className="font-semibold text-gray-600 w-32 dark:text-white">Last Name:</span>
      <span className="text-gray-700 dark:text-white">{user.lastName}</span>
    </li>
    <li className="flex items-center">
      <span className="font-semibold text-gray-600 w-32 dark:text-white">Email:</span>
      <span className="text-gray-700 dark:text-white">{user.emailAddresses[0].emailAddress}</span>
    </li>
  </ul>
</div>

  );
}