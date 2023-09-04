import type { Task } from "./models";
import { apiInstance } from "./base";
import type { AxiosPromise } from "axios";

const BASE_URL = "/todos";

export type GetTaskListParams = {
  userId?: number;
  completed?: boolean;
};

export const getTaskList = (
  params?: GetTaskListParams
): AxiosPromise<Task[]> => {
  return apiInstance.get(BASE_URL, { params });
};

export type GetTaskByIdParams = {
  taskId: number;
  [x: string]: any;
};

export const getTaskById = ({
  taskId,
  ...params
}: GetTaskByIdParams): AxiosPromise<Task> => {
  return apiInstance.get(`${BASE_URL}/${taskId}`, { params });
};
