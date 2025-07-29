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
      description: "Initial discussion about your needs and preferences",
    },
    {
      number: 2,
      title: "Design",
      description: "Create a customized design plan for your space",
    },
    {
      number: 3,
      title: "Selection",
      description: "Choose from our curated furniture collections",
    },
    {
      number: 4,
      title: "Installation",
      description: "Professional delivery and setup in your home",
    },
  ];

  return (
    <div>
      {/* Services Hero */}
      <section className="py-20 bg-furniture-slate text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            From furniture selection to complete interior design, we provide comprehensive solutions for your home
          </p>
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

          <div className="grid md:grid-cols-4 gap-8">
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
