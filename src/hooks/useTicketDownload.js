import html2canvas from "html2canvas";
import { useState } from "react";

const useTicketDownload = (ticketRef) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!ticketRef.current) {
      alert("Ticket reference is missing. Please try again.");
      return;
    }

    setIsDownloading(true);

    try {
      const canvas = await html2canvas(ticketRef.current, {
        scale: 2,
        allowTaint: true,
        useCORS: true,
      });

      const image = canvas.toDataURL("image/png");

      if (!image) throw new Error("Failed to generate ticket image");

      const link = document.createElement("a");
      link.href = image;
      link.download = "conference_ticket.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error generating ticket:", error);
      alert("An error occurred while generating the ticket. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };
  return { handleDownload, isDownloading };
};

export default useTicketDownload;
