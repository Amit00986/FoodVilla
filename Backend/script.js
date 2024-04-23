const axios = require('axios');

// Predefined restaurant names
const restaurantNames = ["Green Leaf", "Golden Spoon", "Spice Avenue", "Tasty Bites", "Sizzling Grill"];

// Function to generate a random address
const generateRandomAddress = () => {
    const streetNames = ['Main Street', 'Park Avenue', 'Broadway', 'Oak Street', 'Elm Street'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];
    const states = ['NY', 'CA', 'IL', 'TX', 'PA'];
    const zipCodes = ['10001', '90001', '60601', '77001', '19101'];

    const randomStreet = streetNames[Math.floor(Math.random() * streetNames.length)];
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomState = states[Math.floor(Math.random() * states.length)];
    const randomZipCode = zipCodes[Math.floor(Math.random() * zipCodes.length)];

    return `${randomStreet}, ${randomCity}, ${randomState} ${randomZipCode}`;
};

const fetchRandomFoodImage = async () => {
    const width = 800;
    const height = 600;
    try {
        // Fetch the image with the specified dimensions
        const response = await axios.get(`https://source.unsplash.com/featured/?food&w=${width}&h=${height}&fit=crop`);

        // Return the URL of the fetched image
        return response.request.res.responseUrl;
    } catch (error) {
        console.error('Error fetching food image:', error.message);
        return '';
    }
};

// Function to generate random restaurant data
const generateRandomRestaurantData = async () => {
    const name = restaurantNames[Math.floor(Math.random() * restaurantNames.length)];
    const image = await fetchRandomFoodImage();
    const address = generateRandomAddress();
    const cuisine = ['Italian', 'Mexican', 'Chinese', 'Indian', 'American'].slice(0, Math.floor(Math.random() * 5) + 1);
    const rating = Math.floor(Math.random() * 5) + 1;

    return { name, cuisine, image, address, rating };
};

// Function to create a specified number of restaurant entries
const createRestaurantEntries = async (count) => {
    try {
        for (let i = 0; i < count; i++) {
            const restaurantData = await generateRandomRestaurantData();
            await axios.post('http://localhost:8000/create', restaurantData);
            console.log(`Restaurant ${restaurantData.name} created`);
        }

        console.log('All restaurant entries created successfully');
    } catch (error) {
        console.error('Error creating restaurant entries:', error.message);
    }
};

// Usage: Call createRestaurantEntries with the desired count of restaurant entries
createRestaurantEntries(20); // This will create 20 restaurant entries
