import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-5 items-center">
      <h1 className="text-2xl sm:text-3xl font-medium">
        <Link href="/">CRUD with Redux</Link>
      </h1>
      <ul className="flex items-center gap-5 text-lg sm:text-xl text-gray-200">
        <li className="hover:text-red-600 transition-colors ease-in">
          <Link href="/create-task">Create Task</Link>
        </li>
        <li className="hover:text-green-600 transition-colors ease-in">
          <Link href="/">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
