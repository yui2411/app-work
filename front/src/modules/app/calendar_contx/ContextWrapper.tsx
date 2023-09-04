import React, { useReducer, useState, useEffect, ReactNode } from "react";
import { GlobalContext, IGlobalContext, Action, Event } from "./GlobalContext";
import dayjs from "dayjs";

const saveEventsReducer = (state: Event[], action: Action): Event[] => {
  switch (action.type) {
    case "push":
      return [...state, action.payload];
    case "update":
      return state.map((evt) => (evt.id === action.payload.id ? action.payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== action.payload.id);
    default:
      throw new Error();
  }
};

const initEvents = (): Event[] => {
  const storageEvents = localStorage.getItem("savedEvents");
  return storageEvents ? JSON.parse(storageEvents) : [];
};

interface ContextWrapperProps {
  children: ReactNode;
}

const ContextWrapper: React.FC<ContextWrapperProps> = (props) => {
  const [monthIndex, setMonthIndex] = useState<number>(dayjs().month());
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [savedEvents, dispatchCalEvent] = useReducer(saveEventsReducer, [], initEvents);

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  const value: IGlobalContext = {
    monthIndex,
    setMonthIndex,
    daySelected,
    setDaySelected,
    showEventModal,
    setShowEventModal,
    selectedEvent,
    setSelectedEvent,
    dispatchCalEvent,
    savedEvents,
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};

export default ContextWrapper;