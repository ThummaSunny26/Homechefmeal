# RAIQA - Home Chef Meal Selection App 🍽️

RAIQA is a modern, intuitive meal selection platform where users can browse handcrafted meals prepared by local home chefs. The application allows users to filter by availability, sort by price, and build a personalized selection with real-time cost calculation.

## ✨ Features

- **Dynamic Meal Discovery**: Browse a variety of local flavors from community chefs.
- **Smart Filtering**: Toggle between showing all meals or only those currently available.
- **Price Sorting**: Easily sort meals from low-to-high or high-to-low prices.
- **Visual Highlights**: 
  - 🏆 **Premium Choice**: Automatically highlights the most expensive available meal.
  - 💎 **Best Value**: Automatically highlights the least expensive available meal.
- **Persistent Selection**: Your selected meals are saved locally, so they won't vanish if you refresh the page.
- **Responsive Design**: Fully functional on mobile, tablet, and desktop.

## 🚀 Tech Stack

- **React 18**: Frontend library for building the user interface.
- **Vite**: Ultra-fast build tool and development server.
- **Custom Hooks**: Modular logic for cart management, meal processing, and local storage.
- **Modern CSS**: Clean, responsive layout with utility-first principles.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ThummaSunny26/Homechefmeal.git
   cd raiqa_assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

- `src/components/`: Reusable UI components (Header, MealCard, SelectedMeals, etc.).
- `src/hooks/`: Custom React hooks for business logic (`useCart`, `useMeals`, `useLocalStorage`).
- `src/data/`: Static data for meals and initial state.
- `src/App.jsx`: Main orchestration component.
- `src/index.css`: Global styles and custom utilities.

## 👤 Author

**Sunny** - [GitHub](https://github.com/ThummaSunny26)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
