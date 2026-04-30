import { useContext, useMemo } from "react";
import { useState, useEffect } from 'react';
import Papa from 'papaparse';

import { PetsContext } from '../context/PetsContext'; 

export const usePets = () => {
    const { pets, isLoading } = useContext(PetsContext);
    
    return { pets, isLoading };
}

export const useDestaques = (pets, quantidade = 5) => {
  return useMemo(() => {
    if (!pets || pets.length === 0) return [];

    const hoje = new Date().getDate();

    const ordenados = [...pets].sort((a, b) => a.Nome.localeCompare(b.Nome));

    const inicio = hoje % ordenados.length;

    const destaque = [];

    for (let i = 0; i < quantidade; i++) {
      destaque.push(ordenados[(inicio + i) % ordenados.length]);
    }

    return destaque;
  }, [pets, quantidade]);
};

export const useOldestArrivals = (pets, quantidade = 5) => {
  return useMemo(() => {
    if (!pets || pets.length === 0) return [];
    return [...pets]
      .sort((a, b) => new Date(a.Chegada) - new Date(b.Chegada))
      .slice(0, quantidade);
  }, [pets, quantidade]);
};
