import { Heart, Users, Leaf, Star } from "lucide-react";


const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Quality First",
      description: "We never compromise on quality. Every piece in our collection is carefully selected for its craftsmanship, durability, and timeless appeal.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with each client to understand their needs and exceed their expectations.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We're committed to sustainable practices, sourcing from manufacturers who share our environmental values.",
    },
  ];

  const teamMembers = [
    {
      name: "Samuel Don",
      role: "Founder & Lead Designer",
      description: "With 20 years in interior design, Sarah founded Refined Living to bring exceptional furniture and design to every home.",
      image: "https://images.unsplash.com/photo-1645736594095-b9a4cabc1a7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

    const testimonials = [
    {
      text: "Refined Living transformed our home completely. The quality and service exceeded our expectations.",
      author: "Sarah Johnson",
    },
    {
      text: "Beautiful furniture and exceptional customer service. Highly recommend for anyone looking to upgrade their space.",
      author: "Michael Chen",
    },
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-furniture-slate mb-6">About Refined Living</h1>
              <p className="text-lg text-gray-600 mb-6">
                For over 15 years, Refined Living has been transforming homes with carefully curated furniture and exceptional design services. We believe that your home should reflect your personality while providing comfort and functionality.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our passion for quality craftsmanship and timeless design drives us to source only the finest pieces from trusted manufacturers and artisans around the world.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-furniture-brown mb-2">2000+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-furniture-brown mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Our showroom"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-furniture-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">Our Mission & Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-furniture-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold text-furniture-slate mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced team of designers and furniture experts are here to help you create your dream space
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-semibold text-furniture-slate mb-2">{member.name}</h3>
                <p className="text-furniture-brown font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-furniture-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-furniture-slate mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-6">
              Refined Living began as a passion project in Sam's garage, where she would refinish vintage furniture pieces for friends and family. What started as a hobby quickly grew into a thriving business as word spread about her exceptional eye for design and quality.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Today, we've expanded to serve clients across the region with our showroom featuring carefully curated collections from around the world. Despite our growth, we've maintained our commitment to personal service and attention to detail that made us who we are.
            </p>
            <p className="text-lg text-gray-600">
              Every piece in our collection tells a story, and we're here to help you write yours.
            </p>
          </div>
        </div>
      </section>

            {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-furniture-light p-8 rounded-xl">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <div className="font-semibold text-furniture-slate">{testimonial.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
