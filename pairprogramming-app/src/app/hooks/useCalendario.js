import { useState, useEffect } from "react";

export const useCalendario = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    time: "09:00",
    duration: 60,
    type: "reunion",
  });

  // Tipos de eventos
  const eventTypes = {
    reunion: {
      name: "Reunión",
      color: "bg-blue-500",
      textColor: "text-blue-500",
    },
    desarrollo: {
      name: "Desarrollo",
      color: "bg-green-500",
      textColor: "text-green-500",
    },
    consulta: {
      name: "Consulta",
      color: "bg-purple-500",
      textColor: "text-purple-500",
    },
    soporte: {
      name: "Soporte",
      color: "bg-orange-500",
      textColor: "text-orange-500",
    },
    mantenimiento: {
      name: "Mantenimiento",
      color: "bg-red-500",
      textColor: "text-red-500",
    },
  };

  // Generar días del mes
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Días del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startingDay - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonthLastDay - i),
        isCurrentMonth: false,
        isToday: false,
      });
    }

    // Días del mes actual
    const today = new Date();
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDate = new Date(year, month, i);
      days.push({
        date: dayDate,
        isCurrentMonth: true,
        isToday:
          dayDate.getDate() === today.getDate() &&
          dayDate.getMonth() === today.getMonth() &&
          dayDate.getFullYear() === today.getFullYear(),
      });
    }

    // Días del próximo mes
    const totalCells = 42; // 6 semanas
    const remainingDays = totalCells - days.length;
    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        isCurrentMonth: false,
        isToday: false,
      });
    }

    return days;
  };

  const [days, setDays] = useState(getDaysInMonth(currentDate));

  useEffect(() => {
    setDays(getDaysInMonth(currentDate));
  }, [currentDate]);

  // Navegación del calendario
  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    setSelectedDate(today);
  };

  // Manejo de eventos
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setNewEvent((prev) => ({
      ...prev,
      date: date.toISOString().split("T")[0],
    }));
    setShowEventModal(true);
  };

  const handleEventSubmit = (e) => {
    e.preventDefault();
    const event = {
      id: Date.now(),
      ...newEvent,
      date: new Date(newEvent.date + "T" + newEvent.time),
      endTime: new Date(
        new Date(newEvent.date + "T" + newEvent.time).getTime() +
          newEvent.duration * 60000
      ),
    };

    setEvents((prev) => [...prev, event]);
    setShowEventModal(false);
    setNewEvent({
      title: "",
      description: "",
      date: new Date().toISOString().split("T")[0],
      time: "09:00",
      duration: 60,
      type: "reunion",
    });
  };

  const getEventsForDate = (date) => {
    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getDate() === date.getDate() &&
        eventDate.getMonth() === date.getMonth() &&
        eventDate.getFullYear() === date.getFullYear()
      );
    });
  };

  const deleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((event) => event.id !== eventId));
  };

  return {
    currentDate,
    selectedDate,
    events,
    showEventModal,
    newEvent,
    eventTypes,
    days,
    goToPreviousMonth,
    goToNextMonth,
    goToToday,
    handleDateClick,
    handleEventSubmit,
    setShowEventModal,
    setNewEvent,
    getEventsForDate,
    deleteEvent,
    setSelectedDate,
  };
};
