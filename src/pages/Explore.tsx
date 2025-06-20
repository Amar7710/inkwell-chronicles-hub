
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, TrendingUp, Users, Calendar, Heart, MessageCircle, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock trending posts data
  const trendingPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      excerpt: "Exploring emerging technologies and frameworks that will shape the web development landscape.",
      author: "Alex Chen",
      date: "2024-06-18",
      readTime: "8 min read",
      category: "Technology",
      likes: 342,
      comments: 56,
      views: 2847,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "Sustainable Design Practices",
      excerpt: "How designers can create environmentally conscious digital experiences.",
      author: "Maya Rodriguez",
      date: "2024-06-17",
      readTime: "6 min read",
      category: "Design",
      likes: 289,
      comments: 43,
      views: 1923,
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for creating robust and maintainable backend services.",
      author: "David Kim",
      date: "2024-06-16",
      readTime: "12 min read",
      category: "Engineering",
      likes: 445,
      comments: 78,
      views: 3156,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const categories = [
    { name: "Technology", count: 245, color: "bg-blue-100 text-blue-800" },
    { name: "Design", count: 189, color: "bg-purple-100 text-purple-800" },
    { name: "Engineering", count: 156, color: "bg-green-100 text-green-800" },
    { name: "Business", count: 134, color: "bg-orange-100 text-orange-800" },
    { name: "Lifestyle", count: 98, color: "bg-pink-100 text-pink-800" },
    { name: "Travel", count: 76, color: "bg-cyan-100 text-cyan-800" }
  ];

  const topAuthors = [
    { name: "Sarah Johnson", posts: 24, followers: 1856, avatar: "SJ" },
    { name: "Alex Chen", posts: 18, followers: 1432, avatar: "AC" },
    { name: "Maya Rodriguez", posts: 15, followers: 1289, avatar: "MR" },
    { name: "David Kim", posts: 21, followers: 1167, avatar: "DK" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Stories
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover trending posts, popular categories, and top writers in our community
          </p>
          
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search posts, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Trending Posts */}
            <section className="mb-12">
              <div className="flex items-center mb-6">
                <TrendingUp className="h-6 w-6 text-orange-500 mr-2" />
                <h2 className="text-2xl font-bold text-gray-900">Trending This Week</h2>
              </div>
              
              <div className="space-y-6">
                {trendingPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-48 md:h-32 flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-full h-48 md:h-32 object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <Badge className={categories.find(c => c.name === post.category)?.color}>
                              {post.category}
                            </Badge>
                          </div>
                          
                          <Link to={`/post/${post.id}`}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-blue-600 line-clamp-2">
                              {post.title}
                            </h3>
                          </Link>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarImage src={`https://ui-avatars.com/api/?name=${post.author}&background=3b82f6&color=fff`} />
                                <AvatarFallback>{post.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{post.author}</p>
                                <div className="flex items-center text-xs text-gray-500 space-x-2">
                                  <span>{new Date(post.date).toLocaleDateString()}</span>
                                  <span>•</span>
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {post.readTime}
                                  </span>
                                </div>
                              </div>
                            </div>
                            
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span className="flex items-center">
                                <Heart className="h-4 w-4 mr-1" />
                                {post.likes}
                              </span>
                              <span className="flex items-center">
                                <MessageCircle className="h-4 w-4 mr-1" />
                                {post.comments}
                              </span>
                              <span>{post.views} views</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Popular Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Popular Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Badge className={category.color}>
                        {category.name}
                      </Badge>
                    </div>
                    <span className="text-sm text-gray-500">{category.count} posts</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Authors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Top Authors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topAuthors.map((author, index) => (
                  <div key={author.name} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <div className="flex items-center space-x-3 flex-1">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`https://ui-avatars.com/api/?name=${author.name}&background=3b82f6&color=fff`} />
                        <AvatarFallback>{author.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{author.name}</p>
                        <p className="text-sm text-gray-500">{author.posts} posts • {author.followers} followers</p>
                      </div>
                    </div>
                    <span className="text-2xl font-bold text-gray-300">#{index + 1}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2">Start Writing Today</h3>
                <p className="text-blue-100 mb-4 text-sm">
                  Share your stories and connect with our community of writers.
                </p>
                <Link to="/create">
                  <Button variant="secondary" className="w-full">
                    Create Your First Post
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Explore;
