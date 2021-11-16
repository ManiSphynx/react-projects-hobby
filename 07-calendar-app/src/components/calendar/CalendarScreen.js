import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Navbar } from "../ui/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvent } from "./CalendarEvent";
import { CalendarModal } from "./CalendarModal";
import "moment/locale/es-mx";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { uiOpenModal } from "../../actions/ui";
import {
  eventClearActiveEvent,
  eventSetActive,
  eventStartLoading,
} from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeletedEventFab } from "../ui/DeletedEventFab";

moment.locale("es");

const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {
  //Definiciones Hooks
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "month"
  );

  const dispatch = useDispatch();
  const eventos = useSelector(({ calendar: { events } }) => events);

  const notaActiva = useSelector(
    ({ calendar: { activeEvent } }) => activeEvent
  );
  const { uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(eventStartLoading());
  }, [dispatch]);

  //Definiciones Funciones Que Disparan Un Evento
  const onDoubleClick = (e) => {
    dispatch(uiOpenModal());
  };
  const onSelectEvent = (e) => {
    dispatch(eventSetActive(e));
  };
  const onViewChange = (e) => {
    setLastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = () => {
    dispatch(uiOpenModal());
    dispatch(eventClearActiveEvent());
  };

  //Definicion Styles Globales De La Interface del Calendario
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: uid === event.user._id ? "#367cf7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white",
    };
    return {
      style,
    };
  };

  return (
    <div className="calendar-screen">
      <Navbar />

      <Calendar
        localizer={localizer}
        events={eventos}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        selectable={true}
        onSelectSlot={onSelectSlot}
        view={lastView}
        components={{
          event: CalendarEvent,
        }}
      />
      <AddNewFab />
      {!!notaActiva && <DeletedEventFab />}

      <CalendarModal />
    </div>
  );
};
