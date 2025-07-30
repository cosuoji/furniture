import { Sofa, Compass, Wrench, Home, Truck, RotateCcw } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Furniture Selection",
      description: "Curated collections of premium furniture pieces for every room in your home.",
      features: ["Living room sets", "Bedroom collections", "Dining room furniture", "Office solutions"],
    },
    {
      icon: Compass,
      title: "Interior Design",
      description: "Complete interior design services from concept to completion.",
      features: ["Space planning", "Color consultation", "3D visualization", "Project management"],
    },
    {
      icon: Wrench,
      title: "Custom Solutions",
      description: "Bespoke furniture and design solutions tailored to your needs.",
      features: ["Custom furniture design", "Built-in solutions", "Unique finishes", "Specialized requirements"],
    },
    {
      icon: Home,
      title: "Home Consultation",
      description: "In-home consultation to assess your space and design needs.",
      features: ["Space assessment", "Style consultation", "Budget planning", "Timeline development"],
    },
    {
      icon: Truck,
      title: "Delivery & Setup",
      description: "Professional delivery and installation services for your furniture.",
      features: ["White-glove delivery", "Professional assembly", "Room placement", "Packaging removal"],
    },
    {
      icon: RotateCcw,
      title: "Renovation Support",
      description: "Support for home renovations and furniture refresh projects.",
      features: ["Renovation planning", "Furniture staging", "Timeline coordination", "Post-renovation setup"],
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Consultation",
      description: "Collaborate with our experts to share your ideas, preferences, and space needs for a personalized solution",
    },
    {
      number: 2,
      title: "Design",
      description: "Partner with our experts to create a personalized furniture design plan that reflects your style and preferences",
    },
    {
      number: 3,
      title: "Expert Production",
      description: "Our artisans create each piece with care, using premium materials and time-tested techniques to ensure exceptional quality",
    },
    {
      number: 4,
      title: "Timely Delivery",
      description: "Receive your pieces on schedule, delivered directly to your door and ready to transform your living space",
    },
      {
      number: 5,
      title: "Continuous Support",
      description: "Our support does not end at delivery — we provide follow-ups and prompt assistance to address any concerns and ensure your complete satisfaction.",
    },
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="py-20 bg-furniture-slate text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
Our services cover a broad spectrum, designed to meet the needs of our clients both corporate and
residential. Some of our services include: Custom-made furniture designs, Ready-made furniture,
furniture repair & refinishing and nationwide delivery.          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-furniture-light p-8 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="bg-furniture-brown text-white w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-furniture-slate mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-furniture-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to transform your space
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-furniture-brown text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-furniture-slate mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
