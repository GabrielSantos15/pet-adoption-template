import { PetCard } from "../petCard";
import styles from "./petList.module.css"

export const PetsList = ({ pets }) => {
  return (
<section className="flex gap-4 overflow-x-auto p-4 snap-x snap-mandatory">
  {pets.map((pet, index) => (
    <div className="min-w-[250px] snap-start" key={index}>
      <PetCard pet={pet} />
    </div>
  ))}
</section>
  );
};