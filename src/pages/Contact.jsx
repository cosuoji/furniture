import { MapPin, Phone, Mail, MapIcon } from "lucide-react";


export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      lines: ["Shop No. 22-23 E-Mall", "Orchid Rd" ,"Second Toll Gate", "Lekki Lagos"],
    },
    {
      icon: Phone,
      title: "Call Us",
      lines: ["+234 702 654 1493", "+234 702 644 5836", "Mon–Sat: 9–7", "Sun: 11–5"],
    },
    {
      icon: Mail,
      title: "Email",
      lines: ["ffclassicfurniture@gmail.com"],
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Get in Touch */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-furniture-slate">Get in Touch</h2>
          {contactInfo.map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="bg-furniture-brown text-white p-2 rounded-full">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                {item.lines.map((line, j) => (
                  <p key={j} className="text-gray-600 text-sm">{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map */}
      <section className="bg-furniture-light text-center py-20">
        <MapIcon className="w-12 h-12 mx-auto text-furniture-brown mb-4" />
        <h3 className="text-xl font-semibold text-furniture-slate">
         <span>Shop No. 22-23 E-Mall</span> <br/>
         <span>Orchid Rd, Second Toll Gate,<br/> Lekki Lagos</span>
        </h3>
        <p className="text-gray-600">Come visit our showroom!</p>
      </section>
      </div>
    </section>
  );
}
