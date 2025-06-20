
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, Clock, ArrowLeft, Heart, MessageCircle, Share2, Bookmark } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PostView = () => {
  const { id } = useParams();
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(24);

  // Mock post data - in real app, this would come from API
  const [post] = useState({
    id: 1,
    title: "Getting Started with Modern Web Development",
    excerpt: "Explore the latest trends and technologies shaping the future of web development, from React to modern CSS frameworks.",
    content: `
      <p>Web development has evolved dramatically over the past few years. What once required complex setups and extensive knowledge of multiple technologies can now be accomplished with elegant, modern solutions that prioritize developer experience and performance.</p>

      <h2>The Modern Development Stack</h2>
      <p>Today's web development landscape is dominated by powerful frameworks and tools that make building interactive, performant applications easier than ever. React has revolutionized how we think about user interfaces, while tools like Vite have transformed the development experience with lightning-fast hot module replacement.</p>

      <h3>Why React?</h3>
      <p>React's component-based architecture allows developers to build reusable UI components that can be composed together to create complex interfaces. The declarative nature of React makes it easier to reason about your application's state and how it changes over time.</p>

      <p>Some key benefits of React include:</p>
      <ul>
        <li><strong>Component Reusability:</strong> Write once, use everywhere</li>
        <li><strong>Virtual DOM:</strong> Efficient updates and rendering</li>
        <li><strong>Large Ecosystem:</strong> Extensive library support</li>
        <li><strong>Developer Tools:</strong> Excellent debugging experience</li>
      </ul>

      <h2>Modern CSS Frameworks</h2>
      <p>CSS frameworks like Tailwind CSS have changed how we approach styling. Instead of writing custom CSS files, developers can use utility classes to rapidly prototype and build beautiful interfaces.</p>

      <blockquote>
        "The best way to predict the future is to create it." - This principle applies perfectly to modern web development, where we're constantly pushing the boundaries of what's possible.
      </blockquote>

      <h3>Performance Considerations</h3>
      <p>Modern web applications need to be fast, accessible, and performant across all devices. This means considering:</p>
      <ul>
        <li>Code splitting and lazy loading</li>
        <li>Image optimization</li>
        <li>Efficient state management</li>
        <li>Progressive enhancement</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>The future of web development is bright, with new technologies like WebAssembly, server components, and edge computing opening up new possibilities. As developers, staying current with these trends while maintaining focus on user experience and accessibility will be key to building the next generation of web applications.</p>

      <p>Whether you're just starting your journey or you're a seasoned developer, the most important thing is to keep learning, experimenting, and building. The web platform continues to evolve, and there's never been a better time to be a web developer.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-06-15",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
    tags: ["Web Development", "React", "CSS", "JavaScript", "Frontend"]
  });

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Posts
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.excerpt}
          </p>

          {/* Author Info */}
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author}&background=3b82f6&color=fff`} />
                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <span className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleLike}
                className={`${isLiked ? 'text-red-600 border-red-600' : ''} hover:text-red-600 hover:border-red-600`}
              >
                <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                {likes}
              </Button>
              <Button variant="outline" size="sm">
                <MessageCircle className="h-4 w-4 mr-1" />
                12
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleBookmark}
                className={isBookmarked ? 'text-blue-600 border-blue-600' : ''}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </Button>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <Separator className="my-8" />

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="cursor-pointer hover:bg-blue-100">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Author Bio */}
        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <div className="flex items-start space-x-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author}&background=3b82f6&color=fff`} />
              <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.author}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Sarah is a senior frontend developer with over 8 years of experience in web technologies. 
                She's passionate about creating accessible, performant web applications and sharing knowledge 
                with the developer community.
              </p>
              <Button variant="outline" size="sm">
                Follow Author
              </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default PostView;
