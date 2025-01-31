import { ContactInfo } from "../types/contact";
import ceo from "../assets/ceo.jpg";

const processContact = (contact: ContactInfo): ContactInfo => ({
  ...contact,
  fullName: `${contact.firstName} ${contact.lastName}`,
});

export const contacts: Record<string, ContactInfo> = {
  ceo: processContact({
    id: "ceo",
    image: ceo,
    firstName: "Dilith",
    lastName: "Achalan",
    email: "support@efficia.lk",
    secondaryEmail: "",
    designation: "Chief Executive Officer",
    company: "Efficia IT Solutions",
    mobile: "+94773330060",
    work: "",
  }),
  cto: processContact({
    id: "cto",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
    firstName: "Michael",
    lastName: "Johnson",
    email: "michael.johnson@company.com",
    secondaryEmail: "cto@company.com",
    designation: "Chief Technology Officer",
    company: "Tech Solutions Inc.",
    mobile: "+1 (555) 234-5678",
    work: "+1 (555) 876-5432",
  }),
  coo: processContact({
    id: "coo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    firstName: "Sarah",
    lastName: "Williams",
    email: "sarah.williams@company.com",
    secondaryEmail: "coo@company.com",
    designation: "Chief Operating Officer",
    company: "Tech Solutions Inc.",
    mobile: "+1 (555) 345-6789",
    work: "+1 (555) 765-4321",
  }),
  cfo: processContact({
    id: "cfo",
    image: "https://images.unsplash.com/photo-1559989976-c3d521d1638b",
    firstName: "David",
    lastName: "Brown",
    email: "david.brown@company.com",
    secondaryEmail: "cfo@company.com",
    designation: "Chief Financial Officer",
    company: "Tech Solutions Inc.",
    mobile: "+1 (555) 456-7890",
    work: "+1 (555) 654-3210",
  }),
};
