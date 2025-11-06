import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { trackInitiateCheckout } from "@/lib/metaPixel";

const Footer = () => {
  const navigate = useNavigate();
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showRefundPolicy, setShowRefundPolicy] = useState(false);

  return (
    <footer className="py-12 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.svg"
                alt="Growu Media Logo"
                className="w-12 h-12 object-contain"
              />
              <span className="text-xl font-bold">
                <span className="text-foreground">GrowU</span>
                <span className="text-primary">Media</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              YouTube Growth Engines, Built for Scale
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Video Editing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Content Strategy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Repurposing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Publishing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => {
                trackInitiateCheckout();
                navigate('/booking');
              }} className="hover:text-primary transition-colors text-left">Book a Call</button></li>
              <li><a href="mailto:growth@growumedia.com" className="hover:text-primary transition-colors">growth@growumedia.com</a></li>
              <li><a href="https://www.instagram.com/growumedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/growumedia" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <button
              onClick={() => setShowPrivacyPolicy(!showPrivacyPolicy)}
              className="hover:text-primary transition-colors underline"
            >
              Privacy Policy
            </button>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <button
              onClick={() => setShowTermsOfService(!showTermsOfService)}
              className="hover:text-primary transition-colors underline"
            >
              Terms of Service
            </button>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <button
              onClick={() => setShowRefundPolicy(!showRefundPolicy)}
              className="hover:text-primary transition-colors underline"
            >
              Refund Policy
            </button>
          </div>
          <p>© 2024 GrowUMedia. All rights reserved. Built with passion to scale businesses on YouTube.</p>
        </div>

        {/* Privacy Policy Modal */}
        {showPrivacyPolicy && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setShowPrivacyPolicy(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
              >
                ×
              </button>
              
              <div className="pr-8">
                <h2 className="text-2xl font-bold mb-6">Privacy Policy (For Services & Training)</h2>
                <p className="text-sm text-muted-foreground mb-6">Last Updated: 25.07.2025</p>
                
                <div className="space-y-6 text-sm">
                  <p>
                    At GrowUMedia™, we value your privacy and are committed to protecting your personal data. 
                    This Privacy Policy explains how we collect, use, and safeguard your information when you 
                    access our website www.growumedia.com, use our services, or enroll in our training programs.
                  </p>

                  <div>
                    <h3 className="font-bold text-base mb-3">1. Information We Collect</h3>
                    <p className="mb-2">We collect the following types of data:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Personal Information:</strong> Name, email, phone number, billing address, age (for training), and social media profiles (if linked).</li>
                      <li><strong>Payment Details:</strong> We do not store your credit/debit card details. Payments are processed through secure third-party gateways.</li>
                      <li><strong>Usage Data:</strong> IP address, browser type, cookies, and website analytics.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">2. How We Use Your Information</h3>
                    <p className="mb-2">We use your data to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Provide and improve our services and training programs.</li>
                      <li>Process payments and generate invoices.</li>
                      <li>Communicate with you regarding services, training schedules, and updates.</li>
                      <li>Send promotional offers (you may opt-out anytime).</li>
                      <li>Ensure compliance with legal obligations.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">3. Data Sharing</h3>
                    <p className="mb-2">We do not sell your data to third parties. However, we may share data with:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Payment Gateways (for processing transactions).</li>
                      <li>Service Providers (for delivery of training content or technical support).</li>
                      <li>Legal Authorities (if required by law).</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">4. Data Security</h3>
                    <p>
                      We implement industry-standard security measures to protect your data. However, no system is 100% secure. 
                      By using our services, you acknowledge the inherent risks of online transactions.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">5. Cookies</h3>
                    <p>
                      Our website uses cookies for analytics and improved user experience. You can disable cookies in your 
                      browser settings, but this may affect functionality.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">6. Third-Party Links</h3>
                    <p>Our site may contain links to third-party sites. We are not responsible for their privacy practices.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">7. Your Rights</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Access, update, or delete your personal information.</li>
                      <li>Opt-out of marketing communications.</li>
                      <li>For any requests, email us at growth@growumedia.com.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">8. Changes to Policy</h3>
                    <p>We may update this policy at any time. Changes will be posted on this page with the updated date.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">9. Contact Us</h3>
                    <p>For any privacy-related concerns:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Email: growth@growumedia.com</li>
                      <li>Phone: +91-7888402867</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Terms of Service Modal */}
        {showTermsOfService && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setShowTermsOfService(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
              >
                ×
              </button>
              
              <div className="pr-8">
                <h2 className="text-2xl font-bold mb-6">Terms of Service</h2>
                
                <div className="space-y-6 text-sm">
                  <p>
                    Welcome to GrowUMedia™ (a registered trademark of A P COMMUNICATIONS, GSTIN: 03ACFFA6867L1Z3). 
                    These Terms of Service govern your use of our website www.growumedia.com and all related services. 
                    By accessing or using our website and services, you agree to be bound by these Terms.
                  </p>

                  <div>
                    <h3 className="font-bold text-base mb-3">1. Introduction</h3>
                    <p className="mb-3">
                      www.growumedia.com (hereinafter referred to as the "Website") is owned and operated by A P COMMUNICATIONS, 
                      a company registered under applicable laws of India, with its registered office at:
                    </p>
                    <div className="bg-muted p-3 rounded text-xs">
                      <p><strong>Address:</strong> Building No./Flat No.: D 235 A</p>
                      <p><strong>Road/Street:</strong> FOCAL POINT</p>
                      <p><strong>Locality/Sub Locality:</strong> PHASE 8 B</p>
                      <p><strong>City/Town/Village:</strong> Mohali</p>
                      <p><strong>District:</strong> SAS Nagar</p>
                      <p><strong>State:</strong> Punjab</p>
                      <p><strong>PIN Code:</strong> 160059</p>
                    </div>
                    <p className="mt-3">
                      By using the Website or availing our services, you signify that you have read, understood, and agreed to these 
                      Terms of Service along with our Privacy Policy. If you do not agree, please do not use the Website or our services.
                    </p>
                    <p className="mt-2">
                      This is an electronic record under the Information Technology Act, 2000 and the rules thereunder. 
                      It does not require any physical or digital signature.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">2. Definitions</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>"Company", "We", "Us", "Our" refers to A P COMMUNICATIONS, operating under the brand name GrowUMedia™.</li>
                      <li>"You", "Your", "User" refers to any person accessing or using our Website or services.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">3. Modification of Terms</h3>
                    <p>
                      We reserve the right to modify, amend, or update these Terms at any time without prior notice. 
                      Continued use of the Website after changes indicates your acceptance of the revised Terms. 
                      Please check this page periodically.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">4. Eligibility</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>You must be at least 18 years old to use our services.</li>
                      <li>If you are under 18, you may use the Website only with the involvement of a parent or legal guardian who agrees to these Terms.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">5. Registration & Account Security</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>To access certain services, you may be required to create an account.</li>
                      <li>You agree to provide accurate, current, and complete information and update it as needed.</li>
                      <li>You are responsible for maintaining the confidentiality of your account credentials and all activities under your account.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">6. Services</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>GrowUMedia provides video editing, YouTube channel management, content strategy, and related digital marketing services.</li>
                      <li>Specific details of deliverables, pricing, and timelines will be defined in the Service Agreement or Project Proposal for each client.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">7. Payments & Billing</h3>
                    <p className="mb-2">All payments for services must be made in accordance with the terms specified in the Service Agreement or invoice.</p>
                    <p className="mb-2"><strong>We accept:</strong></p>
                    <ul className="list-disc pl-5 space-y-1 mb-3">
                      <li>Credit/Debit Cards (Visa, Mastercard, Amex)</li>
                      <li>Net Banking</li>
                      <li>UPI</li>
                      <li>Payment Wallets</li>
                    </ul>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All fees are non-refundable unless otherwise stated in writing.</li>
                      <li>Late payments may attract interest charges as per the agreement.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">8. Intellectual Property</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All content, logos, graphics, and materials on the Website are owned by GrowUMedia™ / A P COMMUNICATIONS and protected under applicable copyright and trademark laws.</li>
                      <li>You may not copy, reproduce, or distribute any content without prior written consent.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">9. License & Restrictions</h3>
                    <p className="mb-2">You are granted a limited, non-exclusive, non-transferable license to access the Website for personal or business use, subject to these Terms. You agree NOT to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Reproduce or copy any content for commercial purposes without consent.</li>
                      <li>Upload or share content that is unlawful, harmful, or infringes on third-party rights.</li>
                      <li>Attempt unauthorized access to the Website, servers, or networks.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">10. Communication</h3>
                    <p>
                      By using our services, you consent to receive emails, calls, and messages from us regarding service updates, 
                      promotional offers, and support. You can opt-out of marketing communications anytime by emailing growth@growumedia.com.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">11. Refund & Cancellation</h3>
                    <p>
                      Refunds are governed by our Refund Policy, which may vary by service type. Generally, payments are non-refundable 
                      once work has commenced. Cancellations must be requested in writing.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">12. Limitation of Liability</h3>
                    <p>
                      GrowUMedia will not be liable for any indirect, incidental, or consequential damages arising from the use of our 
                      services or website. Our maximum liability shall not exceed the amount paid by you for the service in question.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">13. Termination</h3>
                    <p>
                      We may suspend or terminate your account and access to our services if you violate these Terms or applicable laws. 
                      You may also terminate services by providing written notice, subject to terms in the Service Agreement.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">14. Governing Law & Jurisdiction</h3>
                    <p>These Terms shall be governed by the laws of India, with exclusive jurisdiction of courts in Mohali, Punjab.</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">15. Contact Us</h3>
                    <p>For any queries or concerns regarding these Terms, please contact:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Email: growth@growumedia.com</li>
                      <li>Phone: +91-7888402867</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Refund Policy Modal */}
        {showRefundPolicy && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-6 relative">
              <button
                onClick={() => setShowRefundPolicy(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground text-2xl"
              >
                ×
              </button>
              
              <div className="pr-8">
                <h2 className="text-2xl font-bold mb-6">Refund & Cancellation Policy</h2>
                
                <div className="space-y-6 text-sm">
                  <p>
                    At GrowUMedia™, we strive to ensure client satisfaction with our services and training programs. 
                    This Refund & Cancellation Policy outlines the terms for cancellations and refunds.
                  </p>

                  <div>
                    <h3 className="font-bold text-base mb-3">1. For Services (Video Editing, YouTube Growth, etc.)</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>All payments for services are non-refundable once the project has started.</li>
                      <li>If you cancel before work begins, you may receive a full refund.</li>
                      <li>If partial work is completed, refunds will be prorated at our discretion.</li>
                      <li>No refunds for completed projects.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">2. For Video Editing Training Programs</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Refunds can be requested within 7 days of course purchase only if less than 10% of the course material has been accessed.</li>
                      <li>After 7 days OR if more than 10% of material is accessed, no refunds will be provided.</li>
                      <li>For live mentorship or bootcamps, refunds are allowed only if cancellation is made 48 hours before the first session.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">3. Cancellations</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Service cancellations must be requested in writing via email to growth@growumedia.com.</li>
                      <li>Training program cancellations should be done via the same email.</li>
                      <li>Refunds (if eligible) will be processed within 7-10 business days to the original payment method.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">4. Exceptions</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>No refunds for downloadable digital products or resources.</li>
                      <li>No refunds for delays caused by client's failure to provide timely feedback, approvals, or content.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold text-base mb-3">5. Contact for Refund Requests</h3>
                    <p>For any refund-related queries or requests, please contact:</p>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      <li>Email: growth@growumedia.com</li>
                      <li>Phone: +91-7888402867</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
