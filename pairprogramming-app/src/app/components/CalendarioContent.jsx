// components/CalendarioContent.jsx
"use client";
import { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

export default function CalendarioContent() {
  const { isSidebarExpanded } = useSidebar();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    time: "09:00",
    duration: 60,
    type: "reunion",
  });

  // Días de la semana y meses en español
  const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

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

  // Horarios disponibles
  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <div className="text-center mb-8 fade-in">
          <h1
            className={`font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 ${
              isSidebarExpanded
                ? "text-2xl lg:text-3xl"
                : "text-3xl lg:text-4xl"
            }`}
          >
            Calendario de Proyectos
          </h1>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">
            Organiza y gestiona tus reuniones, desarrollos y actividades
            técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Panel lateral */}
          <div className="lg:col-span-1 space-y-6">
            <Card padding="md" className="sticky top-4">
              <h3 className="text-lg font-bold text-primary mb-4">
                Acciones Rápidas
              </h3>
              <div className="space-y-3">
                <Button
                  onClick={goToToday}
                  className="w-full justify-center"
                  icon="📅"
                >
                  Hoy
                </Button>
                <Button
                  onClick={() => setShowEventModal(true)}
                  variant="outline"
                  className="w-full justify-center"
                  icon="➕"
                >
                  Nuevo Evento
                </Button>
              </div>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-primary mb-4">
                Tipos de Eventos
              </h3>
              <div className="space-y-2">
                {Object.entries(eventTypes).map(([key, type]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                    <span className="text-sm text-secondary-text">
                      {type.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            <Card padding="md">
              <h3 className="text-lg font-bold text-primary mb-4">
                Próximos Eventos
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {events
                  .filter((event) => new Date(event.date) >= new Date())
                  .sort((a, b) => new Date(a.date) - new Date(b.date))
                  .slice(0, 5)
                  .map((event) => (
                    <div
                      key={event.id}
                      className="p-2 rounded-lg bg-background/50 border-l-4"
                      style={{
                        borderLeftColor: eventTypes[event.type].color.replace(
                          "bg-",
                          ""
                        ),
                      }}
                    >
                      <p className="font-semibold text-white text-sm">
                        {event.title}
                      </p>
                      <p className="text-secondary-text text-xs">
                        {new Date(event.date).toLocaleDateString("es-ES")} -{" "}
                        {event.time}
                      </p>
                    </div>
                  ))}
                {events.filter((event) => new Date(event.date) >= new Date())
                  .length === 0 && (
                  <p className="text-secondary-text text-sm text-center">
                    No hay eventos próximos
                  </p>
                )}
              </div>
            </Card>
          </div>

          {/* Calendario principal */}
          <div className="lg:col-span-3">
            <Card padding="md">
              {/* Header del calendario */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">
                  {months[currentDate.getMonth()]} {currentDate.getFullYear()}
                </h2>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToPreviousMonth}
                    icon="◀"
                  >
                    Anterior
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={goToNextMonth}
                    icon="▶"
                  >
                    Siguiente
                  </Button>
                </div>
              </div>

              {/* Días de la semana */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {daysOfWeek.map((day) => (
                  <div
                    key={day}
                    className="text-center font-semibold text-secondary-text text-sm py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Días del mes */}
              <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => {
                  const dayEvents = getEventsForDate(day.date);
                  const isSelected =
                    selectedDate &&
                    day.date.getDate() === selectedDate.getDate() &&
                    day.date.getMonth() === selectedDate.getMonth() &&
                    day.date.getFullYear() === selectedDate.getFullYear();

                  return (
                    <div
                      key={index}
                      className={`
                        min-h-20 p-1 border border-border-color rounded-lg cursor-pointer transition-all
                        ${
                          day.isCurrentMonth
                            ? "bg-background/50"
                            : "bg-background/20 opacity-50"
                        }
                        ${day.isToday ? "border-primary border-2" : ""}
                        ${isSelected ? "ring-2 ring-primary" : ""}
                        hover:bg-hover-bg
                      `}
                      onClick={() => handleDateClick(day.date)}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span
                          className={`
                          text-sm font-medium
                          ${day.isToday ? "text-primary" : "text-white"}
                          ${!day.isCurrentMonth ? "opacity-30" : ""}
                        `}
                        >
                          {day.date.getDate()}
                        </span>
                        {dayEvents.length > 0 && (
                          <span className="text-xs text-secondary-text">
                            {dayEvents.length}
                          </span>
                        )}
                      </div>

                      {/* Eventos del día */}
                      <div className="space-y-1">
                        {dayEvents.slice(0, 2).map((event) => (
                          <div
                            key={event.id}
                            className={`
                              text-xs p-1 rounded truncate
                              ${eventTypes[event.type].color} text-white
                            `}
                            title={event.title}
                          >
                            {event.time} - {event.title}
                          </div>
                        ))}
                        {dayEvents.length > 2 && (
                          <div className="text-xs text-secondary-text text-center">
                            +{dayEvents.length - 2} más
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Eventos del día seleccionado */}
            {selectedDate && (
              <Card padding="md" className="mt-6">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Eventos para{" "}
                  {selectedDate.toLocaleDateString("es-ES", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h3>
                <div className="space-y-3">
                  {getEventsForDate(selectedDate).map((event) => (
                    <div
                      key={event.id}
                      className="p-4 rounded-lg bg-background/50 border-l-4 flex justify-between items-center"
                      style={{
                        borderLeftColor: eventTypes[event.type].color.replace(
                          "bg-",
                          ""
                        ),
                      }}
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span
                            className={`text-sm font-semibold ${
                              eventTypes[event.type].textColor
                            }`}
                          >
                            {eventTypes[event.type].name}
                          </span>
                          <span className="text-secondary-text text-sm">
                            {event.time} -{" "}
                            {new Date(event.endTime).toLocaleTimeString(
                              "es-ES",
                              {
                                hour: "2-digit",
                                minute: "2-digit",
                              }
                            )}
                          </span>
                        </div>
                        <h4 className="font-bold text-white text-lg">
                          {event.title}
                        </h4>
                        {event.description && (
                          <p className="text-secondary-text text-sm mt-1">
                            {event.description}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteEvent(event.id)}
                        className="text-red-400 border-red-400 hover:bg-red-400 hover:text-white"
                      >
                        Eliminar
                      </Button>
                    </div>
                  ))}
                  {getEventsForDate(selectedDate).length === 0 && (
                    <p className="text-secondary-text text-center py-4">
                      No hay eventos programados para este día
                    </p>
                  )}
                </div>
              </Card>
            )}
          </div>
        </div>
      </Container>

      {/* Modal para nuevo evento */}
      {showEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card
            padding="lg"
            className="max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <h3 className="text-2xl font-bold text-primary mb-4">
              {selectedEvent ? "Editar Evento" : "Nuevo Evento"}
            </h3>

            <form onSubmit={handleEventSubmit} className="space-y-4">
              <Input
                label="Título del Evento"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent((prev) => ({ ...prev, title: e.target.value }))
                }
                placeholder="Reunión de planificación..."
                required
              />

              <div>
                <label className="block text-secondary-text font-semibold mb-2 text-sm">
                  Descripción
                </label>
                <textarea
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }))
                  }
                  placeholder="Descripción del evento..."
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white placeholder-secondary-text resize-none text-sm"
                  rows="3"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-secondary-text font-semibold mb-2 text-sm">
                    Fecha
                  </label>
                  <Input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, date: e.target.value }))
                    }
                    required
                  />
                </div>

                <div>
                  <label className="block text-secondary-text font-semibold mb-2 text-sm">
                    Hora
                  </label>
                  <select
                    value={newEvent.time}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, time: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                    required
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-secondary-text font-semibold mb-2 text-sm">
                    Duración (minutos)
                  </label>
                  <Input
                    type="number"
                    value={newEvent.duration}
                    onChange={(e) =>
                      setNewEvent((prev) => ({
                        ...prev,
                        duration: parseInt(e.target.value),
                      }))
                    }
                    min="15"
                    step="15"
                    required
                  />
                </div>

                <div>
                  <label className="block text-secondary-text font-semibold mb-2 text-sm">
                    Tipo de Evento
                  </label>
                  <select
                    value={newEvent.type}
                    onChange={(e) =>
                      setNewEvent((prev) => ({ ...prev, type: e.target.value }))
                    }
                    className="w-full px-4 py-3 border border-border-color rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-white text-sm"
                    required
                  >
                    {Object.entries(eventTypes).map(([key, type]) => (
                      <option key={key} value={key}>
                        {type.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <Button type="submit" className="flex-1" icon="💾">
                  Guardar Evento
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowEventModal(false)}
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </section>
  );
}
