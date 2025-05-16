export const AllBlogPosts = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js",
      excerpt:
        "Learn how to build and deploy scalable web applications using Next.js, including best practices for performance optimization and deployment strategies.",
      image: "/blog_nextjs.jpg",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["Next.js", "Web Development", "Performance"],
      slug: "building-scalable-web-applications",
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch",
      excerpt:
        "Explore the latest trends in web development, from AI-powered tools to new frameworks and methodologies shaping the future of the industry.",
      image: "/blog2.jpg",
      date: "March 10, 2024",
      readTime: "6 min read",
      tags: ["Web Development", "AI", "Trends"],
      slug: "future-of-web-development",
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns and Practices",
      excerpt:
        "Deep dive into advanced TypeScript patterns and best practices for building robust and maintainable applications.",
      image: "/blog_ts.jpg",
      date: "March 5, 2024",
      readTime: "10 min read",
      details:"Deep dive into advanced TypeScript patterns and best practices for building robust and maintainable applications. Typescript is",
      tags: ["TypeScript", "Programming", "Best Practices"],
      slug: "mastering-typescript",
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "A comprehensive guide to using CSS Grid for creating complex and responsive layouts.",
      image: "/blog_css.jpg",
      date: "February 28, 2023",
      details:`A grid layout consists of a grid container and several grid items. The grid container must have its display property set to grid or inline-grid. grid creates a block-level container, and inline-grid creates an inline-level container.

<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
.container {
  display: grid;
}
All direct children of this container will automatically become grid items.

Grid columns
Visit Code Demo 🔗

Hint: You can edit this CodePen demo directly.

You can then specify how many columns you wish to create using the grid-template-columns property. The property accepts any number of values. The number of values determines the number of columns, and the value itself determines the size of that column. For example:

.container {
  display: grid;
  grid-template-columns: 100px 200px;
}
.item {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: x-large;
  text-align: center;
  padding: 20px;
  border: 1px solid orange;
  background-color: bisque;
}`,
      readTime: "7 min read",
      tags: ["CSS", "Web Design", "Layout"],
      slug: "mastering-css-grid",
    },
    {
      id: 5,
      title: "Introduction to GraphQL",
      excerpt: "Learn the basics of GraphQL and how it can improve your API development experience.",
      image: "/blog_graphql.jpg",
      date: "January 15, 2023",
      readTime: "9 min read",
      tags: ["GraphQL", "API", "Backend"],
      slug: "introduction-to-graphql",
    },
    {
      id: 6,
      title: "State Management with Redux Toolkit",
      excerpt: "Simplify your Redux code and improve maintainability with Redux Toolkit.",
      image: "/blog_redux.jpg",
      date: "December 5, 2022",
      readTime: "8 min read",
      tags: ["Redux", "React", "State Management"],
      slug: "redux-toolkit",
    },
  ];

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  slug: string;
  content: string;
  views: number;
  likes: number;
  comments: number;
  relatedPosts: number[];
}

  export const BlogPosts: BlogPostType[] = [
    {
      id: 1,
      title: "Building Scalable Web Applications with Next.js",
      excerpt: "Learn how to build and deploy scalable web applications using Next.js, including best practices for performance optimization and deployment strategies.",
      image: "/blog_nextjs.jpg",
      date: "March 15, 2024",
      readTime: "8 min read",
      author: {
        name: "Sarah Johnson",
        avatar: "/api/placeholder/32/32",
        role: "Senior Frontend Developer"
      },
      tags: ["Next.js", "Web Development", "Performance"],
      slug: "building-scalable-web-applications",
      content: `
        <h2>Introduction to Next.js</h2>
        <p>Next.js has quickly become one of the most popular frameworks for building React applications. It provides a wealth of features right out of the box, including server-side rendering, static site generation, and API routes.</p>
        
        <h2>Performance Optimization Techniques</h2>
        <p>When building scalable applications, performance is a key concern. Next.js provides several features to help optimize your application:</p>
        <ul>
          <li>Automatic code splitting</li>
          <li>Image optimization with next/image</li>
          <li>Static site generation for faster page loads</li>
          <li>Incremental Static Regeneration (ISR)</li>
        </ul>
        
        <h2>Deployment Strategies</h2>
        <p>Deploying a Next.js application can be done in several ways, depending on your specific needs:</p>
        <p>Vercel offers the simplest deployment experience, as it's built by the same team behind Next.js. However, you can also deploy to other platforms like Netlify, AWS, or a traditional server.</p>
      `,
      views: 1842,
      likes: 124,
      comments: 37,
      relatedPosts: [2, 3, 6]
    },
    {
      id: 2,
      title: "The Future of Web Development: Trends to Watch",
      excerpt: "Explore the latest trends in web development, from AI-powered tools to new frameworks and methodologies shaping the future of the industry.",
      image: "/blog2.jpg",
      date: "March 10, 2024",
      readTime: "6 min read",
      author: {
        name: "Michael Chen",
        avatar: "/api/placeholder/32/32",
        role: "Tech Evangelist"
      },
      tags: ["Web Development", "AI", "Trends"],
      slug: "future-of-web-development",
      content: `
        <h2>AI-Powered Development Tools</h2>
        <p>Artificial intelligence is transforming how developers work, with tools that can generate code, optimize performance, and even design user interfaces.</p>
        
        <h2>WebAssembly and the Future of Browser Applications</h2>
        <p>WebAssembly (Wasm) continues to evolve, enabling high-performance applications in the browser that were previously only possible in native applications.</p>
        
        <h2>Microservices and Composable Architecture</h2>
        <p>The trend toward microservices and composable architecture is changing how we build and maintain web applications, offering greater flexibility and scalability.</p>
      `,
      views: 2156,
      likes: 198,
      comments: 42,
      relatedPosts: [1, 3, 5]
    },
    {
      id: 3,
      title: "Mastering TypeScript: Advanced Patterns and Practices",
      excerpt: "Deep dive into advanced TypeScript patterns and best practices for building robust and maintainable applications.",
      image: "/blog_ts.jpg",
      date: "March 5, 2024",
      readTime: "10 min read",
      author: {
        name: "Alicia Gonzalez",
        avatar: "/api/placeholder/32/32",
        role: "TypeScript Specialist"
      },
      tags: ["TypeScript", "Programming", "Best Practices"],
      slug: "mastering-typescript",
      content: `
        <h2>Type-Level Programming</h2>
        <p>TypeScript's type system is powerful enough to enable type-level programming, allowing you to create complex type relationships that can catch errors at compile time.</p>
        
        <h2>Advanced Generic Patterns</h2>
        <p>Generics are one of TypeScript's most powerful features. Understanding advanced generic patterns can help you create more reusable and type-safe code.</p>
        
        <h2>Utility Types and Custom Types</h2>
        <p>TypeScript provides several utility types out of the box, but you can also create your own to solve specific problems in your codebase.</p>
      `,
      views: 1578,
      likes: 143,
      comments: 28,
      relatedPosts: [1, 2, 6]
    },
    {
      id: 4,
      title: "Mastering CSS Grid Layout",
      excerpt: "A comprehensive guide to using CSS Grid for creating complex and responsive layouts.",
      image: "/blog_css.jpg",
      date: "February 28, 2023",
      readTime: "7 min read",
      author: {
        name: "Emma Wilson",
        avatar: "/api/placeholder/32/32",
        role: "UI/UX Designer"
      },
      tags: ["CSS", "Web Design", "Layout"],
      slug: "mastering-css-grid",
      content: `
        <h2>Understanding Grid Containers and Items</h2>
        <p>A grid layout consists of a grid container and several grid items. The grid container must have its display property set to grid or inline-grid. grid creates a block-level container, and inline-grid creates an inline-level container.</p>
        
        <pre><code>
  &lt;div class="container"&gt;
    &lt;div class="item"&gt;1&lt;/div&gt;
    &lt;div class="item"&gt;2&lt;/div&gt;
    &lt;div class="item"&gt;3&lt;/div&gt;
    &lt;div class="item"&gt;4&lt;/div&gt;
    &lt;div class="item"&gt;5&lt;/div&gt;
    &lt;div class="item"&gt;6&lt;/div&gt;
  &lt;/div&gt;
  
  .container {
    display: grid;
  }
        </code></pre>
        
        <p>All direct children of this container will automatically become grid items.</p>
        
        <h2>Grid Columns</h2>
        <p>You can specify how many columns you wish to create using the grid-template-columns property. The property accepts any number of values. The number of values determines the number of columns, and the value itself determines the size of that column. For example:</p>
        
        <pre><code>
  .container {
    display: grid;
    grid-template-columns: 100px 200px;
  }
  
  .item {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: x-large;
    text-align: center;
    padding: 20px;
    border: 1px solid orange;
    background-color: bisque;
  }
        </code></pre>
      `,
      views: 3254,
      likes: 287,
      comments: 56,
      relatedPosts: [5, 6]
    },
    {
      id: 5,
      title: "Introduction to GraphQL",
      excerpt: "Learn the basics of GraphQL and how it can improve your API development experience.",
      image: "/blog_graphql.jpg",
      date: "January 15, 2023",
      readTime: "9 min read",
      author: {
        name: "David Park",
        avatar: "/api/placeholder/32/32",
        role: "Backend Developer"
      },
      tags: ["GraphQL", "API", "Backend"],
      slug: "introduction-to-graphql",
      content: `
        <h2>What is GraphQL?</h2>
        <p>GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need, and nothing more.</p>
        
        <h2>Benefits Over REST</h2>
        <p>Unlike REST APIs, GraphQL APIs allow clients to request exactly the data they need, avoiding over-fetching and under-fetching problems common with REST endpoints.</p>
        
        <h2>Setting Up a Basic GraphQL Server</h2>
        <p>Setting up a GraphQL server is straightforward with libraries like Apollo Server or Express GraphQL. You define a schema that specifies the types of data available and the queries clients can make.</p>
      `,
      views: 2987,
      likes: 218,
      comments: 47,
      relatedPosts: [1, 2, 6]
    },
    {
      id: 6,
      title: "State Management with Redux Toolkit",
      excerpt: "Simplify your Redux code and improve maintainability with Redux Toolkit.",
      image: "/blog_redux.jpg",
      date: "December 5, 2022",
      readTime: "8 min read",
      author: {
        name: "James Wilson",
        avatar: "/api/placeholder/32/32",
        role: "React Developer"
      },
      tags: ["Redux", "React", "State Management"],
      slug: "redux-toolkit",
      content: `
        <h2>The Problem with Traditional Redux</h2>
        <p>Traditional Redux often involves a lot of boilerplate code, making it verbose and sometimes difficult to maintain. Redux Toolkit was created to address these issues.</p>
        
        <h2>Key Features of Redux Toolkit</h2>
        <p>Redux Toolkit includes utilities to simplify common Redux use cases. It includes functions to set up a store, create reducers and actions, and handle immutable updates.</p>
        
        <h2>Migration from Traditional Redux</h2>
        <p>Migrating from traditional Redux to Redux Toolkit can significantly reduce the amount of code in your application while maintaining the same functionality.</p>
      `,
      views: 1845,
      likes: 156,
      comments: 34,
      relatedPosts: [1, 3]
    }
  ];
  

  export const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      duration: "Jan 2022 - Present",
      location: "San Francisco, CA",
      description: [
        "Led a team of 5 developers in building a next-generation SaaS platform using React and TypeScript",
        "Implemented CI/CD pipelines that reduced deployment time by 40%",
        "Architected a component library that improved development efficiency by 30%",
        "Mentored junior developers and conducted code reviews to ensure code quality",
      ],
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions LLC",
      duration: "Mar 2019 - Dec 2021",
      location: "Austin, TX",
      description: [
        "Developed and maintained multiple client projects using React, Node.js, and MongoDB",
        "Built RESTful APIs and GraphQL endpoints for various client applications",
        "Optimized database queries resulting in a 50% reduction in response time",
        "Collaborated with UX designers to implement responsive, accessible interfaces",
      ],
    },
    {
      id: 3,
      role: "Frontend Developer",
      company: "WebCraft Studios",
      duration: "Jun 2017 - Feb 2019",
      location: "Seattle, WA",
      description: [
        "Created interactive web applications using JavaScript, HTML, and CSS",
        "Implemented responsive designs that worked across all device sizes",
        "Integrated third-party APIs and services into client websites",
        "Participated in agile development processes with bi-weekly sprints",
      ],
    },
  ]
  

  export const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/johndoe/ecommerce",
      demo: "https://ecommerce-demo.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A Kanban-style task management application with drag-and-drop functionality and team collaboration features.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/johndoe/taskmanager",
      demo: "https://taskmanager-demo.com",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "A real-time messaging platform with private chats, group conversations, and media sharing capabilities.",
      image: "/placeholder.svg?height=600&width=1200",
      tags: ["React", "Socket.io", "Express", "MongoDB"],
      github: "https://github.com/johndoe/chatapp",
      demo: "https://chatapp-demo.com",
    },
  ]


  export const projectDetails = {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription: `
      This project is a comprehensive e-commerce solution built with modern web technologies. 
      It features a robust product management system, secure payment processing, and an intuitive user interface.
      
      Key features include:
      - Real-time inventory management
      - Secure payment processing with Stripe
      - User authentication and authorization
      - Shopping cart functionality
      - Order tracking and management
      - Admin dashboard for store management
    `,
    image: "/placeholder.svg?height=600&width=1200",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Full Stack",
    github: "https://github.com/johndoe/ecommerce",
    demo: "https://ecommerce-demo.com",
    date: "January 2023",
    technologies: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
      "Redux",
      "Tailwind CSS",
      "JWT Authentication"
    ],
    challenges: [
      "Implementing real-time inventory updates across multiple users",
      "Optimizing database queries for better performance",
      "Ensuring secure payment processing",
      "Building a scalable architecture"
    ],
    solutions: [
      "Used WebSocket for real-time updates",
      "Implemented database indexing and caching",
      "Integrated Stripe's secure payment system",
      "Adopted microservices architecture"
    ]
  }
  
  export const testimonials = [
    {
      id: 1,
      name: "Paul M",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      text: "John is an exceptional developer who consistently delivers high-quality work. He took our vague requirements and turned them into a polished, user-friendly application that exceeded our expectations.",
    },
    {
      id: 2,
      name: "George C",
      role: "CTO",
      company: "StartupX",
      image: "/placeholder.svg?height=100&width=100",
      text: "Working with John was a game-changer for our startup. His technical expertise and ability to communicate complex concepts clearly made the development process smooth and efficient.",
    },
    {
      id: 3,
      name: "Chris John",
      role: "Design Director",
      company: "CreativeStudio",
      image: "/placeholder.svg?height=100&width=100",
      text: "John has a rare combination of technical skill and design sensibility. He translated our designs perfectly into functioning code and even suggested improvements that enhanced the user experience.",
    },
    {
      id: 4,
      name: "David Kim",
      role: "Founder",
      company: "InnovateLabs",
      image: "/placeholder.svg?height=100&width=100",
      text: "I've worked with many developers over the years, and John stands out for his reliability and commitment to quality. He's not just a coder; he's a thoughtful engineer who considers the business impact of technical decisions.",
    },
  ];