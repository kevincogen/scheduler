

export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find(singleDay => singleDay.name === day);

  if (!selectedDay) {
    return [];
  }

  const appointmentIDs = selectedDay.appointments;
  const appointmentsForDay = [];

  for (let id of appointmentIDs) {
    if (state.appointments[id]) {
      appointmentsForDay.push(state.appointments[id]);
    }
  }

  return appointmentsForDay;
}
