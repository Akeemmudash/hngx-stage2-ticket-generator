const TextInputError = ({ showValidation, errors, type }) => {
  return (
    showValidation &&
    errors[type] && (
      <p
        id="form-input__error"
        className="text-error mt-1 text-sm"
        role="alert"
      >
        {errors[type]}
      </p>
    )
  );
};

export default TextInputError;
