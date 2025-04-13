const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="hero-btn">
          <button className="btn shop-now-btn">Shop Now</button>
          <button className="btn category-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="Amazon" className="Amazon" />
            <img src="/images/flipkart.png" alt="Flipkart" className="Flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="Hero" />
        <div className="hero-image-overlay"></div>
      </div>
    </section >
  );
}
// Export the HeroSection component
export default HeroSection;