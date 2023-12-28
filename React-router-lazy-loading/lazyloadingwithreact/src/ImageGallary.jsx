import { useEffect, useState } from 'react';


function ImageGallary() {
  const [images,setImages] = useState();

  // fetch api for images show in ui side
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        // Set only the first 15 items in the array
        setImages(data.slice(0, 15));
      });
  }, []);

  return (
    <div className="OtherComponent">
        {/* using array map method  to show all the images  */}
    {images && images.map((images) => (
      <div key={images.id}>
        <img src={images.thumbnailUrl} alt={images.title} />
      </div>
    ))}
  </div>
  );
}

export default ImageGallary;