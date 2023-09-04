import React, { useContext } from "react";
import ja from "dayjs/locale/ja";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import dayjs from "dayjs";
import { GlobalContext } from "../calendar_contx/GlobalContext";

dayjs.locale(ja);

export const CalendarHeader: React.FC = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handelNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    // 現在の月を取得
    setMonthIndex(dayjs().month());
  };
  const datecolor = "text-red-200";

  const formattedMonthYear = (monthIndex: number): string => {
    const currentYear = dayjs().year();
    return dayjs(new Date(currentYear, monthIndex)).format("MMMM YYYY");
  };

  return (
    <header className="px-4 py-2 flex items-center">
      <div className="w-screen flex justify-center relative">
        <div className="flex items-center">
          <button onClick={handlePrevMonth}>
            <span className="cursor-pointer text-gray-600 px-6">
              <MdChevronLeft />
            </span>
          </button>
          <h2
            className={`mx-4 text-xl ${datecolor} font-bold justify-center px-4`}
          >
            {formattedMonthYear(monthIndex)}
          </h2>
          <button onClick={handelNextMonth}>
            <span className="cursor-pointer text-gray-600 px-6">
              <MdChevronRight />
            </span>
          </button>
        </div>
        <div className="flex items-center absolute inset-y-0 right-0">
          <button
            onClick={handleReset}
            className="border rounded py-2 px-4 mr-5 text-blue-200"
          >
            Today
          </button>
        </div>
      </div>
    </header>
  );
};
