import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const CONTACTDATA = [
  {
    icon: <MapPin className="h-6 w-6 text-green-600" />,
    title: "Visit Us",
    details: ["123 Health Street", "Wellness City, WC 12345", "United States"],
  },
  {
    icon: <Phone className="h-6 w-6 text-green-600" />,
    title: "Call Us",
    details: ["Main: (555) 123-4567", "Support: (555) 123-4568"],
  },
  {
    icon: <Mail className="h-6 w-6 text-green-600" />,
    title: "Email Us",
    details: ["hello@nutribloom.com", "support@nutribloom.com"],
  },
  {
    icon: <Clock className="h-6 w-6 text-green-600" />,
    title: "Business Hours",
    details: [
      "Monday - Friday: 8:00 AM - 8:00 PM",
      "Saturday: 9:00 AM - 6:00 PM",
      "Sunday: 10:00 AM - 4:00 PM",
    ],
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Contact Information
      </h2>
      <div className="space-y-6">
        {CONTACTDATA.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="p-2 bg-green-100 rounded-lg">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {item.title}
              </h3>
              {item.details.map((detail, i) => (
                <p key={i} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Find Us Here
        </h3>
        <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin className="h-12 w-12 mx-auto mb-2" />
            <p>Interactive Map Coming Soon</p>
            <p className="text-sm">123 Health Street, Wellness City</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
