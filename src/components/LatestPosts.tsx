
import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LatestPosts = () => {
  const posts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the web development landscape and how they can benefit your business.",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      category: "Technology"
    },
    {
      title: "5 Essential SEO Strategies for Small Businesses",
      excerpt: "Learn proven SEO techniques that can help your small business rank higher in search results.",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      category: "Marketing"
    },
    {
      title: "Building User-Centered Design: A Complete Guide",
      excerpt: "Everything you need to know about creating designs that truly serve your users' needs and goals.",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      category: "Design"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Posts</h2>
            <p className="text-xl text-gray-600">
              Stay updated with our latest insights and industry news
            </p>
          </div>
          
          <Button 
            variant="outline" 
            className="hidden md:inline-flex items-center space-x-2 border-red-200 text-red-600 hover:bg-red-50"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-50 text-red-600 text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-red-600 font-medium group-hover:text-red-700">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12 md:hidden">
          <Button 
            variant="outline" 
            className="inline-flex items-center space-x-2 border-red-200 text-red-600 hover:bg-red-50"
          >
            <span>View All Posts</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;
