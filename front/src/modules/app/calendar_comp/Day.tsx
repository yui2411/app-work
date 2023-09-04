import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { GlobalContext } from "../calendar_contx/GlobalContext";

interface DayProps {
  day: dayjs.Dayjs;
  rowIdx: number;
}

export const Day: React.FC<DayProps> = ({ day, rowIdx }) => {
  const [dayEvents, setDayEvents] = useState<any[]>([]);
  const { setDaySelected, setShowEventModal, savedEvents, setSelectedEvent } =
    useContext(GlobalContext);

  // 今日の日付を色付けする
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "text-gray-400 border-solid border-2 border-pink-200 w-7"
      : "";
  };

  // 登録データを日付が一致する日に表示
  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  return (
    <div className="border border-black-200 flex flex-col">
      <header className="flex flex-col bg-cyan-50 items-center">
        {/* 1行目に曜日を表示 */}
        {rowIdx === 0 && (
          <p className="text-sm mt-1 bg-white text-purple-400">
            {day.format("ddd")}
          </p>
        )}
        <p
          className={`text-sm p-1 my-1 text-gray-400 text-center ${getCurrentDayClass()}`}
        >
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-pink-200 p-1 mr-3 text-black-800 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
};
