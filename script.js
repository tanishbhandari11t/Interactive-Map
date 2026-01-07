// Country name mapping for ISO codes
const countryNames = {
    'AF': 'Afghanistan', 'AL': 'Albania', 'DZ': 'Algeria', 'AO': 'Angola', 
    'AR': 'Argentina', 'AM': 'Armenia', 'AU': 'Australia', 'AT': 'Austria',
    'AZ': 'Azerbaijan', 'BS': 'Bahamas', 'BD': 'Bangladesh', 'BY': 'Belarus',
    'BE': 'Belgium', 'BZ': 'Belize', 'BJ': 'Benin', 'BT': 'Bhutan',
    'BO': 'Bolivia', 'BA': 'Bosnia and Herzegovina', 'BW': 'Botswana', 'BR': 'Brazil',
    'BN': 'Brunei', 'BG': 'Bulgaria', 'BF': 'Burkina Faso', 'BI': 'Burundi',
    'KH': 'Cambodia', 'CM': 'Cameroon', 'CA': 'Canada', 'CF': 'Central African Republic',
    'TD': 'Chad', 'CL': 'Chile', 'CN': 'China', 'CO': 'Colombia',
    'CG': 'Congo', 'CD': 'Democratic Republic of the Congo', 'CR': 'Costa Rica', 'CI': 'Ivory Coast',
    'HR': 'Croatia', 'CU': 'Cuba', 'CY': 'Cyprus', 'CZ': 'Czech Republic',
    'DK': 'Denmark', 'DJ': 'Djibouti', 'DO': 'Dominican Republic', 'EC': 'Ecuador',
    'EG': 'Egypt', 'SV': 'El Salvador', 'GQ': 'Equatorial Guinea', 'ER': 'Eritrea',
    'EE': 'Estonia', 'ET': 'Ethiopia', 'FJ': 'Fiji', 'FI': 'Finland',
    'FR': 'France', 'GA': 'Gabon', 'GM': 'Gambia', 'GE': 'Georgia',
    'DE': 'Germany', 'GH': 'Ghana', 'GR': 'Greece', 'GL': 'Greenland',
    'GT': 'Guatemala', 'GN': 'Guinea', 'GW': 'Guinea-Bissau', 'GY': 'Guyana',
    'HT': 'Haiti', 'HN': 'Honduras', 'HU': 'Hungary', 'IS': 'Iceland',
    'IN': 'India', 'ID': 'Indonesia', 'IR': 'Iran', 'IQ': 'Iraq',
    'IE': 'Ireland', 'IL': 'Israel', 'IT': 'Italy', 'JM': 'Jamaica',
    'JP': 'Japan', 'JO': 'Jordan', 'KZ': 'Kazakhstan', 'KE': 'Kenya',
    'KP': 'North Korea', 'KR': 'South Korea', 'XK': 'Kosovo', 'KW': 'Kuwait',
    'KG': 'Kyrgyzstan', 'LA': 'Laos', 'LV': 'Latvia', 'LB': 'Lebanon',
    'LS': 'Lesotho', 'LR': 'Liberia', 'LY': 'Libya', 'LT': 'Lithuania',
    'LU': 'Luxembourg', 'MK': 'North Macedonia', 'MG': 'Madagascar', 'MW': 'Malawi',
    'MY': 'Malaysia', 'ML': 'Mali', 'MR': 'Mauritania', 'MX': 'Mexico',
    'MD': 'Moldova', 'MN': 'Mongolia', 'ME': 'Montenegro', 'MA': 'Morocco',
    'MZ': 'Mozambique', 'MM': 'Myanmar', 'NA': 'Namibia', 'NP': 'Nepal',
    'NL': 'Netherlands', 'NC': 'New Caledonia', 'NZ': 'New Zealand', 'NI': 'Nicaragua',
    'NE': 'Niger', 'NG': 'Nigeria', 'NO': 'Norway', 'OM': 'Oman',
    'PK': 'Pakistan', 'PS': 'Palestine', 'PA': 'Panama', 'PG': 'Papua New Guinea',
    'PY': 'Paraguay', 'PE': 'Peru', 'PH': 'Philippines', 'PL': 'Poland',
    'PT': 'Portugal', 'PR': 'Puerto Rico', 'QA': 'Qatar', 'RO': 'Romania',
    'RU': 'Russia', 'RW': 'Rwanda', 'SA': 'Saudi Arabia', 'SN': 'Senegal',
    'RS': 'Serbia', 'SL': 'Sierra Leone', 'SK': 'Slovakia', 'SI': 'Slovenia',
    'SB': 'Solomon Islands', 'SO': 'Somalia', 'ZA': 'South Africa', 'SS': 'South Sudan',
    'ES': 'Spain', 'LK': 'Sri Lanka', 'SD': 'Sudan', 'SR': 'Suriname',
    'SZ': 'Eswatini', 'SE': 'Sweden', 'CH': 'Switzerland', 'SY': 'Syria',
    'TW': 'Taiwan', 'TJ': 'Tajikistan', 'TZ': 'Tanzania', 'TH': 'Thailand',
    'TL': 'Timor-Leste', 'TG': 'Togo', 'TT': 'Trinidad and Tobago', 'TN': 'Tunisia',
    'TR': 'Turkey', 'TM': 'Turkmenistan', 'UG': 'Uganda', 'UA': 'Ukraine',
    'AE': 'United Arab Emirates', 'GB': 'United Kingdom', 'US': 'United States', 'UY': 'Uruguay',
    'UZ': 'Uzbekistan', 'VU': 'Vanuatu', 'VE': 'Venezuela', 'VN': 'Vietnam',
    'EH': 'Western Sahara', 'YE': 'Yemen', 'ZM': 'Zambia', 'ZW': 'Zimbabwe',
    'AQ': 'Antarctica', 'FK': 'Falkland Islands'
};

// Global variables
let allCountriesData = {};
let currentSelectedCountry = null;
let currentZoom = 1;
let currentX = 0;
let currentY = 0;
let svgElement = null;

// DOM Elements
const tooltip = document.getElementById('tooltip');
const sidePanel = document.getElementById('side-panel');
const panelContent = document.getElementById('panel-content');
const closeBtn = document.getElementById('close-panel');
const mapWrapper = document.getElementById('map-wrapper');

// Initialize the application
async function init() {
    // Load the SVG map
    await loadSVGMap();
    
    // Pre-fetch all countries data for better performance
    await preloadAllCountries();
    
    // Set up event listeners
    setupEventListeners();
    
    // Set up zoom controls
    setupZoomControls();
}

// Load SVG map from world.svg file
async function loadSVGMap() {
    try {
        const response = await fetch('world.svg');
        const svgText = await response.text();
        mapWrapper.innerHTML = svgText;
        
        // Get all country paths
        const svg = mapWrapper.querySelector('svg');
        const paths = svg.querySelectorAll('path');
        
        // Map of country class names to ISO codes
        const countryClassToCode = {
            'Canada': 'CA',
            'United States': 'US',
            'China': 'CN',
            'Australia': 'AU',
            'Argentina': 'AR',
            'Mexico': 'MX',
            'Kazakhstan': 'KZ',
            'Norway': 'NO',
            'Turkey': 'TR',
            'Angola': 'AO',
            'Russian Federation': 'RU',
            'France': 'FR',
            'United Kingdom': 'GB',
            'Chile': 'CL',
            'Philippines': 'PH',
            'Oman': 'OM',
            'Denmark': 'DK',
            'Greece': 'GR',
            'Indonesia': 'ID',
            'Italy': 'IT',
            'Japan': 'JP',
            'Malaysia': 'MY',
            'New Zealand': 'NZ',
            'Azerbaijan': 'AZ',
            'Papua New Guinea': 'PG'
        };
        
        paths.forEach(path => {
            const id = path.getAttribute('id');
            const className = path.getAttribute('class');
            let countryCode = null;
            
            // Check if path has a 2-letter ISO code as id
            if (id && id.length === 2) {
                countryCode = id;
                path.classList.add('country');
            }
            // Check if path has a country name as class
            else if (className && countryClassToCode[className]) {
                countryCode = countryClassToCode[className];
                // Set the ISO code as id
                path.setAttribute('id', countryCode);
                // Add the country class for consistent styling
                path.classList.add('country');
            }
            
            // If this is a valid country path, add event listeners
            if (countryCode) {
                // Add hover events
                path.addEventListener('mouseenter', handleCountryHover);
                path.addEventListener('mousemove', handleCountryHover);
                path.addEventListener('mouseleave', handleCountryLeave);
                
                // Add click event
                path.addEventListener('click', handleCountryClick);
            }
        });
        
        // Store SVG element reference for zooming
        svgElement = svg;
        
        console.log('Map loaded successfully with interactive countries');
    } catch (error) {
        console.error('Error loading SVG map:', error);
        mapWrapper.innerHTML = '<p style="color: red;">Error loading map. Please ensure world.svg is in the same directory.</p>';
    }
}

// Pre-load all countries data (optional but recommended)
async function preloadAllCountries() {
    try {
        console.log('Pre-loading all countries data...');
        const response = await fetch('https://restcountries.com/v3.1/all');
        
        if (!response.ok) {
            throw new Error('Failed to fetch countries data');
        }
        
        const countries = await response.json();
        
        // Store data by country code
        countries.forEach(country => {
            const code = country.cca2; // ISO 2-letter code
            allCountriesData[code] = country;
        });
        
        console.log(`Successfully loaded data for ${Object.keys(allCountriesData).length} countries`);
    } catch (error) {
        console.error('Error pre-loading countries:', error);
        // Continue anyway - we'll fetch individually on click
    }
}

// Handle country hover
function handleCountryHover(event) {
    const countryCode = event.target.getAttribute('id');
    const countryName = countryNames[countryCode] || countryCode;
    
    // Show tooltip
    tooltip.textContent = countryName;
    tooltip.classList.add('show');
    
    // Position tooltip at cursor
    tooltip.style.left = event.pageX + 'px';
    tooltip.style.top = event.pageY + 'px';
}

// Handle country leave
function handleCountryLeave() {
    tooltip.classList.remove('show');
}

// Handle country click
async function handleCountryClick(event) {
    const countryCode = event.target.getAttribute('id');
    
    // Remove previous selection
    if (currentSelectedCountry) {
        currentSelectedCountry.classList.remove('selected');
    }
    
    // Add selection to clicked country
    event.target.classList.add('selected');
    currentSelectedCountry = event.target;
    
    // Show side panel
    sidePanel.classList.add('active');
    
    // Show loading state
    panelContent.innerHTML = '<div class="spinner"></div>';
    
    // Get country data
    await getCountryData(countryCode);
}

// Fetch country data from API
async function getCountryData(countryCode) {
    try {
        let countryData;
        
        // Check if we have pre-loaded data
        if (allCountriesData[countryCode]) {
            countryData = allCountriesData[countryCode];
        } else {
            // Fetch from API
            const response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
            
            if (!response.ok) {
                throw new Error('Country not found');
            }
            
            const data = await response.json();
            countryData = data[0];
        }
        
        // Display the data
        displayCountryData(countryData);
        
    } catch (error) {
        console.error('Error fetching country data:', error);
        panelContent.innerHTML = `
            <div class="error-message">
                <h3>Error Loading Data</h3>
                <p>Unable to fetch data for this country. Please try again later.</p>
                <p><small>${error.message}</small></p>
            </div>
        `;
    }
}

// Display country data in side panel
function displayCountryData(country) {
    const name = country.name.common;
    const flag = country.flags.svg || country.flags.png;
    const population = country.population.toLocaleString();
    const capital = country.capital ? country.capital[0] : 'N/A';
    const region = country.region;
    const subregion = country.subregion || 'N/A';
    const currencies = country.currencies ? Object.values(country.currencies).map(c => c.name).join(', ') : 'N/A';
    const languages = country.languages ? Object.values(country.languages).join(', ') : 'N/A';
    const area = country.area ? country.area.toLocaleString() + ' km²' : 'N/A';
    
    panelContent.innerHTML = `
        <div class="country-info">
            <img src="${flag}" alt="${name} flag" class="country-flag">
            <h2 class="country-name">${name}</h2>
            
            <div class="info-item">
                <div class="info-label">Capital</div>
                <div class="info-value">${capital}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Population</div>
                <div class="info-value">${population}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Region</div>
                <div class="info-value">${region}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Subregion</div>
                <div class="info-value">${subregion}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Area</div>
                <div class="info-value">${area}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Currency</div>
                <div class="info-value">${currencies}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">Languages</div>
                <div class="info-value">${languages}</div>
            </div>
        </div>
    `;
}

// Set up event listeners
function setupEventListeners() {
    // Close panel button
    closeBtn.addEventListener('click', () => {
        sidePanel.classList.remove('active');
        if (currentSelectedCountry) {
            currentSelectedCountry.classList.remove('selected');
            currentSelectedCountry = null;
        }
    });
    
    // Close panel when clicking outside
    document.addEventListener('click', (event) => {
        if (!sidePanel.contains(event.target) && 
            !event.target.classList.contains('country') &&
            sidePanel.classList.contains('active')) {
            sidePanel.classList.remove('active');
            if (currentSelectedCountry) {
                currentSelectedCountry.classList.remove('selected');
                currentSelectedCountry = null;
            }
        }
    });
    
    // Close panel with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && sidePanel.classList.contains('active')) {
            sidePanel.classList.remove('active');
            if (currentSelectedCountry) {
                currentSelectedCountry.classList.remove('selected');
                currentSelectedCountry = null;
            }
        }
    });
}

// Zoom functionality
function setupZoomControls() {
    const zoomInBtn = document.getElementById('zoom-in');
    const zoomOutBtn = document.getElementById('zoom-out');
    const zoomResetBtn = document.getElementById('zoom-reset');
    
    zoomInBtn.addEventListener('click', () => {
        zoomMap(0.2);
    });
    
    zoomOutBtn.addEventListener('click', () => {
        zoomMap(-0.2);
    });
    
    zoomResetBtn.addEventListener('click', () => {
        resetZoom();
    });
    
    // Mouse wheel zoom
    mapWrapper.addEventListener('wheel', (event) => {
        event.preventDefault();
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        zoomMap(delta);
    });
}

function zoomMap(delta) {
    if (!svgElement) return;
    
    // Update zoom level
    currentZoom += delta;
    
    // Limit zoom range
    currentZoom = Math.max(0.5, Math.min(currentZoom, 5));
    
    // Apply transform
    applyZoom();
}

function resetZoom() {
    if (!svgElement) return;
    
    currentZoom = 1;
    currentX = 0;
    currentY = 0;
    
    applyZoom();
}

function applyZoom() {
    if (!svgElement) return;
    
    svgElement.style.transform = `translate(${currentX}px, ${currentY}px) scale(${currentZoom})`;
    svgElement.style.transformOrigin = 'center center';
    svgElement.style.transition = 'transform 0.3s ease';
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
