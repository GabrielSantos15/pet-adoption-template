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

export const tempoEspera = (pet) => {
  if (!pet || !pet.Chegada) return "";

  const dataChegada = new Date(`${pet.Chegada}T12:00:00`);

  if (Number.isNaN(dataChegada.getTime())) {
    return pet.Chegada;
  }

  const hoje = new Date();

  let anos = hoje.getFullYear() - dataChegada.getFullYear();
  let meses = hoje.getMonth() - dataChegada.getMonth();

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  if (anos > 0) return `${anos} ano${anos > 1 ? "s" : ""}`;
  if (meses > 0) return `${meses} mês${meses > 1 ? "es" : ""}`;
  
  const dias = Math.floor((hoje - dataChegada) / (1000 * 60 * 60 * 24));

  return `${dias} dia${dias > 1 ? "s" : ""}`;
};