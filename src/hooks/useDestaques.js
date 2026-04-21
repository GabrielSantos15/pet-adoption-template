import { useMemo } from "react";

export const useDestaques = (pets, quantidade = 5) => {
  return useMemo(() => {
    if (!pets || pets.length === 0) return [];

    const hoje = new Date().getDate();

    const ordenados = [...pets].sort((a, b) =>
      a.Nome.localeCompare(b.Nome)
    );

    const inicio = hoje % ordenados.length;

    const destaque = [];

    for (let i = 0; i < quantidade; i++) {
      destaque.push(ordenados[(inicio + i) % ordenados.length]);
    }

    return destaque;
  }, [pets, quantidade]);
};