import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getBloDetLikSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";
import useAxios from "./useAxios";

const useBlogCall = () => {
  const dispatch = useDispatch();

  const { axiosWithToken } = useAxios();

  const getBlog = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}` + "api/blogs/"
      );
      dispatch(getBloDetLikSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data can not be Fetched !");
      console.log(error);
    }
  };

  const getCategories = async (url) => {
    try {
      const { data } = await axios(
        `${import.meta.env.VITE_BASE_URL}` + "api/categories/"
      );
      dispatch(getBloDetLikSuccess({ url, data }));
    } catch (error) {
      console.log(error);
    }
  };

  const createBlog = async (newBlog) => {

    const axiosConfig = {
      method: "post",
      url: `${import.meta.env.VITE_BASE_URL}` + "api/blogs/",
      data: newBlog, // Data to be sent in the request body
      headers: { Authorization: `Token ${token}` },
    };

    try {
      await axios(axiosConfig);
      toastSuccessNotify("Successfull !");
    } catch (error) {
      toastErrorNotify("Blog have not been created !");
      console.log(error);
    }
  };

  const updateBlog = async (updatedBlog, id) => {
    try {
      await axiosWithToken.put(`api/blogs/${id}/`, updatedBlog);
      toastSuccessNotify("Updated is Secuccessful !");
    } catch (error) {
      toastErrorNotify("It Could not Updated !")
      console.log(error);
    }
  };

  const getBlogById = async (url, id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`api/blogs/${id}/`);
      dispatch(getBloDetLikSuccess({ url, data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBlog, getCategories, createBlog , updateBlog,getBlogById };
};

export default useBlogCall;
