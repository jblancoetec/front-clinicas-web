import { useEffect, useState } from "react";
import { getTurnosDisponible } from "../service";

export const useTurnosDisponibles = () => {
  const [state, setState] = useState<{
    turnos: Date[];
    status: "okey" | "error" | "loading";
  }>({
    turnos: [],
    status: "loading",
  });

  useEffect(() => {
    const get = async () => {
      try {
        const res = await getTurnosDisponible();
        setState((state) => {
          return {
            turnos: res.turnos,
            status: res.status,
          };
        });
      } catch (error) {
        setState((state) => {
          return {
            ...state,
            status: "error",
          };
        });
      }
    };
    get();
  }, []);

  return state;
};
