# Interactive World Map

An interactive, web-based world map application that allows users to explore countries with a rich, visual experience. This project features hover effects, click interactions, zoom controls, and a detailed side panel for displaying country information.

## 📋 Project Overview

This is a fully interactive world map built using HTML, CSS, and JavaScript. The application provides an engaging way to explore geographical data by allowing users to interact with an SVG-based world map. Users can hover over countries to see their names in a tooltip, click on countries to view detailed information in a side panel, and use zoom controls to navigate the map at different scales.

## 🎯 Problem Statement

Geographic data is often presented in static formats or complex tables, making it difficult for users to engage with and understand spatial relationships. This project solves the need for an intuitive, interactive way to visualize and explore country-level data without the bloat of heavy frameworks. The application addresses the challenge of making geographical information accessible and engaging through a lightweight, responsive interface that works seamlessly across different devices and browsers.

## ✨ Features

### Core Functionality
- **Interactive SVG Map**: High-quality, vector-based world map that scales without loss of quality
- **Hover Effects**: Real-time tooltip display showing country names when hovering over regions
- **Click Interaction**: Click any country to view detailed information in a dedicated side panel
- **Zoom Controls**: Three zoom control buttons for enhanced navigation:
  - **Zoom In**: Magnify the map for closer inspection
  - **Zoom Out**: View more of the world at once
  - **Reset Zoom**: Return to the default view instantly

### User Interface
- **Responsive Design**: Adapts to different screen sizes and devices
- **Side Panel**: Slide-out panel displaying comprehensive country details
- **Close Button**: Easy-to-use close functionality for the information panel
- **Clean Layout**: Modern, minimalist design with intuitive controls
- **Visual Feedback**: Smooth transitions and hover states for better user experience

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Styling, animations, and responsive design
- **JavaScript (Vanilla)**: Interactive functionality and DOM manipulation
- **SVG**: Scalable Vector Graphics for the map visualization

## 📁 Project Structure

```
Map/
│
├── index.html          # Main HTML file with structure and layout
├── styles.css          # CSS styling for the map, controls, and panels
├── script.js           # JavaScript for interactivity and functionality
└── README.md           # Project documentation (this file)
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required for basic functionality

### Installation & Usage

1. **Clone or Download** the project files to your local machine

2. **Open the Application**:
   - Simply double-click `index.html` to open it in your default browser
   - Or right-click and choose "Open with" your preferred browser

3. **Interact with the Map**:
   - Hover over countries to see their names
   - Click on a country to view detailed information
   - Use zoom controls to navigate:
     - **+** button to zoom in
     - **-** button to zoom out
     - **↻** button to reset the view

## 💡 How It Works

### HTML Structure
The `index.html` file provides the foundation with:
- A container for the overall layout
- Header section with title and instructions
- Map wrapper for the SVG map
- Tooltip element for hover information
- Zoom control buttons with SVG icons
- Side panel for displaying country details

### CSS Styling
The `styles.css` file handles:
- Visual design and color schemes
- Layout positioning and flexbox/grid systems
- Hover effects and transitions
- Responsive breakpoints for different screen sizes
- Button styles and panel animations

### JavaScript Functionality
The `script.js` file manages:
- Loading and rendering the SVG map
- Event listeners for hover, click, and zoom actions
- Tooltip positioning and content updates
- Side panel open/close animations
- Zoom level calculations and transformations
- Country data fetching and display

## 🎯 Use Cases

- **Educational Tool**: Learn geography and explore different countries
- **Data Visualization**: Foundation for displaying geographical statistics
- **Travel Planning**: Explore potential travel destinations
- **Portfolio Project**: Demonstrate front-end development skills
- **Dashboard Component**: Integrate into larger data visualization systems

## 🔧 Customization Options

The project can be easily customized:
- **Map Style**: Modify colors, borders, and hover effects in CSS
- **Country Data**: Add more detailed information (population, capital, etc.)
- **Zoom Levels**: Adjust min/max zoom values in JavaScript
- **Theme**: Change color scheme and design aesthetics
- **Additional Features**: Add search, filtering, or statistical overlays

## 📱 Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Microsoft Edge
- Opera

## 🎓 Learning Outcomes

This project demonstrates proficiency in:
- DOM manipulation and event handling
- SVG graphics integration
- Responsive web design principles
- User interface/experience design
- Clean, maintainable code structure
- Interactive data visualization

## 🧩 DOM Concepts Used

This project demonstrates advanced DOM manipulation through the following technical concepts:

- **`document.querySelector()`**: Used to select and access specific DOM elements such as the map container, tooltip, side panel, and control buttons
- **`addEventListener()`**: Attached to country elements, zoom controls, and close buttons to handle user interactions (click, mouseover, mouseout events)
- **`element.style.transform`**: Dynamically applied to implement zoom functionality, scaling and positioning the map based on user input
- **`classList.toggle()`**: Used to show/hide the side panel with smooth transitions by toggling CSS classes
- **Dynamic `innerHTML` updates**: Populates the tooltip and side panel with country-specific information in real-time
- **`element.style` manipulation**: Updates tooltip positioning and visibility dynamically based on cursor location
- **Event delegation**: Efficiently manages events on multiple country elements through their parent container
- **SVG DOM manipulation**: Handles interaction with SVG path elements representing countries

## 🔜 Future Enhancements

Potential improvements and additions:
- Search functionality to find countries by name
- Statistical data overlays (population, GDP, etc.)
- Color-coded regions based on data
- Multiple language support
- Export/save functionality
- Integration with external APIs for real-time data
- Mobile touch gesture support
- Keyboard navigation accessibility

## ⚠️ Known Limitations

- **Touch Interactions**: Currently only supports mouse interactions; touch-screen pinch-to-zoom and multi-touch gestures are under development
- **Keyboard Navigation**: Full keyboard accessibility for navigating between countries is not yet implemented
- **Screen Reader Support**: ARIA labels and screen reader optimization need enhancement for better accessibility
- **Small Island Nations**: Some smaller countries may be difficult to select on lower zoom levels due to their size
- **Country Data**: Information displayed is currently limited; integration with external APIs for comprehensive data is planned

## 📄 License

This project is open for educational and personal use.

## 👤 Author

Created as part of TERM 2 coursework.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Note**: This project requires the corresponding `styles.css` and `script.js` files to function properly. Ensure all three files (HTML, CSS, JS) are in the same directory.

