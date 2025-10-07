const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

export default function CalendarioGrid({
  days,
  selectedDate,
  eventTypes,
  getEventsForDate,
  onDateClick,
}) {
  return (
    <>
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
              onClick={() => onDateClick(day.date)}
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
    </>
  );
}
