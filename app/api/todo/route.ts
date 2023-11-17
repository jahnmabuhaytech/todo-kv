import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { TodoList, todoItemSchema } from "@/lib/zodSchema";
import { redirect } from "next/navigation";

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

export async function POST(request: NextRequest) {
  const TodoAll = await kv.keys("*");
  if (request) {
    const data = await request.json();

    const fData = {
      title: data.title,
      id: TodoAll.length + 1,
      description: data.description,
    };
    await kv.hset(data.title, fData).catch((err) => {
      return NextResponse.json({
        status: 400,
      });
    });
  }

  return NextResponse.json({
    status: 200,
  });
}

export async function DELETE(request: NextRequest) {
  const data = await request.json();
  await kv.del(data.title);

  return NextResponse.json(redirect("/"), {
    status: 200,
  });
}
