import { Link } from "react-router-dom"
import styles from "./button.module.css"

export const Button = ({ children, to, href, className = "", ...props }) => {
  const buttonClass = `${styles.button} ${className}`.trim()

  if (to) {
    return (
      <Link to={to}>
        <button {...props} className={buttonClass}>
          {children}
        </button>
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} {...props} className={buttonClass} style={{ display: "inline-block", textDecoration: "none" }}>
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={buttonClass}>
      {children}
    </button>
  )
}