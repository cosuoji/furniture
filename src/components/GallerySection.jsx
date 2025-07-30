import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const GallerySection = ({ title, images }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div
        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full max-w-md"
        onClick={() => setOpen(true)}
      >
        <img
          src={images[0]}
          alt={`${title} preview`}
          className="w-full h-64 object-cover"
        />
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
};

export default GallerySection;
