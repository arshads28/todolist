"use client";
import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const page = () => {
  let [title, setTitle] = useState("");
  let [desc, setDesc] = useState("");
  const [tasklist, setTasklist] = useState([]);
  //const[copytask, setCopytask] = useState([])

  const deltost = () => {
    toast.success("🦄 Task is removed", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const notify = () => {
    toast("🦄 task is added", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const submitTask = (e) => {
    e.preventDefault();
    setTasklist([...tasklist, { title, desc }]);
    setTitle("");
    setDesc("");
    notify();
  };

  const deleteHandeler = (i) => {
    let copytask = [...tasklist];
    copytask.splice(i, 1);
    setTasklist(copytask);
    deltost();
  };

  const changeValueTitle = (e) => {
    //console.log(e.target.value)
    setTitle(e.target.value);
  };

  const changeValueDesc = (e) => {
    //console.log(e.target.value)
    setDesc(e.target.value);
  };
  return (
    <>
      <h1 className=" px-10 text-white bg-black m-5 rounded text-3xl text-center">
        My ToDo List{" "}
      </h1>

      <form>
        <input
          type="text"
          className="border-zinc-800 border-2 m-8 p-2"
          placeholder="Enter Your Task Here"
          value={title}
          onChange={changeValueTitle}
        />

        <input
          type="text"
          className="border-zinc-800 border-2 m-8 p-2"
          placeholder="Enter Your Description"
          value={desc}
          onChange={changeValueDesc}
        />

        <button
          className="bg-black text-white text-4lx m-8 p-2 rounded "
          onClick={submitTask}
        >
          Add Task
        </button>
      </form>

      {tasklist?.map((t, i) => (
        <div key={i} className="  flex justify-between gap-10 p-7 ">
          {" "}
          <h1>{t.title}</h1>
          <h1>{t.desc}</h1>
          <button
            className="bg-red-400 text-white text-4lx p-2 rounded"
            onClick={() => {
              deleteHandeler(i);
            }}
          >
            Delete
          </button>
        </div>
      ))}

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default page;
