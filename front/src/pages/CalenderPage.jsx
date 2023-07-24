import { useState, useEffect, useContext } from "react";

import { getMonth } from "../util";
import { CalendarHeader } from "../modules/app/calendar_comp/Calendarheader";
import { Month } from "../modules/app/calendar_comp/Month";
import GlobalContext from "../modules/app/calendar_contx/GlobalContext";
import { EventModal } from "../modules/app/calendar_comp/EventModal";

export const CalenderPage=() => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <>
    {showEventModal && <EventModal />}
      <div className="h-screen flex flex-col">
        <CalendarHeader />
        <div className="flex flex-1">
          <Month month={currentMonth} />
        </div>
      </div>
    </>
  );
}
