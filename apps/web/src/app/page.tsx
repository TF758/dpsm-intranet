import { getDepartments } from "@/services/department.service";
import Image from "next/image";

export default async function Home() {
  const departments = await getDepartments();

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Departments</h1>

      <pre className="rounded-lg border bg-card p-4 text-card-foreground overflow-auto">
        {JSON.stringify(departments, null, 2)}
      </pre>
    </main>
  );
}
