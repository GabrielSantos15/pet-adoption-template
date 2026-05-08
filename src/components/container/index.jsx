import styles from "./container.module.css";

export const Container = ({
  as: Tag = "div",
  children,
  className = "",
  direction = "column",
  ...props
}) => {
  const normalizedDirection =
    direction === "row" ? "row" : direction === "collumn" ? "column" : "column";

  const containerClass = [styles.container, styles[normalizedDirection], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={containerClass} {...props}>
      {children}
    </Tag>
  );
};