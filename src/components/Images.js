const Images = ({ images }) => {
    return (
      <div className="images-container">
        {images.map((image) => (
          <div key={image.id} className="image-card">
            <img
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
              alt={image.title}
            />
          </div>
        ))}
      </div>
    );
  };
  
  export default Images