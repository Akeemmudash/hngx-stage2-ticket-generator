# Conference Ticket Generator

## Overview

The Conference Ticket Generator is a web application built with React that allows users to generate a personalized conference ticket. Users can input their details, upload an avatar, and receive a formatted ticket upon successful submission. The form includes validation, accessibility features, and state persistence for a seamless user experience.

## Features

- **User Input Form:**
  - Full Name (text input)
  - Email Address (email input with validation)
  - Avatar Upload (via Cloudinary or external image URL)
  - Submit Button
- **Form Validation:**
  - Ensures all required fields are filled.
  - Validates email format.
  - Accepts only Cloudinary URLs or external image links for avatars.
- **State Persistence:**
  - Retains user input using IndexedDB or local storage.
  - Data remains intact even if the page is refreshed.
- **Ticket Generation:**
  - Displays a generated ticket upon successful form submission.
  - Ticket includes user's full name, email address, and avatar image.
- **Accessibility:**
  - Fully accessible form with screen-reader support.
  - Keyboard navigable.
  - Clear focus and hover states for interactive elements.
- **Responsive Design:**
  - Optimized for all screen sizes.
  - Ensures proper spacing and stacking on small screens.

## Technologies Used

- React
- HTML
- TailwindCSS (for styling)
- JavaScript
- React Router
- Framer Motion (for animations)
- React Barcode
- Tailwind Merge
- Clsx
- Cloudinary (for avatar storage)
- LocalStorage (for state persistence)

## Project Structure

```text
├── README.md
│
│
├── eslint.config.js
├── index.html
├── netlify.toml
├── package-lock.json
├── package.json
├── public
│   ├── logo.svg
│   └── vite.svg
├── src
│   ├── AppRoutes.jsx
│   ├── assets
│   │   ├── cloud.svg
│   │   ├── envelope.svg
│   │   └── ticket-bg.svg
│   ├── components
│   │   ├── About.jsx
│   │   ├── Button.jsx
│   │   ├── Header.jsx
│   │   ├── ImageUploader.jsx
│   │   ├── Logo.jsx
│   │   ├── Navbar.jsx
│   │   ├── NumberOfTickets.jsx
│   │   ├── SelectTicketsNumber.jsx
│   │   ├── TextInputError.jsx
│   │   ├── Ticket.jsx
│   │   ├── TicketSelectionOption.jsx
│   │   └── TicketTypeGroup.jsx
│   ├── context
│   │   └── TicketSelectionContext.jsx
│   ├── data.js
│   ├── hooks
│   │   ├── useFormValidation.js
│   │   ├── useStickyNav.js
│   │   ├── useTicketDownload.js
│   │   └── useTicketSelectionContext.js
│   ├── index.css
│   ├── layouts
│   │   ├── FormStepLayout.jsx
│   │   └── MainContentLayout.jsx
│   ├── main.jsx
│   ├── pages
│   │   ├── About.jsx
│   │   ├── AttendeeDetails.jsx
│   │   ├── TicketBooked.jsx
│   │   ├── TicketLists.jsx
│   │   ├── TicketPage.jsx
│   │   └── TicketSelection.jsx
│   └── utils
│       ├── cn.js
│       ├── generateTicketId.js
│       └── mapLocationToStepNumber.js
└── vite.config.js
```

## How to Run the Project

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run dev
   ```

5. Open `http://localhost:3000` in a web browser to use the application.

---

### **Hosting**

The Conference Ticket Generator is hosted on:

[Live Demo](https://x-line-ticket-generator.netlify.app/)

---

### **GitHub Repository**

[GitHub Repo](https://github.com/Akeemmudash/hngx-stage2-ticket-generator.git)

---

### **Figma Design**

[Conference Ticket Generator Screenshot](https://www.figma.com/community/file/1470800949188681164/event-ticket-booking-ui-open-source-practice-project)

---

### **Acknowledgments**

- [HNG Internship](https://hng.tech) for providing this task.
- Thanks to mentors and peers for their guidance and support.

---
