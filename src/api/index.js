import axios from "axios";
import { useQuery } from "react-query";

const _getTodos = async () => {
  const { data } = await axios.get(
    `http://localhost:7777/todos`
  );
  return data;
};


export const useTodos = () => {
  return useQuery(
    ['todos'], () => _getTodos(),
  );
}