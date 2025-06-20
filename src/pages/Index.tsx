
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays, Clock, User, Edit, Trash2, Plus } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Explore the latest trends and technologies shaping the future of web development, from React to modern CSS frameworks.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Sarah Johnson",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: true
    },
    {
      id: 2,
      title: "The Art of Minimalist Design",
      excerpt: "How simplicity and functionality can create powerful user experiences in the digital age.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Michael Chen",
      date: "2024-06-12",
      readTime: "3 min read",
      category: "Design",
      image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    },
    {
      id: 3,
      title: "Building Sustainable Software",
      excerpt: "Best practices for creating maintainable, scalable applications that stand the test of time.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      author: "Emma Davis",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      featured: false
    }
  ]);

  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Share Your Stories
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A beautiful platform for writers, thinkers, and storytellers to share their ideas with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3">
                  <Plus className="mr-2 h-5 w-5" />
                  Start Writing
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3">
                Browse Posts
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">Featured Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Editor's Pick</h2>
          </div>
          
          <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4">{featuredPost.category}</Badge>
                <CardTitle className="text-2xl md:text-3xl mb-4 text-gray-900 leading-tight">
                  {featuredPost.title}
                </CardTitle>
                <CardDescription className="text-lg mb-6 text-gray-600 leading-relaxed">
                  {featuredPost.excerpt}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${featuredPost.author}&background=3b82f6&color=fff`} />
                      <AvatarFallback>{featuredPost.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-900">{featuredPost.author}</p>
                      <div className="flex items-center text-sm text-gray-500 space-x-3">
                        <span className="flex items-center">
                          <CalendarDays className="h-4 w-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Link to={`/post/${featuredPost.id}`}>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Read Full Story
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Recent Posts Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Stories</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover fresh perspectives and insights from our community of writers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 leading-tight hover:text-blue-600 transition-colors">
                  <Link to={`/post/${post.id}`}>{post.title}</Link>
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author}&background=3b82f6&color=fff`} />
                    <AvatarFallback className="text-xs">{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-2">
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <Link to={`/post/${post.id}`}>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
