import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
console.log("API BASE URL:", BASE_URL);

async function allStudent() {
  try {
    const res = await axios(`${BASE_URL}/getallStudents`);
    console.log("Full API Response:", res.data);

    return res.data.students;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

export default allStudent;
