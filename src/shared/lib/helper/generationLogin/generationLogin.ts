import { v4 as uuidv4 } from "uuid";

export const generationLogin = () => {
  return `worker_${uuidv4()}`;
};
