import React from "react";
import { useNavigate } from "react-router-dom";
import { ContactInfo } from "../types/contact";
import { Building2 } from "lucide-react";

interface ContactCardProps {
  contact: ContactInfo;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${contact.id}`)}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={contact.image}
          alt={`${contact.fullName}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {contact.fullName}
        </h3>
        <div className="flex items-center text-gray-600 mb-4">
          <Building2 className="w-4 h-4 mr-2" />
          <span>{contact.designation}</span>
        </div>
        <div className="text-sm text-gray-500">{contact.email}</div>
      </div>
    </div>
  );
};

export default ContactCard;
