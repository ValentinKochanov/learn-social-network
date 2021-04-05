import React from "react";
import styles from './formControl.module.css';

const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.error && meta.touched
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error: " ")}>
      <textarea {...input} {...props} />
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export default Textarea