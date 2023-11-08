import TaskCard from "@/components/TaskCard";
import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

async function loadTasks() {
  //Para obtener los datos son de dos formas la primera
  //1. Obteniendo directamente de la base de datos
  //2. haciendo una petición HTTP /api/tasks
  //ejemplo del primer caso: const tasks = await prisma.task.findMany()
  // const res = await fetch("http://localhost:3000/api/tasks", {
  //   method: "GET",
  //   headers: {
  //     "content-type": "application/json",
  //   },
  // });
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

async function HomePage() {
  const res = await loadTasks();
  const tasks = await res.json();
  return (
    <section className="container mx-auto">
      <div className="grid grid-cols-3 gap-3 mt-10">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
}

export default HomePage;
