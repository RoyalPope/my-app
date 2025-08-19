# BNS&P - Barista Training Event Planner

A comprehensive web application for managing barista training events, user registrations, and event planning services.

## 🚀 Features

- **User Management**: Registration, login, and role-based access control
- **Event Planning**: Create and manage barista training events
- **Contact System**: Handle customer inquiries and messages
- **Gallery Management**: Organize and display training images
- **Responsive Design**: Modern UI that works on all devices
- **Continuous Scrolling**: Single-page application with smooth navigation

## 🗄️ Database Setup

### Prerequisites
- MySQL Server (version 8.0 or higher)
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd bnsp-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Create the BNS&P database
   mysql -u root -p < database.sql
   ```

4. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database Configuration
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password_here
   DB_NAME=BNS&P
   DB_PORT=3306
   
   # Application Configuration
   NODE_ENV=development
   PORT=3000
   JWT_SECRET=your_jwt_secret_key_here
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

## 🗃️ Database Schema

### Core Tables

- **users**: User accounts and authentication
- **events**: Event information and details
- **event_registrations**: User event registrations
- **contact_messages**: Customer contact form submissions
- **gallery_images**: Image gallery management
- **training_sessions**: Barista training session details
- **training_enrollments**: Training session enrollments

### Key Features

- **Foreign Key Relationships**: Proper data integrity
- **Indexes**: Optimized query performance
- **Views**: Pre-defined queries for common operations
- **Sample Data**: Initial data for testing

## 🛠️ Technology Stack

- **Frontend**: React.js with Vite
- **Backend**: Node.js with Express (ready for integration)
- **Database**: MySQL with mysql2 driver
- **Styling**: CSS3 with modern animations
- **Authentication**: JWT-based (ready for implementation)

## 📱 Application Structure

```
src/
├── components/          # React components
│   ├── Home.jsx        # Main page with all sections
│   ├── Navigation.jsx  # Navigation bar
│   └── ...
├── config/             # Configuration files
│   └── database.js     # Database connection
├── assets/             # Images and static files
│   └── images/         # Gallery images
└── index.css           # Global styles
```

## 🎨 Design Features

- **Black Theme**: Modern, professional appearance
- **Gradient Text**: Eye-catching logo and headings
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Mobile-first design approach
- **Professional Typography**: Clean, readable fonts

## 🚀 Getting Started

1. **Database Setup**: Run the SQL script to create the database
2. **Install Dependencies**: Run `npm install`
3. **Configure Environment**: Set up your `.env` file
4. **Start Development**: Run `npm run dev`
5. **Open Browser**: Navigate to `http://localhost:5173`

## 📊 Database Commands

### Useful MySQL Commands

```sql
-- Connect to the database
mysql -u root -p BNS&P

-- View all tables
SHOW TABLES;

-- View table structure
DESCRIBE users;
DESCRIBE events;

-- View sample data
SELECT * FROM users;
SELECT * FROM events;

-- Check database status
STATUS;
```

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run db:setup` - Set up database (requires MySQL)
- `npm run db:start` - Test database connection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions, please contact the development team or create an issue in the repository.

---

**BNS&P** - Creating unforgettable moments through exceptional barista training and event planning services.
