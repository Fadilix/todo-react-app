import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const useTasks = () => {
  const [tasks, setTasks] = useState([{}]);

  useEffect(() => {
    const fetchTAsks = async () => {
      const response = await axios.get("http://localhost:8081/api/todos");
      if (response.status === 200) {
        setTasks(response.data.todos);
      } else {
        toast.error("An error occured while fetching tasks");
      }
    };

    fetchTAsks();
  }, []);

  return { tasks, setTasks };
};

export default useTasks;
