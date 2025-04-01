import React from 'react';
import './Blogs.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Balancing Work and Single Parenthood",
      content: "Being a single parent while managing a career can feel overwhelming, but with the right strategies, it's possible to create a healthy balance. Prioritizing tasks, setting realistic goals, and establishing routine can help reduce stress. Remember, taking small breaths and seeking support from family or community can make a big difference. You're not alone in this journey—find what works best for you and your child.",
      image: "/images/blog-work-balance.jpg"
    },
    {
      id: 2,
      title: "Self-Care for Single Parents: Why It Matters",
      content: "Taking care of yourself is just as important as caring for your child. As a single parent, it's easy to put your needs last, but small acts of self-care—like enjoying a quiet cup of tea, reading a book, or taking a short walk—can recharge your mind and body. Prioritizing your well-being helps you stay strong, patient, and present for your child. Remember, a happy and healthy parent creates a happy home!",
      image: "/images/blog-self-care.jpg"
    },
    {
      id: 3,
      title: "Financial Planning for Single Parents",
      content: "Managing finances as a single parent can feel challenging, but with smart planning, financial stability is achievable. Creating a budget, prioritizing savings, and exploring financial assistance programs can help secure a brighter future for you and your child. Small, consistent steps—like tracking expenses and setting financial goals—can lead to long-term stability. Remember, financial security is not just about money; it's about peace of mind for you and your family.",
      image: "/images/blog-finance.jpg"
    },
    {
      id: 4,
      title: "Raising a Happy and Confident Child Alone",
      content: "Being a single parent comes with challenges, but it also brings unique opportunities to build a strong and loving bond with your child. Encouraging open communication, providing emotional support, and celebrating small achievements help boost their confidence. Your love, guidance, and presence are the key ingredients in raising a happy and secure child. Remember, it's not about having two parents—it's about having one who truly cares.",
      image: "/images/blog-happy-child.jpg"
    }
  ];

  return (
    <div className="blogs-page">
      <Navbar />
      
      <section className="blogs-hero">
        <div className="container">
          <h1>Parenting Resources & Blogs</h1>
          <p>Practical advice and support for single parents</p>
        </div>
      </section>

      <section className="blogs-content">
        <div className="container">
          <div className="blogs-grid">
            {blogPosts.map(post => (
              <article key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-details">
                  <h2>{post.title}</h2>
                  <p>{post.content}</p>
                  <button className="read-more">Read More</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-cta">
        <div className="container">
          <h2>Stay Updated with Our Latest Resources</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;