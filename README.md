# 📝 Quora Posts

A fully responsive Quora-style posts web application built using **Node.js, Express.js, EJS, and CSS**. This application allows users to create, view, edit, and delete posts through a clean and responsive interface.

🔗 **GitHub Repository:** https://github.com/ShyamKumarChaurasiya/Quora

## ✨ Features

- 📝 Create new posts with a username and content
- 📖 View all posts on the home page
- 🔍 View individual post details
- ✏️ Edit existing post content
- 🗑️ Delete posts
- 🆔 Generate unique post IDs using UUID
- 🔄 RESTful routing with Express.js
- 📱 Fully responsive user interface
- 🎨 Clean and user-friendly design
- ⚡ Dynamic rendering using EJS templates

## 🛠️ Technologies Used

- **HTML5** – Page structure
- **CSS3** – Styling and responsive design
- **JavaScript** – Application logic
- **Node.js** – JavaScript runtime
- **Express.js** – Backend framework and routing
- **EJS** – Dynamic server-side rendering
- **UUID** – Unique post ID generation
- **Method-Override** – Support for PATCH and DELETE methods

## 🚀 Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/ShyamKumarChaurasiya/Quora.git
```

### 2. Navigate to the Project Folder

```bash
cd Quora
```

### 3. Install Dependencies

```bash
npm install
```

The project uses the following main dependencies:

```bash
npm install express ejs uuid method-override
```

### 4. Start the Server

```bash
node index.js
```

If your main server file has a different name, replace `index.js` with that filename.

### 5. Open the Application

Visit the following URL in your browser:

```text
http://localhost:8080/posts
```

## 📂 Project Structure

```text
Quora/
│
├── public/              # Static CSS and other assets
│
├── views/
│   ├── includes/        # Shared EJS components
│   ├── home.ejs         # Displays all posts
│   ├── newPost.ejs      # Create a new post
│   ├── single.ejs       # Displays an individual post
│   ├── update.ejs       # Edit an existing post
│   └── error.ejs        # Error page
│
├── index.js             # Express server and routes
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## 🔗 Application Routes

| Method | Route | Description |
|---|---|---|
| GET | `/posts` | Display all posts |
| GET | `/posts/new` | Display the create post form |
| POST | `/posts` | Create a new post |
| GET | `/posts/:id` | View an individual post |
| GET | `/posts/:id/edit` | Display the edit post form |
| PATCH | `/posts/:id` | Update an existing post |
| DELETE | `/posts/:id` | Delete a post |

## 💡 How to Use

1. Open the application in your browser.
2. Click **Create New Post** to add a post.
3. Enter a username and post content.
4. Submit the form to publish the post.
5. Use **View** to see the complete post.
6. Use **Edit** to update post content.
7. Use **Delete** to remove a post.

## 🎯 Learning Objectives

This project helped me practice:

- Building server-side applications with Express.js
- Understanding RESTful routing
- Implementing CRUD operations
- Using EJS for dynamic HTML rendering
- Handling form submissions with Express
- Using method-override for PATCH and DELETE requests
- Generating unique IDs using UUID
- Organizing routes and views
- Creating responsive web interfaces

## ⚠️ Project Note

This project currently stores posts in an in-memory JavaScript array.

- Posts are available while the server is running.
- Restarting the server resets the posts to the initial sample data.
- A database such as MongoDB can be integrated in the future for persistent storage.

## 👨‍💻 Author

**Shyam Kumar Chaurasiya**

- GitHub: https://github.com/ShyamKumarChaurasiya

---

⭐ If you like this project, feel free to star the repository!
