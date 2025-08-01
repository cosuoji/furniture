import { Heart, Users, Leaf, Star, Handshake, Hourglass, Hammer } from "lucide-react";
import { MdHighQuality } from "react-icons/md";
import saheed from "../assets/saheed.jpeg"

const About = () => {
  const values = [
    {
      icon: MdHighQuality,
      title: "Quality First",
      description: "We operate with transparency, honesty, and respect, building lasting relationships with our customers, suppliers, and communities",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with each client to understand their needs and exceed their expectations.",
    },
    {
      icon: Hammer,
      title: "Innovation",
      description: "We constantly push boundaries, blending modern design trends with traditional techniques to create fresh, functional, and stylish pieces."},
      {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Our clients’ needs and satisfaction are at the heart of everything wedo. We aim to provide exceptional service and deliver products that exceed expectations.",
    },
    {
      icon: Hourglass,
      title: "Timeless Design",
      description: "We create furniture that not only meets today’s needs but remains relevant and stylish for years to come, offering lasting value",
    },
    {
      icon: Handshake,
      title: "Collaboration",
      description: "We value teamwork — with our clients, designers, and artisans to bring creative visions to life while maintaining quality and consistency.",
    },
  ];

  const teamMembers = [
    {
      name: "Folarin Saheed Aderemi",
      role: "Chief Executive Officer, FF Classic Furniture & Decor",
      description: "He is the dynamic CEO and Managing Director of FF Classic Furniture, a leading name in the furniture manufacturing and interior solutions industry in Nigeria. With a unique blend of creativity, leadership, and a passion for design, he has built FF Classic into a benchmark of innovation and excellence.",
      image: saheed,
    },
    {
      name: "Ezeji Miracle Eberechukwu",
      role: "Chief Operations Officer, FF Classic Furniture & Decor",
      description: "Ezeji Miracle serves as the strategic and results-driven Chief Operations Officer at FF Classic, where she oversees the day-to-day operations of the company, ensuring efficiency, quality, and seamless execution across all levels. With a deep understanding of the furniture manufacturing industry, Miracle is committed to driving operational excellence and innovation, while consistently optimizing processes to meet the ever-evolving needs of the market.",
      image: "",
    },
  ];

    const testimonials = [
    {
      text: "We couldn’t be happier with the custom furniture we received! The craftsmanship is top-notch, and the team made sure everything was delivered on time.",
      author: "— Emmanuel Lugban, Lagos.",
    },
    {
      text: "The quality of the woodwork and design is unmatched. The team at FF Classic Furniture exceeded all expectations.",
      author: "David Ajagbor, Delta State",
    },
        {
      text: "Always a pleasure to work with FF Classic Furniture. The best anytime!",
      author: "— Pelumi A. Fagbemi, Lagos.",
    },
  ];

  return (
    <div>
      {/* About Hero */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-furniture-slate mb-6">FF Classic Furniture</h1>
              <p className="text-lg text-gray-600 mb-6">
                    FF Classic Furniture isn't just about filling spaces — it's about shaping environments that reflect
                    personality and purpose. Born from a desire to redefine the furniture landscape in Nigeria, our brand is
                    driven by the pursuit of innovation, where craftsmanship meets creativity to deliver designs that are
                    both enduring and inspiring.              </p>
              <p className="text-lg text-gray-600 mb-8">
                  At FF Classic Furniture, we understand that each client has their own vision that's why we specialize in
                  curating custom pieces that reflect personal style and meet unique needs. Our goal is to transform every
                  space into a perfect balance of comfort, sophistication, and functionality which is why FF Classic
                  Furniture has become a trusted name, synonymous with quality and excellence across Nigeria.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-furniture-brown mb-2">200+</div>
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
            <h2 className="text-6xl font-bold text-furniture-slate mb-4">Our Mission & Values</h2>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-furniture-slate mb-4">Vision</h3>
            <p className="text-furniture-slate">Our vision is to become Nigeria's leading furniture brand, renowned for its cutting-edge innovation,
superior craftsmanship, and game-changing designs.</p>
          </div>


             <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-furniture-slate mb-4">Mission Statement</h3>
            <p className="text-furniture-slate">Our mission is to provide our customers with beautifully designed, durable, and sustainable
furniture that enriches their living and working environments, while offering exceptional
service and craftsmanship.
To create functional and stylish furniture that inspires cr eativity, fosters comfort, and adds
value to every space we touch, all while staying true to quality and innovation.</p>
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

          <div className="grid md:grid-cols-2 gap-8">
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
      {/* <section className="py-20 bg-furniture-light">
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
      </section> */}

            {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
