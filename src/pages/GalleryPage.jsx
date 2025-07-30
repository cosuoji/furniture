import GallerySection from '../components/GallerySection';
import beds1 from "../assets/beds/beds1.jpeg"
import beds2 from "../assets/beds/beds2.jpeg"
import beds3 from "../assets/beds/beds3.jpeg"
import beds4 from "../assets/beds/beds4.jpeg"
import chairs1 from "../assets/chairs/chairs1.jpeg"
import chairs2 from "../assets/chairs/chairs2.jpeg"
import chairs3 from "../assets/chairs/chairs3.jpeg"
import chairs4 from "../assets/chairs/chairs4.jpeg"
import chairs5 from "../assets/chairs/chairs5.jpeg"
import kitchen1 from "../assets/kitchen/kitchen1.jpeg"
import living1 from "../assets/livingareas/living1.jpeg"
import living2 from "../assets/livingareas/living2.jpeg"
import living3 from "../assets/livingareas/living3.jpeg"
import office1 from "../assets/office/office1.jpeg"
import console1 from "../assets/tvconsole/console1.jpeg"
import console2 from "../assets/tvconsole/console2.jpeg"
import console3 from "../assets/tvconsole/console3.jpeg"


const beds = [
    beds1,
    beds2,
    beds3,
    beds4
]

const chairs = [
    chairs1,
    chairs2,
    chairs3,
    chairs4,
    chairs5
]

const kitchen = [kitchen1]
const living = [living1, living2, living3]
const office = [office1]
const console = [console1, console2, console3]




const GalleryPage = () => {
  return (
    <div className="px-6 py-10 pt-20 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">Our Furniture Collection</h1>

     <div className='grid grid-cols-3 gap-8'>

        <GallerySection title="Beds" images={beds} />
        <GallerySection title="Chairs" images={chairs} />
        <GallerySection title="Kitchen" images={kitchen} />
         <GallerySection title="Living Areas" images={living} />
         <GallerySection title="Office" images={office} />
        <GallerySection title="Consoles" images={console} />
     </div>

      {/* Add more sections like Sofas, Tables, etc */}
    </div>
  );
};

export default GalleryPage;
