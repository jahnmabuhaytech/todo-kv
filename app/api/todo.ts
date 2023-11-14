import { kv } from "@vercel/kv";

export async function Get() {
  try {
    const TodoList = await kv.keys("*");
    console.log(TodoList);
  } catch (error) {
    // Handle errors
  }
}
