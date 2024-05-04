export default function ListContentItem({
  type,
  title,
}: {
  type: string;
  title: string;
}) {
  let colorClass = "";
  let textColor = "";
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
        alert(title);
      }}
      className={`p-2 rounded-md border border-slate-200 shadow hover:cursor-pointer ${colorClass}`}
    >
      <div className="flex flex-col place-items-start">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
    </div>
  );
}
