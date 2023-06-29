import { useState, useEffect } from "react";
import axios from "axios";
import { getAppointmentsForDay } from "helpers/selectors";
import { getInterviewersForDay } from "helpers/selectors";
import { getInterview } from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: []
  });

  //parsing data for appointments
  const setDay = day => setState({ ...state, day });


  //add pointments
  function bookInterview(id, interview) {

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    //PUT request
    return axios
    .put(`/api/appointments/${id}`, { interview }) // Send a PUT request to update the appointment with the interview data
    .then(() => {
      setState({
        ...state,
        appointments
      });
    });
  };

  //delete appointments
  function cancelInterview(id) {
  
    const appointment = {
      ...state.appointments[id],
      interview: null
    }

    const appointments = {
      ...state.appointments,
      [id]: appointment
    }

    return axios
      .delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments
        });
      });
  }

  
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
    });
  }, []);

  // Updates remaining spots in days
  useEffect(() => {
    axios.get("/api/days")
      .then(days => setState(state => ({ ...state, days: days.data })));
  }, [state.appointments])

  return {
    state, 
    setDay,
    bookInterview,
    cancelInterview
  }
}