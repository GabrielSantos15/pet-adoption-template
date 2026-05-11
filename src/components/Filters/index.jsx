import styles from "./filters.module.css";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const renderOptions = (items) =>
  items.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

export default function Filters({ filters, onChange, clearFilters, options }) {
  const [isOpen, setIsOpen] = useState(false);

  const setField = (field) => (ev) => {
    const { value } = ev.target;
    onChange((prev) => ({ ...prev, [field]: value }));
  };

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.filtersContainer}>
      <button 
        className={styles.toggleBtn}
        onClick={toggleFilters}
        aria-label="Toggle filters"
      >
        <span>Filtros</span>
        <FaChevronDown className={`${styles.chevron} ${isOpen ? styles.open : ''}`} />
      </button>
      <form className={`${styles.filtersForm} ${isOpen ? styles.open : ''}`}>
        <div className={styles.filtersGrid}>
          <label className={styles.field}>
            <span>Ordenar por</span>
            <select value={filters.order} onChange={setField("order")} >
              <option value="recent">Chegada: mais recente</option>
              <option value="oldest">Chegada: mais antiga</option>
              <option value="name-asc">Nome: A → Z</option>
              <option value="name-desc">Nome: Z → A</option>
            </select>
          </label>

          <label className={styles.field}>
            <span>Categoria</span>
            <select value={filters.category} onChange={setField("category")}>
              <option value="all">Todas</option>
              {renderOptions(options.categories)}
            </select>
          </label>

          <label className={styles.field}>
            <span>Sexo</span>
            <select value={filters.sex} onChange={setField("sex")}>
              <option value="all">Todos</option>
              {renderOptions(options.sex)}
            </select>
          </label>

          <label className={styles.field}>
            <span>Idade</span>
            <select value={filters.age} onChange={setField("age")}>
              <option value="all">Todas</option>
              {renderOptions(options.age)}
            </select>
          </label>

          <label className={styles.field}>
            <span>Porte</span>
            <select value={filters.size} onChange={setField("size")}>
              <option value="all">Todos</option>
              {renderOptions(options.size)}
            </select>
          </label>

          <label className={styles.field}>
            <span>Temperamento</span>
            <select
              value={filters.temperament}
              onChange={setField("temperament")}
            >
              <option value="all">Todos</option>
              {renderOptions(options.temperament)}
            </select>
          </label>

          <button
            className={styles.clearBtn}
            type="button"
            onClick={clearFilters}
          >
            <FaFilterCircleXmark />
            Limpar Filtros
          </button>
        </div>
      </form>
    </div>
  );
}
