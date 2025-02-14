import { useState, useRef, useEffect, useCallback } from "react";
import Cloud from "../assets/cloud.svg";
import Email from "../assets/envelope.svg";
import Button from "../components/Button";

const AttendeeDetails = ({
  formData = {
    name: "",
    email: "",
    image: new Image(),
    specialRequest: "",
  },
  updateFormData,
  showValidation,
}) => {
  const [image, setImage] = useState("");
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    imageUrl: "",
    specialRequest: "",
  });
  const fileInputRef = useRef(null);
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
      specialRequest: validateForm("specialRequest", formData.specialRequest),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  }, [
    formData.email,
    formData.imageUrl,
    formData.name,
    formData.specialRequest,
    validateForm,
  ]);

  useEffect(() => {
    if (showValidation) {
      validateAllFields();
    }
  }, [showValidation, validateAllFields]);

  const handleInputChange = (field, value) => {
    updateFormData({ [field]: value });
    if (showValidation) {
      validateForm(field, value);
    }
  };

  const handleImageUpload = (files) => {
    if (!files || !files[0]) return;

    setImageIsUploading(true);
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "zkuo25pr");
    fetch("https://api.cloudinary.com/v1_1/dih3cssrq/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setImage(data.secure_url);
        updateFormData({ imageUrl: data.secure_url });
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      })
      .finally(() => {
        setImageIsUploading(false);
      });
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="border-secondary-light mt-8 rounded-4xl border p-6">
        <div className="border-secondary-dark bg-secondary-darker min-h-[320px] rounded-3xl border text-white">
          <h2 className="font-Roboto mt-6 mb-8 pl-6 text-base">
            Upload Profile Photo
          </h2>

          <div className="bg-overlay-dark mx-auto flex h-[200px] max-w-[508px] items-center">
            <div
              className={`relative mx-auto flex aspect-square min-h-[240px] max-w-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-4 ${
                showValidation && errors.imageUrl
                  ? "border-e-error"
                  : "border-primary"
              } bg-secondary-light`}
              onClick={handleClick}
            >
              {imageIsUploading ? (
                <div className="flex flex-col items-center justify-center">
                  <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-white"></div>
                  <p className="font-Roboto mt-4 text-gray-400">Uploading...</p>
                </div>
              ) : image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <img src={Cloud} alt="" />
                  <p className="font-Roboto text-light mt-2 text-center text-base">
                    Drag & drop or click to <br /> upload
                  </p>
                  {showValidation && errors.imageUrl && (
                    <p className="mt-2 text-center text-sm text-red-500">
                      {errors.imageUrl}
                    </p>
                  )}
                </div>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              onChange={(e) => handleImageUpload(e.target.files)}
              className="hidden"
              accept="image/*"
              required
              aria-label="Upload profile photo"
              aria-required="true"
            />
          </div>
        </div>

        <div className="bg-secondary-dark my-8 h-1 w-full" />

        <form className="mt-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <input type="hidden" value={image} name="avatar" />
          <div className="">
            <label className="font-Roboto text-light mb-1 block text-base">
              Enter your name
            </label>
            <input
              type="text"
              required
              className={`font-Roboto h-12 w-full rounded-xl border px-4 ${
                showValidation && errors.name
                  ? "border-red-500"
                  : "border-secondary-dark"
              } bg-subBackground p-2 text-stone-300 outline-none active:outline-none`}
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              aria-label="Enter your name"
            />
            {showValidation && errors.name && (
              <p
                id="name-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.name}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-Roboto text-light mt-4 mb-1 block text-base">
              Enter your email *
            </label>
            <div
              className={`flex h-12 items-center rounded-xl border ${
                showValidation && errors.email
                  ? "border-red-500"
                  : "border-secondary-dark"
              } bg-subBackground p-2`}
            >
              <img src={Email} alt="" className="pr-2 pl-2" />
              <input
                type="email"
                required
                className="font-Roboto w-full bg-transparent pr-4 outline-none placeholder:text-white active:outline-none"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="hello@avioflagos.io"
                aria-label="Enter your email"
              />
            </div>
            {showValidation && errors.email && (
              <p
                id="email-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="">
            <label className="font-Roboto text-light mb-1 block text-base">
              Special request?
            </label>
            <textarea
              className={`font-Roboto placeholder:text-neutral w-full resize-none rounded-xl border ${
                showValidation && errors.specialRequest
                  ? "border-red-500"
                  : "border-secondary-dark"
              } bg-subBackground p-3 text-stone-300 outline-none active:outline-none`}
              rows="5"
              required
              value={formData.specialRequest}
              placeholder="Textarea"
              onChange={(e) =>
                handleInputChange("specialRequest", e.target.value)
              }
              aria-label="Special request"
            />
            {showValidation && errors.specialRequest && (
              <p
                id="request-error"
                className="mt-1 text-sm text-red-500"
                role="alert"
              >
                {errors.specialRequest}
              </p>
            )}
          </div>
        </form>
        <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
          <Button buttonVariant="outline">Back</Button>
          <Button>Get my Free Ticket</Button>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetails;
