# eCommerce Website

This project is an eCommerce website built with a modern frontend and a Python backend connected to a PostgreSQL database. The website includes features such as product pages, a shopping cart, and a chat interface for customer support.

## Project Structure

```
ecommerce-website
├── frontend
│   ├── index.html        # Homepage of the eCommerce website
│   ├── product.html      # Individual product details page
│   ├── cart.html         # Shopping cart page
│   ├── chat.html         # Customer support chat interface
│   ├── css
│   │   └── styles.css    # Styles for the frontend
│   └── js
│       ├── main.js       # General JavaScript functions
│       ├── product.js    # Product page functionality
│       ├── cart.js       # Cart functionality
│       └── chat.js       # Chat feature management
├── backend
│   ├── app.py            # Main entry point for the backend application
│   ├── db
│   │   └── models.py     # Database models for products, cart items, and chat messages
│   ├── routes
│   │   ├── products.py    # Routes for product management
│   │   ├── cart.py       # Routes for cart management
│   │   └── chat.py       # Routes for chat functionality
│   └── requirements.txt   # Python dependencies for the backend
└── README.md             # Project documentation
```

## Features

- **Homepage**: A welcoming page that links to product listings, the shopping cart, and the chat feature.
- **Product Pages**: Detailed views of individual products with options to add them to the cart.
- **Shopping Cart**: A page that displays selected items, allowing users to modify quantities or remove items.
- **Chat Feature**: A real-time chat interface for customer support.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd ecommerce-website
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install the required Python packages:
     ```
     pip install -r requirements.txt
     ```
   - Configure the database connection in `app.py`.

3. Set up the frontend:
   - Open the `frontend` directory in a web server or use a live server extension in your code editor.

4. Run the backend server:
   ```
   python app.py
   ```

5. Access the website in your browser at `http://localhost:5000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.