import { getEvent, getInvitation } from "@/actions/eventActions";
import { getTask, getTasks } from "@/actions/taskActions";
import { TaskFormSchema } from "@/utils/schemas/Task";
import TaskForm from "../form/TaskForm";
import { nullable, z } from "zod";
import { Task } from "@prisma/client/edge";
import EventForm from "../form/EventForm";
import { Dialog } from "@radix-ui/react-dialog";

export default async function ListContentItem({
  type,
  title,
  id,
}: {
  type: string;
  title: string;
  id: string;
}) {
  let colorClass = "";
  let textColor = "";

  const handleClick = async () => {
    let result;

    switch (type) {
      case "task":
        const task = await getTask(id);
        result = convertToTaskFormSchema(task);
        console.log(result);
        return <TaskForm task={result} id={id} />;

      case "event":
        const event = await getEvent(id);
        break;

      default:
        const invitation = await getInvitation(id);
    }

    return <EventForm />;
  };
  switch (type) {
    case "task":
      colorClass = "bg-gradient-to-t from-blue-500 to-white";
      textColor = "text-white";
      break;
    case "event":
      colorClass = "bg-gradient-to-t from-green-700 to-white";
      textColor = "text-white";
      break;
    default:
      colorClass = "bg-gradient-to-t from-gray-600 to-white";
      textColor = "text-gray-100";
  }

  return (
    <>
      <div
        onClick={() => {
          handleClick();
        }}
        className={`p-2 rounded-md border border-gray-300 shadow hover:cursor-pointer ${colorClass}`}
      >
        <div className="flex flex-col place-items-start">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
      <EventForm />
    </>
  );
}
function convertToTaskFormSchema(
  task: Task | null
): z.infer<typeof TaskFormSchema> | null {
  if (task === null) {
    return null;
  }

  const { title, content, start, end } = task;

  return TaskFormSchema.parse({
    title,
    description: content,
    start: start.toString(),
    end: end.toString(),
  });
}
