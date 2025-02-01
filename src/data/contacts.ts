import { ContactInfo } from "../types/contact";
import founder from "../assets/founder.png";
import om from "../assets/om.png";
import tm from "../assets/tm.png";
import fm from "../assets/fm.png";

const processContact = (contact: ContactInfo): ContactInfo => ({
  ...contact,
  fullName: `${contact.firstName} ${contact.lastName}`,
});

export const contacts: Record<string, ContactInfo> = {
  founder: processContact({
    id: "founder",
    image: founder,
    firstName: "Dilith",
    lastName: "Achalan",
    email: "support@efficia.lk",
    secondaryEmail: "dilith.achalan@outlook.com",
    designation: "Founder, Operations Specialist",
    company: "Efficia IT Solutions",
    mobile: "+94773330060",
    work: "",
  }),
  om: processContact({
    id: "om",
    image: om,
    firstName: "Lahiru",
    lastName: "Lakshan",
    email: "support@efficia.lk",
    secondaryEmail: "glahirulakshan@outlook.com",
    designation: "Operations Manager",
    company: "Efficia IT Solutions",
    mobile: "+94773587608",
    work: "",
  }),
  tm: processContact({
    id: "tm",
    image: tm,
    firstName: "Ishara",
    lastName: "Lakshan",
    email: "support@efficia.lk",
    secondaryEmail: "isharalakshan@outlook.com",
    designation: "Technology Manager",
    company: "Efficia IT Solutions",
    mobile: "+94765913525",
    work: "",
  }),
  fm: processContact({
    id: "fm",
    image: fm,
    firstName: "Hansani",
    lastName: "Perera",
    email: "support@efficia.lk",
    secondaryEmail: "hansanimadushani91@gmail.com",
    designation: "Finance Manager",
    company: "Efficia IT Solutions",
    mobile: "+94771681184",
    work: "",
  }),
};
