import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import MyInput from "./MyInput";
import { Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faEdit,
  faPlus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function App() {
  const [task, settask] = useState([]); //main task list
  const [newtask, setnewtask] = useState(""); //for storing new task
  const [copyOfTask, setcopyOfTask] = useState([]); //copy of task list
  const [updatetask, setupdatetask] = useState([]); //for updated task
  const [toggleAddbtn, setToggleAddbtn] = useState(true); //for add/update button toggle
  const [searchtask, setsearchtask] = useState(""); //for search

  useEffect(() => {
    let localStorageToDo = JSON.parse(localStorage.getItem("toDo's"));
    if (
      localStorageToDo === null ||
      localStorageToDo === false ||
      localStorageToDo === undefined
    ) {
      return;
    }
    settask(localStorageToDo);
    setcopyOfTask(localStorageToDo);
  }, []);

  //handling add tasks functionality
  const handleAddToDo = () => {
    const todoTask = {
      id: new Date().getTime(),
      title: newtask,
      time: new Date(),
    };

    if (!todoTask.title) {
      return alert("please enter task");
    }

    settask([...task, todoTask]);
    setcopyOfTask([...task, todoTask]);
    localStorage.setItem("toDo's", JSON.stringify([...task, todoTask]));
    setnewtask("");
  };

  //handling edit tasks functionality
  const handleEditToDo = (item) => {
    setToggleAddbtn(false);
    setupdatetask(item);
    setnewtask(
      task.find((todo) => (todo.id == item.id ? todo.title : null)).title
    );
  };

  //handling remove tasks functionality
  const handleRemoveToDo = (id) => {
    let filtertoDo = task.filter((item) => {
      return item.id !== id;
    });

    settask(filtertoDo);
    setcopyOfTask(filtertoDo);
    let localTask = JSON.parse(localStorage.getItem("toDo's"));
    localStorage.setItem("toDo's", JSON.stringify(filtertoDo));
  };

  //handling update tasks functionality
  const handleUpdateToDo = () => {
    setToggleAddbtn(true);
    task.some((item) => {
      updatetask.id == item.id ? (item.title = newtask) : "";
    });
    localStorage.setItem("toDo's", JSON.stringify(task));
    setnewtask("");
  };

  //handling search tasks functionality
  const handleSearch = (e) => {
    setsearchtask(e.target.value);
    const filteredtask = copyOfTask.filter((item) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    settask(filteredtask);
  };

  return (
    <>
      {/* first container */}
      <div className="mt-3 inputbox">
        <Input
          value={newtask}
          placeholder="Enter task"
          onChange={(e) => {
            setnewtask(e.target.value);
          }}
        />
        <div>
          {toggleAddbtn ? (
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faPlus}
              color={"green"}
              size={"2xl"}
              onClick={handleAddToDo}
            />
          ) : (
            <FontAwesomeIcon
              style={{ cursor: "pointer" }}
              icon={faArrowRotateRight}
              color={"skyblue"}
              size={"xl"}
              onClick={handleUpdateToDo}
            />
          )}
        </div>
      </div>

      {/* main container */}
      <div className="box">
        <h2>My Todo's List</h2>
        <input
          type="text"
          className="input"
          onChange={handleSearch}
          placeholder="searchtask..."
        />
        <ul>
          {/* rendering the main task List */}
          {task.map((item) => {
            return (
              <li className="btns" key={item.id}>
                {item.title}
                <div className="buttons">
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faTrashCan}
                    color={"brown"}
                    onClick={() => {
                      handleRemoveToDo(item.id);
                    }}
                  />
                  <FontAwesomeIcon
                    style={{ cursor: "pointer" }}
                    icon={faEdit}
                    color={"darkgrey"}
                    onClick={() => {
                      handleEditToDo(item);
                    }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default App;
