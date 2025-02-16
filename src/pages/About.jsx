const About = () => {
  return (
    <div className="about space-y-8">
      <h2 className="">
        Event Ticket Booking UI – Open Source Practice Project 🎟️
      </h2>

      <h3>Overview</h3>
      <p>
        This is a beginner-friendly yet practical Event Ticket Booking UI
        designed for developers to clone, explore, and build upon. The design
        focuses on a seamless, login-free ticket reservation flow, allowing
        users to book event tickets quickly and efficiently.
      </p>
      <p>
        The project consists of a three-step ticket booking flow, and developers
        can extend it further by integrating payment solutions, user
        authentication (optional), and ticket validation systems.
      </p>

      <h4>Flow & Features</h4>

      <h5>1️⃣ Ticket Selection</h5>
      <ul className="space-y-2">
        <li>Users can browse available tickets (Free & Paid).</li>
        <li>Ticket options are displayed in a list or card view.</li>
        <li>
          For Free Tickets → Clicking “Get Free Ticket” proceeds to attendee
          details.
        </li>
        <li>
          For Paid Tickets → Clicking “Purchase Ticket” would ideally open a
          payment modal.
        </li>
      </ul>

      <h5>2️⃣ Attendee Details Form</h5>
      <ul className="space-y-2">
        <li>Users input their Name, Email, and optional Phone Number.</li>
        <li>Profile picture upload option with preview functionality.</li>
        <li>
          Ticket summary is visible to ensure users review their details before
          submission.
        </li>
      </ul>

      <h5> 3️⃣ Payment or Success Page</h5>
      <ul className="space-y-2">
        <li>
          If the ticket is free, the user is taken directly to the Ticket
          Confirmation Page.
        </li>
        <li>
          If the ticket is paid, developers can integrate Stripe, Paystack, or
          Flutterwave to process payments before showing the confirmation page.
        </li>
        <li>Upon successful booking, users should receive:</li>
      </ul>

      <h3>How to Build This 🚀</h3>

      <p>This UI can be implemented using:</p>

      <h4>📌 Frontend (Next.js or React)</h4>
      <h5>Component Breakdown:</h5>
      <ul className="space-y-2">
        <li>TicketCard.tsx → Displays ticket details</li>
        <li>AttendeeForm.tsx → Captures user details</li>
        <li>PaymentModal.tsx → Handles payment processing</li>
        <li>SuccessScreen.tsx → Shows the final ticket preview</li>
        <li>
          State Management: React’s Context API, Zustand, or Redux (if needed).
        </li>
        <li>
          File Handling: Users should be able to upload images (profile picture
          for ticket) using Firebase Storage, Cloudinary, or local preview with
          URL.createObjectURL().
        </li>
      </ul>

      <h4>📌 Backend (Optional)</h4>
      <ul>
        <li>
          <h5> If persistence is required, a backend can be built using:</h5>
        </li>
        <li>Node.js & Express or Firebase Functions</li>
        <li>
          Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket
          records
        </li>
      </ul>

      <h4>📌 Payment Integration</h4>
      <ul>
        <h5>For paid events, developers should integrate:</h5>
        <li>Stripe Checkout (for international transactions)</li>
        <li>Paystack or Flutterwave (for African users)</li>
      </ul>
      <h3>What You’ll Learn 🧑‍💻</h3>

      <ul className="space-y-3">
        <li>File handling & validation (profile picture uploads).</li>
        <li>Dynamic UI updates based on ticket selection.</li>
        <li>Persisting bookings using local state or a backend.</li>
        <li>Integrating payment gateways for ticket purchases.</li>
        <li>Generating & validating QR Codes for event check-in (Advanced)</li>
      </ul>

      <footer>
        <p>Need Help? Reach Out!💬</p>
      </footer>
    </div>
  );
};

export default About;
