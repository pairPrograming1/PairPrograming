"use client";
import { useState, useEffect } from "react";
import { useSidebar } from "../context/SidebarContext";
import { Container } from "./ui/Container";
import { Card } from "./ui/Card";
import CalendarioHeader from "./calendario/CalendarioHeader";
import CalendarioGrid from "./calendario/CalendarioGrid";
import CalendarioSidebar from "./calendario/CalendarioSidebar";
import EventModal from "./calendario/EventModal";
import SelectedDateEvents from "./calendario/SelectedDateEvents";
import { useCalendario } from "../hooks/useCalendario";

export default function CalendarioContent() {
  const { isSidebarExpanded } = useSidebar();
  const {
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
  } = useCalendario();

  return (
    <section className="py-16 lg:py-20 bg-card-bg text-white min-h-screen">
      <Container size={isSidebarExpanded ? "expanded" : "default"}>
        <CalendarioHeader
          isSidebarExpanded={isSidebarExpanded}
          currentDate={currentDate}
        />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Panel lateral */}
          <CalendarioSidebar
            events={events}
            eventTypes={eventTypes}
            onGoToToday={goToToday}
            onShowEventModal={() => setShowEventModal(true)}
          />

          {/* Calendario principal */}
          <div className="lg:col-span-3">
            <Card padding="md">
              <CalendarioHeader
                isSidebarExpanded={isSidebarExpanded}
                currentDate={currentDate}
                onPreviousMonth={goToPreviousMonth}
                onNextMonth={goToNextMonth}
                showNavigation
              />

              <CalendarioGrid
                days={days}
                selectedDate={selectedDate}
                eventTypes={eventTypes}
                getEventsForDate={getEventsForDate}
                onDateClick={handleDateClick}
              />
            </Card>

            {/* Eventos del día seleccionado */}
            {selectedDate && (
              <SelectedDateEvents
                selectedDate={selectedDate}
                events={getEventsForDate(selectedDate)}
                eventTypes={eventTypes}
                onDeleteEvent={deleteEvent}
              />
            )}
          </div>
        </div>
      </Container>

      {/* Modal para nuevo evento */}
      {showEventModal && (
        <EventModal
          newEvent={newEvent}
          eventTypes={eventTypes}
          onEventSubmit={handleEventSubmit}
          onClose={() => setShowEventModal(false)}
          onEventChange={setNewEvent}
        />
      )}
    </section>
  );
}
