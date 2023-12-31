"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "@/lib/zodSchema";
import * as z from "zod";

//shadcn ui
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type TodoItemProp = {
  Id: string;
  Description: string;
  Title: string;
};

export default function AddForm({ Id, Title, Description }: TodoItemProp) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "Something",
      description: "Something",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="I want to save 500 bunnies" {...field} />
              </FormControl>
              <FormDescription>This is your Todo Item Title.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="It will make me alive and justify I am a good person"
                  {...field}
                />
              </FormControl>
              <FormDescription>Item Desciption.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="button" className="bg-green-600 hover:bg-green-500">
          Change
        </Button>
      </form>
    </Form>
  );
}
