import { Award, Truck, Palette, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const collections = [
    {
      title: "Bedroom",
      description: "Create your perfect sanctuary with our bedroom collection",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Living Room",
      description: "Stylish seating and tables for entertaining",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
    {
      title: "Dining Room",
      description: "Gather around beautiful dining sets",
      image: "https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    },
  ];

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-selected pieces crafted from the finest materials",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      description: "Complimentary white-glove delivery and setup service",
    },
    {
      icon: Palette,
      title: "Design Consultation",
      description: "Expert interior design advice tailored to your space",
    },
  ];



  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          }}
        />
        <div className="absolute inset-0  bg-opacity-40" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Refined Living</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your space with our curated collection of premium furniture and design expertise
          </p>
          <Link to="/services">
            <button className="bg-furniture-brown hover:bg-opacity-90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore Our Services
            </button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">Featured Collections</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated furniture pieces that blend style, comfort, and functionality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden rounded-xl mb-4">
                  <img
                    src={collection.image}
                    alt={`${collection.title} Collection`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-furniture-slate mb-2">{collection.title}</h3>
                <p className="text-gray-600">{collection.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-furniture-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-furniture-slate mb-4">Why Choose Refined Living</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to bringing you the finest furniture and exceptional service
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-furniture-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-furniture-slate mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
