
//getAppointmentsForDay
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

//getInterview
export const getInterview = (state, interview) => {
  if (!interview) {
    return null;
  }

  // extract student and interviewer properties from interview object
  // interviewer ID comes from interviewer
  // const { student, interviewer } = interview;
  // const interviewerId = interviewer;
  let interviewerId = interview.interviewer

  return {
    student: interview.student,
    interviewer: {...state.interviewers[interviewerId]}
  };
};


//getInterviewersForDay
export function getInterviewersForDay(state, day) {
  const selectedDay = state.days.find(singleDay => singleDay.name === day);

  if (!selectedDay) {
    return [];
  }

  const interviewerIds = selectedDay.interviewers;
  const interviewersForDay = [];

  for (let id of interviewerIds) {
    if (state.interviewers[id]) {
      interviewersForDay.push(state.interviewers[id]);
    }
  };

  return interviewersForDay;
};