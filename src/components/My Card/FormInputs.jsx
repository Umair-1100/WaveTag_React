import styles from "./mycard.module.scss";

export const FormInputs = ({title ,placeholder ,type ,InputId ,name ,value ,handleInput}) => {
  return (
    <div className={styles.label_form}>
      <label htmlFor={InputId} className="">{title}</label>
      <input type={type} name={name} id={InputId} placeholder={placeholder} value={value} onChange={handleInput} />
    </div>
  );
};
