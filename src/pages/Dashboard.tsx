
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { CalendarDays, Clock, Edit, Trash2, MoreHorizontal, Plus, Eye, TrendingUp, Users, FileText, Heart } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const { toast } = useToast();
  
  const [posts] = useState([
    {
      id: 1,
      title: "Getting Started with Modern Web Development",
      excerpt: "Explore the latest trends and technologies shaping the future of web development.",
      status: "published",
      date: "2024-06-15",
      readTime: "5 min read",
      category: "Technology",
      views: 1247,
      likes: 89,
      comments: 23,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      title: "The Art of Minimalist Design",
      excerpt: "How simplicity and functionality can create powerful user experiences.",
      status: "draft",
      date: "2024-06-12",
      readTime: "3 min read",
      category: "Design",
      views: 0,
      likes: 0,
      comments: 0,
      image: "https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      title: "Building Sustainable Software",
      excerpt: "Best practices for creating maintainable, scalable applications.",
      status: "published",
      date: "2024-06-10",
      readTime: "7 min read",
      category: "Engineering",
      views: 892,
      likes: 56,
      comments: 12,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ]);

  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    joinDate: "2024-01-15",
    totalPosts: posts.length,
    totalViews: posts.reduce((sum, post) => sum + post.views, 0),
    totalLikes: posts.reduce((sum, post) => sum + post.likes, 0),
    followers: 156
  });

  const publishedPosts = posts.filter(post => post.status === "published");
  const draftPosts = posts.filter(post => post.status === "draft");

  const handleDeletePost = (postId) => {
    toast({
      title: "Post Deleted",
      description: "Your post has been deleted successfully.",
    });
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "published":
        return <Badge className="bg-green-100 text-green-800">Published</Badge>;
      case "draft":
        return <Badge variant="secondary">Draft</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Manage your posts and track your writing progress</p>
          </div>
          <Link to="/create">
            <Button className="mt-4 md:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="h-4 w-4 mr-2" />
              New Post
            </Button>
          </Link>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalPosts}</div>
              <p className="text-xs text-muted-foreground">
                {publishedPosts.length} published, {draftPosts.length} drafts
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +20% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.totalLikes}</div>
              <p className="text-xs text-muted-foreground">
                +15% from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Followers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{user.followers}</div>
              <p className="text-xs text-muted-foreground">
                +12 this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Posts Management */}
        <Card>
          <CardHeader>
            <CardTitle>Your Posts</CardTitle>
            <CardDescription>
              Manage your published posts and drafts
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Posts ({posts.length})</TabsTrigger>
                <TabsTrigger value="published">Published ({publishedPosts.length})</TabsTrigger>
                <TabsTrigger value="drafts">Drafts ({draftPosts.length})</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {posts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    onDelete={handleDeletePost}
                    getStatusBadge={getStatusBadge}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="published" className="space-y-4">
                {publishedPosts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    onDelete={handleDeletePost}
                    getStatusBadge={getStatusBadge}
                  />
                ))}
              </TabsContent>
              
              <TabsContent value="drafts" className="space-y-4">
                {draftPosts.map((post) => (
                  <PostCard 
                    key={post.id} 
                    post={post} 
                    onDelete={handleDeletePost}
                    getStatusBadge={getStatusBadge}
                  />
                ))}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PostCard = ({ post, onDelete, getStatusBadge }) => {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Post Image */}
          <div className="md:w-32 md:h-24 flex-shrink-0">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-32 md:h-24 object-cover rounded-lg"
            />
          </div>
          
          {/* Post Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                {getStatusBadge(post.status)}
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to={`/post/${post.id}`} className="cursor-pointer">
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to={`/edit/${post.id}`} className="cursor-pointer">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    className="cursor-pointer text-red-600"
                    onClick={() => onDelete(post.id)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <CalendarDays className="h-4 w-4 mr-1" />
                  {new Date(post.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
              </div>
              
              {post.status === "published" && (
                <div className="flex items-center space-x-4 text-xs">
                  <span className="flex items-center">
                    <Eye className="h-3 w-3 mr-1" />
                    {post.views}
                  </span>
                  <span className="flex items-center">
                    <Heart className="h-3 w-3 mr-1" />
                    {post.likes}
                  </span>
                  <span>{post.comments} comments</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Dashboard;
