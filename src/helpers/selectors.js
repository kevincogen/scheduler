

export function getAppointmentsForDay(state, day) {
  const selectedDay = state.days.find(singleDay => singleDay.name === day);

  if (!selectedDay) {
    return [];
  }

  const appointmentIds = selectedDay.appointments;
  const appointmentsForDay = [];

  for (let id of appointmentIds) {
    if (state.appointments[id]) {
      appointmentsForDay.push(state.appointments[id]);
    }
  };

  return appointmentsForDay;
};

export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  // extract student and interviewer properties from interview object
  // interviewer ID comes from interviewer
  const { student, interviewer } = interview;
  const interviewerId = interviewer;

  return {
    student,
    interviewer: state.interviewers[interviewerId]
  };
};
