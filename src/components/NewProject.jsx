import Input from "./Input";
import { useReducer, useRef } from "react";

export default function NewProject({ onProjectAdd }) {
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = duedate.current.value;
    onProjectAdd({
      id: Math.random(),
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDuedate,
    });
    title.current.value = "";
    description.current.value = "";
    duedate.current.value = "";
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancle
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 bg-stone-800 rounded-md text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input type="date" ref={duedate} label="Due Date" />
      </div>
    </div>
  );
}
