import prisma from "@/prisma/client";

async function AssigneeSelect() {
  const users = await prisma.user.findMany({ orderBy: { name: "asc" } });
  return (
    <div>
      <select
        defaultValue="suggestions"
        className="select focus:outline-offset-0 focus:outline-indigo-600 border-2 rounded-md text-indigo-600 border-indigo-600 w-full max-w-xs"
      >
        <option disabled value="suggestions">
          Assignee...
        </option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.email}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AssigneeSelect;
