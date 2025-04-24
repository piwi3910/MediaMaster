# MediaMaster

MediaMaster is a comprehensive social media marketing management platform that allows both internal teams and clients to manage marketing campaigns across traditional channels (email, SMS) and social media platforms.

## Features

- **Authentication & User Management**: Role-based access for Admin, Agency Staff, and Clients
- **Dashboard**: Analytics overview with key metrics and customizable widgets
- **Campaign Management**: Create, manage, and track campaigns across multiple platforms
- **Content Creation & Management**: Content calendar with scheduling and approval workflows
- **AI Content Generation**: AI-assisted copywriting, image generation, and content optimization
- **Social Media Integration**: Mock connections to major platforms with cross-platform posting
- **Traditional Marketing Channels**: Email and SMS campaign management
- **Stock Media Integration**: Mock API connections to stock photo services
- **Reporting & Analytics**: Customizable report builder with visualization tools
- **Collaboration Tools**: Team messaging, approval workflows, and task assignment

## Tech Stack

- **Frontend**: React, TypeScript, Vite
- **UI Library**: Mantine UI
- **Icons**: Tabler Icons
- **Charts**: Recharts
- **Routing**: React Router
- **Forms**: Mantine Form

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/mediamaster.git
   cd mediamaster
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```
npm run build
```

## Project Structure

```
mediamaster/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/        # React context providers
│   ├── layouts/        # Page layout components
│   ├── pages/          # Application pages
│   ├── services/       # API and mock data services
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── theme.ts        # Mantine theme configuration
├── index.html          # HTML template
├── package.json        # Project dependencies
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Mock Data

This project uses mock data and services to simulate backend functionality. In a production environment, these would be replaced with actual API calls to a backend server.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
