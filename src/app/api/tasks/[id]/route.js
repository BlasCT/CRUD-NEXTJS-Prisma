import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request, { params }) {
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id), //tiene que transformarse en entero
    },
  });
  return NextResponse.json(task);
}

export async function PUT(request, { params }) {
  const data = await request.json();
  const updateTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: {
      title: data.title,
      description: data.description,
    },
  });
  return NextResponse.json(updateTask);
}

export async function DELETE(request, { params }) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json(error);
  }
}
