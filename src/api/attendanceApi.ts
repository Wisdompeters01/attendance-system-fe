import axois from "axios";

const URL: string = "https://attendance-testing.onrender.com";

export const createApi = async (data: any) => {
  try {
    return await axois.post(`${URL}/create-user`, data).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};

export const viewAllApi = async () => {
  try {
    return await axois.post(`${URL}/getall-user`).then((res) => {
      return res.data;
    });
  } catch (error) {
    console.log(error);
  }
};
