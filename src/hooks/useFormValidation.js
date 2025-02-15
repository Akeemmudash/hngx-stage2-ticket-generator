import { useCallback, useState } from "react";

export const useFormValidation = () => {
  const [formData, setFormData] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("attendeeForm")) || {
        name: "",
        email: "",
        specialRequest: "",
      }
    );
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    imageUrl: "",
    specialRequest: "",
  });
  const [showValidation, setShowValidation] = useState(false);

  const validateForm = useCallback(
    (field, value) => {
      let newErrors = { ...errors };
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      switch (field) {
        case "name":
          if (!value?.trim()) {
            newErrors.name = "Name is required";
          } else if (value.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
          } else {
            newErrors.name = "";
          }
          break;
        case "email":
          if (!value) {
            newErrors.email = "Email is required";
          } else if (!emailRegex.test(value)) {
            newErrors.email = "Please enter a valid email address";
          } else {
            newErrors.email = "";
          }
          break;
        case "imageUrl":
          if (!value) {
            newErrors.imageUrl = "A ticket photo is required";
          } else {
            newErrors.imageUrl = "";
          }
          break;
        case "specialRequest":
          if (!value?.trim()) {
            newErrors.specialRequest = "Please make a special request";
          } else if (value.trim().length < 10) {
            newErrors.specialRequest =
              "Special request must be at least 10 characters";
          } else {
            newErrors.specialRequest = "";
          }
          break;
        default:
          break;
      }

      setErrors(newErrors);
      return newErrors[field];
    },
    [errors],
  );
  const validateAllFields = useCallback(() => {
    const newErrors = {
      name: validateForm("name", formData.name),
      email: validateForm("email", formData.email),
      imageUrl: validateForm("imageUrl", formData.imageUrl),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  }, [formData, validateForm]);

  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    if (showValidation) {
      validateForm(field, value);
    }
  };
  return {
    showValidation,
    setShowValidation,
    validateAllFields,
    handleInputChange,
    formData,
    setFormData,
    errors,
  };
};

export default useFormValidation;
