import styles from "./container.module.css";

export const Container = ({ as: Tag = "div", children, className = "", ...props }) => {
  const containerClass = className
    ? `${styles.container} ${className}`
    : styles.container;

  return (
    <Tag className={containerClass} {...props}>
      {children}
    </Tag>
  );
};