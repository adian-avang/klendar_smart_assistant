import { getEvent } from "@/actions/eventActions";
import { getTask } from "@/actions/taskActions";

export default  function ListContentItem({
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
        result =  await getTask(id);
        break;
      case "event":
        result = await getEvent(id);
        break;
      default:
        alert(title);
    }
    console.log(result)
    alert(JSON.stringify(result))
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
      <div
        onClick={() => {
          handleClick();
        }}
        className={`p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer ${colorClass}`}
      >
        <div className="flex flex-col place-items-start">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
      </div>
    );
  };

