import z, { coerce, number, string } from "zod";

export const todoItemSchema = z.object({
  id: coerce.number(),
  title: string().trim(),
  description: string().trim(),
});

export type TodoList = z.infer<typeof todoItemSchema>;

export const formSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(5, {
    message: "desciption longer than 5 characters.",
  }),
});
