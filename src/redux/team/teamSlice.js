import { getTeam, getTeamSingle } from "@/api/services/team";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  teamMembers: {
    loading: false,
    data: [],
    status: null,
  },
  teamSingle: {
    loading: false,
    data: [],
    status: null,
  },
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {
    setTeam: (state, { payload }) => {
      state.teamMembers = { ...state.teamMembers, ...payload };
    },
    setTeamSingle: (state, { payload }) => {
      state.teamSingle = { ...state.teamSingle, ...payload };
    },
    resetSingleTeam: (state, { payload }) => {
      state.teamSingle = initialState.teamSingle;
    },
  },
});

export const getTeamAsync = () => async (dispatch) => {
  try {
    dispatch(setTeam({ loading: true }));
    const response = await getTeam();
    if (response) {
      dispatch(
        setTeam({
          data: response.data,
          total: response.data.total,
          per_page: response.data.per_page,
        })
      );
    }
  } catch (error) {
    dispatch(setTeam({ error: true }));
    console.log(error);
  } finally {
    dispatch(setTeam({ loading: false }));
  }
};

export const getTeamSingleAsync = (id) => async (dispatch) => {
  try {
    dispatch(setTeamSingle({ loading: true }));
    const response = await getTeamSingle(id);
    console.log(response.data);
    if (response) {
      dispatch(
        setTeamSingle({
          data: response.data,
          total: response.data.total,
        })
      );
    }
  } catch (error) {
    dispatch(setTeamSingle({ error: true }));
    console.log(error);
  } finally {
    dispatch(setTeamSingle({ loading: false }));
  }
};

export const { setTeamSingle, setTeam, resetSingleTeam } = teamSlice.actions;

export default teamSlice.reducer;
