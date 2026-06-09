import { getDepartments } from "@/services/department.service";
import Image from "next/image";

export default async function Home() {
  const departments = await getDepartments();

  return (
    <main className="p-6">
      <h1>Departments</h1>

      <pre>{JSON.stringify(departments, null, 2)}</pre>
    </main>
  );
}
