import React from 'react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Decorative background element */}
      <div className="fixed top-0 right-0 -z-10 w-1/2 h-1/2 bg-[#ff7b7b] opacity-5 blur-[120px] rounded-full" />
      <div className="fixed bottom-0 left-0 -z-10 w-1/2 h-1/2 bg-[#ff7b7b] opacity-5 blur-[120px] rounded-full" />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 md:pt-40 md:pb-32 relative">
        <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-16 tracking-tight">
          Privacy <span className="text-[#ff7b7b]">Policy</span>
        </h1>
        
        <div className="prose prose-lg max-w-none text-gray-700 space-y-12 leading-relaxed font-medium">
          <section className="space-y-4">
            <p className="text-xl md:text-2xl text-black font-semibold leading-snug">
              We, at Slam Out Loud, value your privacy and treat all information regarding any transaction you engage in with the Foundation as highly confidential.
            </p>
            <p>
              Slam Out Loud is committed to providing privacy for our web site visitors as well as recipients of our email messages. Slam Out Loud promotes the tenets of opt-in email and privacy among our partners and employees. We are continuously evaluating our internal procedures and technology to ensure privacy at all levels in our organization.
            </p>
            <p>
              The policy (“Privacy Policy”) will elaborate on the personal data or information that the Foundation collects and the usage and sharing of such data when you visit the Website or use the services of the Foundation. This Privacy Policy will also elaborate on the measures that we take to protect the security of the data collected.
            </p>
            <p className="pt-4 border-t border-gray-100 italic">
              Reach out to us at <a href="mailto:contact@slamoutloud.com" className="text-[#ff7b7b] font-bold hover:underline transition-all">contact@slamoutloud.com</a> for purposes of updating your contact information, removing your name from our mailing lists, or for general enquiries related to our privacy practices.
            </p>
          </section>

          <section className="space-y-6 bg-gray-50/50 p-8 md:p-12 rounded-3xl border border-gray-100">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Information We Collect and How We Use It
            </h2>
            <p>
              We will not use or disclose (share, sell or divulge) any of your personal information to third parties unless we have been authorised by you, or are required or authorised to do so by law. We may use your personal information:
            </p>
            <ul className="grid md:grid-cols-1 gap-4 list-none pl-0">
              {[
                "for purposes related to our research, planning, program development and management;",
                "for purposes connected with the operation, administration, development or enhancement of the our services and the Website; and",
                "where we suspect that fraud or unlawful activity has been, is being or may be engaged in."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="text-[#ff7b7b] font-bold text-xl">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Donations
            </h2>
            <p>
              When you make a donation through our Website, we may ask you to submit certain personal information that is necessary for us to process the transaction (“Donor Data”). We will not make any other use of Donor Data other than as prescribed hereinbelow. Donor Data may be used for the following purposes:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Distributing receipts and thanking donors for donations",
                "Informing donors about upcoming fundraising and other activities",
                "Internal analysis, such as research and analytics",
                "Record keeping",
                "Reporting to governmental agencies as required by law",
                "Surveys, metrics, and other analytical purposes",
                "Other purposes related to fundraising operations"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-center bg-white p-4 rounded-2xl border border-gray-50 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#ff7b7b]" />
                  <span className="text-sm font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-6 p-8 md:p-12 rounded-3xl bg-black text-white">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Cookies
            </h2>
            <p className="text-gray-300">
              Client-side cookies are used to verify the login status of visitors and registered users of our web site. Usage of a cookie is in no way linked to any personally identifiable information while on our site.
            </p>
            <p className="text-gray-300">
              If visitors reject a cookie, they may still use our site; however, they may not be able to log in, or access all areas of our site. (Cookies are text files our website places in your computer’s browser to store your preferences.)
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Information We Share
            </h2>
            <p>
              Slam Out Loud does not sell, rent, trade or otherwise disclose personal information about our Website visitors (nor our offline donors), except as described herein. We share information provided by our Website visitors with service providers that we have retained to perform services on our behalf ― for example, to process donations, send direct mails, emailers, greeting cards, making phone calls, and others.
            </p>
            <p>
              We may share your information like phone numbers, email address, etc. with these agencies so that they can perform these activities efficiently. These service providers are not authorized by us to use or disclose the information except as necessary to perform services on our behalf or to comply with legal requirements.
            </p>
            <div className="bg-[#ff7b7b]/5 p-6 rounded-2xl border border-[#ff7b7b]/10 italic text-sm">
              Note: Since we do not have complete control over these third parties, such third parties’ usage of your data/info shall be governed by the terms of their privacy policy, over which the Foundation has no control.
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Security and Privacy
            </h2>
            <p>
              We are committed to protecting Donor Data and other personal information from unauthorised access, alteration, disclosure, or destruction. Amongst other things, we undertake a range of security practices, including measures to help secure web access to sensitive data and undertake efforts to address security vulnerabilities for various tools and databases.
            </p>
            <p>
              The Foundation has the necessary security mechanisms in place and only designated employees have access to your personal information. We maintain administrative, technical and physical safeguards to protect against unauthorized disclosure, use, alteration or destruction of the personal information in our possession.
            </p>
            <div className="flex items-center gap-4 bg-green-50 p-6 rounded-2xl border border-green-100 text-green-900">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600 shrink-0"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <p className="text-sm font-bold">
                All online transactions are done on a secure server. You’ll know that you’re in a secure area of our Website when a “lock” icon appears on your screen and the “http” portion of our URL address changes to “https.”
              </p>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Choice/Opt-out
            </h2>
            <p>
              For e-newsletter subscribers, when we take contacts from our team’s Google contact list and send the newsletter, we are not taking people’s permission to use their email address. In every form that we get filled for the subscription, we ask people to tick a mark to ‘agree to our terms and conditions’ which involves a term for using their email address to send the e-newsletter.
            </p>
            <p>
              So, anyone engaging with us automatically receives our e-newsletter and in case one doesn’t want it, they can unsubscribe by clicking on unsubscribe. Users of our site will always be notified if their information is being collected by any outside parties.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-black flex items-center gap-3">
              <span className="w-8 h-1 bg-[#ff7b7b] rounded-full"></span>
              Notification of changes
            </h2>
            <p>
              If we change our privacy policy, we will post these changes to ensure that our users are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it.
            </p>
            <p>
              If at any point we decide to use personally identifiable information in a manner different from that stated at the time it was collected, we will notify users by way of an email at the last address provided and/or by prominently posting notice of the changes on our website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
