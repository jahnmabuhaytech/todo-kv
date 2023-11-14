import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { TodoList, todoItemSchema } from "@/lib/zodSchema";
import z from "zod";

export async function GET(request: Request) {
  const TodoAll = await kv.keys("*");

  let TodoList: TodoList[] = [];

  await Promise.all(
    TodoAll.map(async (Todo) => {
      const TodoItem: unknown = await kv.hgetall(Todo);
      if (TodoItem) {
        const validatedData = todoItemSchema.parse(TodoItem);
        TodoList.push(validatedData);
      }
    })
  );

  return NextResponse.json(TodoList, {
    status: 200,
  });
}

export async function POST(request: Request) {
  const data = request.body;

  console.log(data);

  return NextResponse.json({
    status: 200,
  });
}
