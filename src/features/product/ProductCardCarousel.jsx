function ProductCardCarousel({ images, id }) {
  const jsonString = images.replace(/'/g, '"');
  const imagesArr = JSON.parse(jsonString);
  return (
    <div id={id} className="carousel slide">
      <div className="carousel-inner">
        {imagesArr.map((image, index) => {
          return (
            <div
              key={index}
              className={`carousel-item c-item ${index === 0 ? "active" : ""}`}
            >
              <img src={image} className="d-block w-100 c-img" alt="..." />
            </div>
          );
        })}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        href={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        href={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ProductCardCarousel;
