import { createContext } from "react";
import dayjs from "dayjs";

export interface Event {
  id: string;
  title: string;
  day: dayjs.Dayjs;
}

export type Action =
  | { type: "push"; payload: Event }
  | { type: "update"; payload: Event }
  | { type: "delete"; payload: { id: string } };

// 型を定義
export interface IGlobalContext {
  monthIndex: number;
  setMonthIndex: (index: number) => void;
  daySelected: dayjs.Dayjs;
  setDaySelected: (day: dayjs.Dayjs) => void;
  showEventModal: boolean;
  setShowEventModal: (show: boolean) => void;
  dispatchCalEvent: (action: Action) => void;
  savedEvents: any[];
  selectedEvent: any | null;
  setSelectedEvent: (event: any | null) => void;
}

// デフォルト値とともにContextを作成
export const GlobalContext = createContext<IGlobalContext>({
  monthIndex: 0,
  setMonthIndex: () => {},
  daySelected: dayjs(), // 現在日付を設定
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
});
