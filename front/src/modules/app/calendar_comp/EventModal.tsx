import React, { useState, useContext } from "react";
import { MdDeleteForever, MdClose } from "react-icons/md";
import { GlobalContext, Event } from "../calendar_contx/GlobalContext";
import dayjs from "dayjs";

export const EventModal: React.FC = () => {
  const { daySelected, setShowEventModal, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);
  const [title, setTitle] = useState(selectedEvent ? selectedEvent : "");

  const handleSubmit = (e: React.FormEvent) => {
    // クリック時に送信するというdefaultの動作をキャンセルする
    e.preventDefault();
    const calendarEvent: Event = {
      id: selectedEvent ? selectedEvent.id : Date.now(),
      title: title,
      day: daySelected ? daySelected : dayjs(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }
    setShowEventModal(false);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-end">
          <div className="text-gray-400">
            {selectedEvent && (
              <button
                onClick={() => {
                  dispatchCalEvent({ type: "delete", payload: selectedEvent });
                  setShowEventModal(false);
                }}
              >
                <MdDeleteForever />
              </button>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <MdClose />
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div> </div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-pink-200 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-300"
              onChange={(e) => setTitle(e.target.value)}
            />
            <p>{daySelected.format("YYYY年 MMMM DD日")}</p>{" "}
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-pink-300 hover:bg-black-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};
