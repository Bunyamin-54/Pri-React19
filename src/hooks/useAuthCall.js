import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess, modal } from "../features/authSlice";
import { toastErrorNotify } from "../helper/ToastNotify";

const useAuthCall = () => {
  const BASE_URL = "http://31510.fullstack.clarusway.com/";
  const dispacth = useDispatch();


  const login = async (userData) => {
    dispacth(fetchStart());

    try {
      const { data } = await axios.post(
        BASE_URL + "users/auth/login/",
        userData
      );
      dispacth(loginSuccess(data));
      dispacth(modal(false))
    } catch (error) {
      dispacth(fetchFail());
      console.log(error);
      toastErrorNotify('User Credentials are not correct. Please  try again !')
    }
  };

  return { login };
};

export default useAuthCall;
