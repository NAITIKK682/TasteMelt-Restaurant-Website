# TasteMelt Restaurant Website

## Project Description
TasteMelt Restaurant Website is a modern, responsive restaurant website built using React, Vite, and Tailwind CSS. The site features multiple pages including Home, Menu, Contact, and Reserve, providing visitors with a seamless browsing experience and interactive features.

## Tech Stack
- **Frontend:** React, Vite, Tailwind CSS  
- **Backend:** Node.js, Express  
- **Database:** MongoDB

## Features
- Responsive UI designed with Tailwind CSS  
- Interactive and dynamic Menu page showcasing dishes  
- Contact form and Reservation form for direct user engagement  
- Google Maps integration displaying restaurant location in Mumbai  
- Backend integration with MongoDB to store Contact and Reservation information securely

## Folder Structure
```
TasteMelt-Restaurant-Website/
├── public/
│   ├── chefs/
│   ├── gallery/
│   ├── hero-bg.jpg
│   ├── menu/
│   ├── offer/
│   └── vite.svg
├── scripts/
│   └── addPaddingToChefImage.js
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── cart/
│   │   ├── cards/
│   │   ├── layout/
│   │   └── ui/
│   ├── context/
│   ├── data/
│   │   ├── chefs.json
│   │   ├── gallery.json
│   │   ├── menu.json
│   │   └── offers.json
│   ├── hooks/
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Admin.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── Cart.jsx
│   │   ├── Contact.jsx
│   │   ├── Contact.clean.jsx
│   │   ├── DishDetails.jsx
│   │   ├── Gallery.jsx
│   │   ├── Home.jsx
│   │   ├── Menu.jsx
│   │   ├── Offers.jsx
│   │   └── Reservations.jsx
│   ├── styles/
│   │   └── ui.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── LICENSE
├── README.md
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Installation Steps

### Prerequisites
- Node.js and npm installed
- MongoDB database setup (local or cloud)

### Frontend Installation
1. Navigate to the project root folder  
2. Install dependencies:  
```bash
npm install
```

### Backend Installation
1. Navigate to the backend folder (if separate, specify here; assume root or backend subfolder)  
2. Install backend dependencies:  
```bash
npm install
```

## Running the Project

### Running Frontend
```bash
npm run dev
```
Starts the Vite development server for the React frontend.

### Running Backend
```bash
npm start
```
Starts the Node.js/Express backend server.

## Environment Variables Example

Create a `.env` file in your backend root with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```

## API Endpoints

- `POST /contact`  
  Accepts contact form submissions and stores them in MongoDB.

- `POST /reserve`  
  Accepts reservation form data and stores the reservation details in MongoDB.

## How Google Maps is Integrated

The website uses the Google Maps JavaScript API to embed an interactive map on the Contact/Reserve page. It is configured to show the restaurant's location in Mumbai, using latitude and longitude coordinates. The API key set in environment variables enables this integration.

## Screenshots

*Add screenshots below to showcase your app*  

![Home Page](path/to/screenshot-home.png)  
![Menu Page](path/to/screenshot-menu.png)  
![Contact Page](path/to/screenshot-contact.png)  
![Reservation Page](path/to/screenshot-reserve.png)  

## Future Enhancements

- Add user authentication for admin to manage menu items and reservations  
- Implement online payment integration for reservations  
- Add multilingual support  
- Improve SEO and accessibility features  
- Include customer reviews and ratings section  

## Author
Naitik Kushwaha

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
# TasteMelt-Restaurant-Website
