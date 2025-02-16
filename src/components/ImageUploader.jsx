import { useRef, useState } from "react";
import Cloud from "../assets/cloud.svg";

const ImageUploader = ({
  showValidation,
  errors,
  setHostedimageUrl,
  hostedImageUrl,
}) => {
  const [imageIsUploading, setImageIsUploading] = useState(false);
  const [hasImageLoaded, setHasImageLoaded] = useState(false);

  const fileInputRef = useRef(null);
  const handleImageUpload = (files) => {
    if (!files || !files[0]) return;

    setImageIsUploading(true);
    const formData = new FormData();

    formData.append("file", files[0]);
    formData.append("upload_preset", "x-line");
    fetch("https://api.cloudinary.com/v1_1/dh4fp0kzv/image/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setHostedimageUrl(data.secure_url);
        // setImageUrl(data.secure_url);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      })
      .finally(() => {
        setImageIsUploading(false);
      });
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files);
    }
  };

  return (
    <div className="bg-overlay-dark mx-auto flex h-[200px] max-w-[508px] items-center">
      <label
        htmlFor="imageInput"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`relative mx-auto flex aspect-square size-[240px] cursor-pointer items-center justify-center overflow-hidden rounded-3xl border-4 ${
          showValidation && errors.imageUrl ? "border-error" : "border-primary"
        } bg-secondary-light`}
      >
        {imageIsUploading ? (
          <ImageLoader />
        ) : hostedImageUrl ? (
          <>
            {!hasImageLoaded && (
              <ImageLoader>Image is now Loading...</ImageLoader>
            )}
            <img
              src={hostedImageUrl}
              alt="Uploaded"
              onLoad={() => setHasImageLoaded(true)}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ${hasImageLoaded ? "" : "opacity-0"}`}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <img src={Cloud} alt="" />
            <p className="font-Roboto text-light mt-2 text-center text-base">
              Drag & drop or click to <br /> upload
            </p>
            {showValidation && errors.imageUrl && (
              <p className="text-error mt-2 text-center text-sm">
                {errors.imageUrl}
              </p>
            )}
          </div>
        )}
      </label>

      <input
        ref={fileInputRef}
        type="file"
        id="imageInput"
        onChange={(e) => handleImageUpload(e.target.files)}
        className="hidden"
        accept="image/*"
        required
        aria-label="Upload profile photo"
        aria-required="true"
      />
    </div>
  );
};

export default ImageUploader;

const ImageLoader = ({ children = "Uploading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-white"></div>
      <p className="font-Roboto mt-4 text-gray-400">{children}</p>
    </div>
  );
};
