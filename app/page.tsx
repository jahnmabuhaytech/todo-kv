import CustomDialog from "@/components/CustomDialog";
import AddForm from "@/components/AddForm";
import TodoCard from "@/components/TodoCard";
import { TodoList } from "@/lib/zodSchema";

export default async function Home() {
  let datas: TodoList[] = [];

  const Rawdata = await fetch("http://localhost:3000/api/todo", {
    cache: "no-store",
  });
  datas = await Rawdata.json();

  return (
    <>
      <div className="text-center p-8 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold">Todo List</h1>
        <CustomDialog
          ButtonClass="bg-green-500 hover:bg-green-400"
          ButtonName="Add"
          Title="Add Todo"
        >
          <AddForm />
        </CustomDialog>
        {datas.map((data) => (
          <TodoCard
            key={data.id.toString()}
            Id={data.id.toString()}
            Title={data.title}
            Description={data.description}
          />
        ))}
      </div>
    </>
  );
}
