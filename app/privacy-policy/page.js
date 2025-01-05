"use client";

const PrivacyPolicyPage = () => {
  return (
    <main className="container mx-auto px-6 py-10 text-gray-300">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Thank you for using our software and services. This Privacy Policy
          explains how your information is collected, used, and protected when
          you interact with this website or any associated products.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Information Collection</h2>
        <p>
          This site may collect minimal information for functional purposes,
          such as usage analytics, error reporting, or user preferences. No
          personally identifiable information is collected unless explicitly
          provided by you, for example, through contact forms or feedback.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Use of Information</h2>
        <ul className="list-disc list-inside">
          <li>Improving the quality of the website and associated products.</li>
          <li>Identifying issues and enhancing user experience.</li>
          <li>Responding to queries or feedback if provided by you.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
        <p>
          This website may use cookies to store small pieces of information,
          such as session data or user preferences, to improve your experience.
          You can disable cookies in your browser settings if desired.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
        <p>
          Minimal third-party integrations are used. However, some tools like
          analytics or error tracking services may process non-personal
          information. No sensitive data is shared with third parties.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          Reasonable measures are taken to protect data, but please note that
          no system is completely secure. It’s recommended to avoid sharing
          sensitive information through this platform.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          You have the right to request information about the data collected
          from you or to request its deletion if applicable. For any concerns
          or questions, feel free to reach out.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, you can reach
          out through the contact details available on the website.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;
