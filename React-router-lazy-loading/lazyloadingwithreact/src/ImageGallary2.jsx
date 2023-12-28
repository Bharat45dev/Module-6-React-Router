import { useEffect, useState } from 'react';


function ImageGallary2() {
  const [image, setImages] = useState([]);

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
      {image && image.map((images) => (
        <div key={image.id}>
          <img src={image.thumbnailUrl} alt={image.title} />
        </div>
      ))}
    </div>
  );
}

export default ImageGallary2;