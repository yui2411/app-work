import { useState, useEffect, useContext } from "react";

import { getMonth } from "./util";
import { CalendarHeader } from "../src/modules/app/calendar_comp/Calendarheader";
import { Month } from "../src/modules/app/calendar_comp/Month";
import GlobalContext from "../src/modules/app/calendar_contx/GlobalContext";
import { EventModal } from "../src/modules/app/calendar_comp/EventModal";

function App() {
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

export default App;