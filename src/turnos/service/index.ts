import axios from "axios";
import { api } from "./api";
import { TurnosProps } from "../interfaces";

type ResPostTurno = TurnosProps & {
  id: number;
  url: string;
  status: "okey" | "error";
};

type ResGetTurnosDisponibles = {
  turnos: Date[];
  status: "okey" | "error";
};

export const postTurno = async (data: TurnosProps): Promise<ResPostTurno> => {
  const res = await axios.post(api.postTurno, data);
  return {
    ...data,
    id: res.data.id,
    url: res.data.url,
    status: res.status === 201 ? "okey" : "error",
  };
};
export const getTurnosDisponible =
  async (): Promise<ResGetTurnosDisponibles> => {
    const res = await axios.get(api.getTurnosDisponible);

    return {
      turnos: res.data,
      status: res.status === 200 ? "okey" : "error",
    };
  };
