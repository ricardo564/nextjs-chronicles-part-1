import { v4 as uuidv4 } from 'uuid';

export const getUniqueId = () => {
  const id = uuidv4();
  const date = new Date().getTime();

  return `${id}-${date}`;
};

