import CustomDialog from "@/components/CustomDialog";
import AddForm from "@/components/AddForm";
import TodoCard from "@/components/TodoCard";

export default function Home() {
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
        <TodoCard
          Id="1"
          Title="Save the world"
          Description="Solving World Hunger"
        />
      </div>
    </>
  );
}
