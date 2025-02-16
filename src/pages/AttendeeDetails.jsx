import { useEffect } from "react";

import Email from "../assets/envelope.svg";
import Button from "../components/Button";
import useFormValidation from "../hooks/useFormValidation";
import ImageUploader from "../components/ImageUploader";
import TextInputError from "../components/TextInputError";
import { useNavigate } from "react-router-dom";

const AttendeeDetails = () => {
  const {
    validateAllFields,
    showValidation,
    formData,
    setFormData,
    setShowValidation,
    handleInputChange,
    errors,
    hostedImageUrl,
    setHostedimageUrl,
  } = useFormValidation();

  const { ticketType } = JSON.parse(localStorage.getItem("ticketDetails"));

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("attendeeForm", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("avatar", hostedImageUrl);
  }, [hostedImageUrl]);

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    handleInputChange(field, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowValidation(true);

    if (validateAllFields()) {
      navigate("/successful-booking");
    }
  };
  const isFreeTicket = ticketType.toLowerCase() === "regular";

  return (
    <>
      <div className="border-secondary-light mt-8 rounded-4xl border p-6">
        <div className="border-secondary-dark bg-secondary-darker min-h-[320px] rounded-3xl border text-white">
          <h2 className="font-Roboto mt-6 mb-8 pl-6 text-base">
            Upload Profile Photo
          </h2>
          <ImageUploader
            showValidation={showValidation}
            errors={errors}
            hostedImageUrl={hostedImageUrl}
            setHostedimageUrl={setHostedimageUrl}
          />
        </div>
        <div className="bg-secondary-dark my-8 h-1 w-full" />

        <form className="mt-6 space-y-4 sm:space-y-6 lg:space-y-8">
          <input type="hidden" value={hostedImageUrl} name="avatar" />
          <div className="">
            <label className="font-Roboto text-light mb-1 block text-base">
              Enter your name
            </label>
            <input
              type="text"
              required
              className={`font-Roboto h-12 w-full rounded-xl border px-4 ${
                showValidation && errors.name
                  ? "border-error"
                  : "border-secondary-dark"
              } bg-subBackground p-2 text-stone-300 outline-none active:outline-none`}
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              aria-label="Enter your name"
            />
            <TextInputError
              type="name"
              errors={errors}
              showValidation={showValidation}
            />
          </div>
          <div className="">
            <label className="font-Roboto text-light mt-4 mb-1 block text-base">
              Enter your email *
            </label>
            <div
              className={`flex h-12 items-center rounded-xl border ${
                showValidation && errors.email
                  ? "border-error"
                  : "border-secondary-dark"
              } bg-subBackground p-2`}
            >
              <img src={Email} alt="" className="pr-2 pl-2" />
              <input
                type="email"
                required
                className="font-Roboto w-full bg-transparent pr-4 outline-none placeholder:text-white active:outline-none"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="hello@avioflagos.io"
                aria-label="Enter your email"
              />
            </div>
            <TextInputError
              type="email"
              errors={errors}
              showValidation={showValidation}
            />
          </div>
          <div className="">
            <label className="font-Roboto text-light mb-1 block text-base">
              Special request?
            </label>
            <textarea
              className={`font-Roboto placeholder:text-neutral border-secondary-dark } bg-subBackground w-full resize-none rounded-xl border p-3 text-stone-300 outline-none active:outline-none`}
              rows="5"
              required
              value={formData.specialRequest}
              placeholder="Textarea"
              onChange={(e) => handleChange("specialRequest", e.target.value)}
              aria-label="Special request"
            />
          </div>
        </form>
        <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
          <Button buttonVariant="outline">Back</Button>
          <Button onClick={handleSubmit}>
            Get my{" "}
            <span className={` ${isFreeTicket ? "capitalize" : "uppercase"}`}>
              {isFreeTicket ? "free" : ticketType}
            </span>{" "}
            Ticket
          </Button>
        </div>
      </div>
    </>
  );
};

export default AttendeeDetails;
