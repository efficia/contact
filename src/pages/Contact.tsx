import { useEffect, useRef } from "react";
import { Phone, Mail, Building2, Download, ArrowLeft } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useParams, useNavigate } from "react-router-dom";
import { contacts } from "../data/contacts";

const Contact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactInfo = contacts[id || ""] || contacts.ceo;
  const downloadTriggered = useRef(false);

  // Generate vCard content
  const vCardContent = `BEGIN:VCARD
VERSION:3.0
N:${contactInfo.lastName};${contactInfo.firstName};;;
TITLE:${contactInfo.designation}
EMAIL;type=INTERNET;type=WORK:${contactInfo.email}
EMAIL;type=INTERNET;type=WORK:${contactInfo.secondaryEmail}
TEL;type=CELL:${contactInfo.mobile}
TEL;type=WORK:${contactInfo.work}
END:VCARD`;

  const vCardUrl = `data:text/vcard;charset=utf-8,${encodeURIComponent(
    vCardContent
  )}`;

  useEffect(() => {
    if (!downloadTriggered.current) {
      const link = document.createElement("a");
      link.href = vCardUrl;
      link.download = `${contactInfo.fullName}.vcf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      downloadTriggered.current = true;
    }
  }, [vCardUrl, contactInfo.fullName]);

  return (
    <div className="min-h-screen pt-10 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto">
        <button
          onClick={() => navigate("/contact")}
          className="mb-8 flex items-center text-primary-600 hover:text-primary-800 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Team
        </button>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="md:flex-1">
                <div className="bg-primary-100 px-8 py-12 text-secondary-600">
                  <div className="flex items-center space-x-6">
                    <img
                      src={contactInfo.image}
                      alt={contactInfo.fullName}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                    />
                    <div>
                      <h1 className="text-3xl font-bold mb-2">
                        {contactInfo.fullName}
                      </h1>
                      <h3 className="text-xl text-secondary-600">
                        {contactInfo.designation}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="px-8 py-12 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Company</p>
                      <p className="font-medium">{contactInfo.company}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Mobile</p>
                      <a
                        href={`tel:${contactInfo.mobile}`}
                        className="font-medium hover:text-primary-600"
                      >
                        {contactInfo.mobile}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Email</p>
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="font-medium hover:text-primary-600"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 md:hidden">
                    <a
                      href={vCardUrl}
                      download={`${contactInfo.fullName}.vcf`}
                      className="flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download Contact
                    </a>
                  </div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="hidden md:flex md:w-80 bg-gray-50 flex-col items-center justify-center p-8 border-l border-gray-100">
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Scan to Add Contact
                  </h3>
                  <p className="text-sm text-gray-600">
                    Use your phone's camera to scan and save contact
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow-md">
                  <QRCodeSVG
                    value={vCardContent}
                    size={200}
                    level="H"
                    includeMargin={true}
                  />
                </div>

                <div className="mt-8 w-full">
                  <a
                    href={vCardUrl}
                    download={`${contactInfo.fullName}.vcf`}
                    className="flex items-center justify-center w-full px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-blue-700 transition"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
