"use client";

const TermsOfServicePage = () => {
  return (
    <main className="container mx-auto px-6 py-10 text-gray-300">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Welcome! These Terms of Service ("Terms") govern your use of this
          website and any associated software or services ("Services"). By
          accessing or using the Services, you agree to be bound by these Terms.
          Please read them carefully.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Use of Services</h2>
        <ul className="list-disc list-inside">
          <li>
            You must use the Services in compliance with applicable laws and
            regulations.
          </li>
          <li>
            Do not use the Services for unauthorized purposes, including
            reverse-engineering or exploiting the software.
          </li>
          <li>
            Any misuse of the Services may result in termination of access.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p>
          All content provided through the Services, including but not limited
          to text, code, and graphics, is owned by or licensed to the developer.
          You are not permitted to copy, distribute, or modify this content
          without prior consent.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Liability Disclaimer</h2>
        <p>
          The Services are provided "as is" without warranties of any kind,
          either express or implied. The developer is not responsible for any
          direct, indirect, or consequential damages arising from the use of the
          Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Changes to Services</h2>
        <p>
          The developer reserves the right to modify or discontinue any aspect
          of the Services at any time without notice. Continued use of the
          Services after changes are implemented constitutes acceptance of
          those changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p>
          These Terms are governed by the laws of your jurisdiction. Any
          disputes arising from these Terms or the use of the Services will be
          resolved exclusively in the appropriate courts of that jurisdiction.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>
          If you have any questions or concerns about these Terms of Service,
          please reach out using the contact details available on the website.
        </p>
      </section>
    </main>
  );
};

export default TermsOfServicePage;
