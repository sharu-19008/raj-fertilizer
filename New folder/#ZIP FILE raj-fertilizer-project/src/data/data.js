const images = import.meta.glob('../assets/images/*/*.{png,jpg,webp}',{eager:true});



const products =  [
    {
        id: 1,
        name: "Urea",
        type: "Fertilizers",
        price:280.00,
        availability: "Only Offline",
        img: "",
        desc:{
            brief:"Urea is a fast-releasing nitrogen fertilizer promoting lush green growth. It supports leaf development and enhances plant vigor. The nitrogen helps crops grow faster and more uniformly. It is one of the most commonly used fertilizers for strong growth.",
            how_to_use:[
                "Apply to the soil and irrigate immediately to prevent root burn and ensure proper nutrient absorption.",
                "Use as a top dressing during active crop growth stages."
            ],
        },
    },
    {
        id: 2,
        name: "Muriate of Potash - M.O.P",
        type: "Fertilizers",
        price: 900.00,
        availability: "Only Offline",
        img: "",
        desc:{
            brief:"MOP supplies potassium that strengthens plant cells and improves resistance. It helps crops tolerate drought, stress, and diseases better. Potassium also improves fruit size, color, and taste. It is widely used for high-yield, high-quality production.",
            how_to_use:[
                "Apply MOP directly to the soil before planting or as a top dressing during the growing season.",
                "Broadcast evenly and incorporate into the soil for better nutrient uptake."
            ],
        },
    },
    {
        id: 3,
        name: "N P K (14:28:0)",
        type: "Fertilizers",
        price: 1650.00,
        availability: "Only Offline",
        img: "",
        desc:{
            brief:"NPK (14:28:0) is a high-phosphorus fertilizer that supports strong root development and healthy early crop growth. It is especially beneficial during sowing and transplanting stages to improve crop establishment",
            how_to_use:[
                "Apply as a basal dose at the time of sowing or transplanting, placing it near the root zone.",
                "Mix the fertilizer well into the soil and irrigate after application to ensure proper nutrient availability and absorption"
            ],
        },
    },
    {
        id: 4,
        name: "Gromor",
        type: "Fertilizers",
        price: 1750.00,
        availability: "Only Offline",
        img: "",
        desc:{
            brief:"Gromor NPK (10:26:26) is a balanced fertilizer specially formulated to promote strong root development and vigorous early crop growth. IIts high phosphorus content promotes strong root development and improved flowering. The optimal NPK ratio helps enhance nutrient uptake and boost overall crop yield and quality",
            how_to_use:[
                "Apply Gromor NPK (10:26:26) as a basal dose or at early crop stages by broadcasting or placing it near the root zone.",
                "Mix it well with soil and irrigate immediately after application for effective nutrient uptake"
            ],
        },
    },
    {
        id: 5,
        name: "D A P",
        type: "Fertilizers",
        price: 1350.00,
        availability: "Only Offline",
        img: "",
        desc:{
            brief:"DAP is a high-phosphorus fertilizer that promotes strong root development. It boosts early plant growth and helps crops establish quickly. Its nitrogen content supports greener leaves and healthier stems. Overall, it enhances yield quality and plant strength.",
            how_to_use:[
                "Mix DAP into the soil before sowing or transplanting by mixing it into the soil near the seed or root zone.",
                "Can be applied as a side dressing during early vegetative growth to supplement nutrients.",
                "Irrigate after application to ensure proper nutrient availability and avoid seed/root burn."
            ],
        },
    },
    {
        id: 6,
        name: "Actara",
        type: "Pesticides",
        price: 585.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Actara is a systemic insecticide targeting pests like aphids and thrips. It provides long-lasting protection after being absorbed by the plant. The action is fast, ensuring quick pest control. Widely used for vegetables, cotton, and horticulture crops.",
            how_to_use:[
                "Mix Actara with water according to the package instructions and apply as a soil drench or foliar spray.",
                "Apply during the early morning or late afternoon to avoid direct sunlight, and follow the application schedule."
            ],
        },
    },
    {
        id: 7,
        name: "Admire",
        type: "Pesticides",
        price: 389.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Admire is a systemic insecticide effective against sucking pests. It moves within the plant to provide long-lasting protection. The action starts quickly after application. Great for safeguarding crops like cotton, vegetables, and fruits.",
            how_to_use:[
                "Mix the recommended amount of Admire with water and apply as a foliar spray.",
                "Reapply as necessary, following the manufacturer's recommended intervals to ensure long-lasting protection."
            ],
        },
    },
    {
        id: 8,
        name: "Aureofungin",
        type: "Pesticides",
        price: 841.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Aureofungin is a broad-spectrum fungicide used to control major fungal diseases. It is especially effective for fruit rot and leaf spot. The product works well when applied early. A useful choice for both vegetables and orchards.",
            how_to_use:[
                "Dilute Aureofungin as per the recommended dosage and spray on infected areas of the plants.",
                "Apply early in the morning or late in the afternoon to avoid direct sunlight and ensure better absorption."
            ],
        },
    },
    {
        id: 9,
        name: "Blitox",
        type: "Pesticides",
        price: 842.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Blitox is a copper-based fungicide that controls fungal and bacterial infections. It is widely used for blight management. The protective layer it forms prevents further spread. Suitable for vegetables, fruits, and field crops.",
            how_to_use:[
                "Mix Blitox with water and spray directly on the affected plant parts, focusing on stems and leaves.",
                "Apply every 7-10 days or as needed based on disease severity, following label instructions for exact dilution rates."
            ],
        },
    },
    {
        id: 10,
        name: "Bavistin",
        type: "Pesticides",
        price: 625.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Bavistin is a reliable fungicide effective against seed- and soil-borne diseases. It helps improve seed germination and seedling health. The systemic action ensures deeper protection. Commonly used in vegetables, fruits, and ornamentals.",
            how_to_use:[
                "Prepare Bavistin by mixing it with water as directed and apply it to plants with fungal infection.",
                "Apply thoroughly to the plant's leaves and stems to ensure full coverage and prevent further disease spread."
            ],
        },
    },
    {
        id: 11,
        name: "Curacron",
        type: "Pesticides",
        price: 599.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Curacron is a contact insecticide effective against caterpillars and borers. It works quickly to stop feeding damage. The formulation ensures strong coverage on plants. Useful for cotton, vegetables, and fruit crops.",
            how_to_use:[
                "Curacron should be sprayed directly onto plant surfaces where pests are visible.",
                "Apply in intervals of 7-10 days, following the dilution rates provided by the manufacturer."
            ],
        },
    },
    {
        id: 12,
        name: "Decis",
        type: "Pesticides",
        price: 499.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Decis is a potent pyrethroid insecticide that works on a wide range of pests. It offers rapid knockdown with long residual activity. The product is effective even in low doses. Trusted for vegetables, cereals, and fruit crops.",
            how_to_use:[
                "Mix Decis with water according to the label and spray on plants during early morning or late evening.",
                "Repeat applications every 7-10 days for effective pest control."
            ],
        },
    },
    {
        id: 13,
        name: "Ekalux",
        type: "Pesticides",
        price: 745.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Ekalux provides strong control over chewing and sucking pests. Its formulation gives lasting protection on treated crops. The insecticide works well in various climatic conditions. Suitable for cotton, vegetables, and pulses.",
            how_to_use:[
                "Mix Ekalux with water and spray evenly over plant surfaces, especially the undersides of leaves.",
                "Reapply every 7-10 days or as needed, depending on pest pressure and crop type."
            ],
        },
    },
    {
        id: 14,
        name: "Humicil",
        type: "Pesticides",
        price: 399.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Humicil improves soil structure and boosts nutrient absorption. It enhances root development and plant vigor. Regular use improves soil fertility over time. Ideal for healthier and more productive crops.",
            how_to_use:[
                "Dilute Humicil with water and apply directly to the soil around the plant's root zone.",
                "For soil enhancement, apply 1-2 teaspoons per plant, and repeat after 3-4 weeks for maximum benefit."
            ],
        },
    },
    {
        id: 15,
        name: "Lannate",
        type: "Pesticides",
        price: 499.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Lannate is a broad-spectrum insecticide effective against mites and caterpillars. It acts through contact and stomach poisoning. Plants respond quickly with reduced pest stress. Ideal for vegetables, fruit crops, and ornamentals.",
            how_to_use:[
                "Prepare Lannate by mixing it with water according to the instructions on the label.",
                "Apply as a foliar spray, ensuring full coverage of affected areas, and repeat after 7-10 days as needed."
            ],
        },
    },
    {
        id: 16,
        name: "Magister",
        type: "Pesticides",
        price: 999.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Magister is a specialized miticide used to control harmful mites. It protects leaves from discoloration and damage. The action is strong and long-lasting. Commonly used in chilli, tea, and vegetable crops.",
            how_to_use:[
                "Dilute Magister with water according to the package instructions and apply as a foliar spray.",
                "Apply directly to plant foliage to control mite populations, following the recommended application rate."
            ],
        },
    },
    {
        id: 17,
        name: "Streptocycline",
        type: "Pesticides",
        price: 599.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Streptocycline is an antibiotic pesticide that controls bacterial diseases. It is effective against leaf spot, blight, and canker. Early use gives best protection to crops. Widely applied in orchards, vegetables, and field crops.",
            how_to_use:[
                "Mix Streptocycline with water and apply as a foliar spray to control bacterial diseases.",
                "Apply during the cooler hours of the day to minimize evaporation and increase absorption."
            ],
        },
    },
    {
        id: 18,
        name: "Tomato",
        type: "Seeds",
        price: 45.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Tomato plants produce juicy, flavorful fruits used in countless dishes. They grow well with staking and regular watering. The plants are productive across long seasons. Tomatoes are versatile and highly nutritious.",
            how_to_use:[
                "Tomatoes thrive in sunny locations with rich, well-drained soil.",
                "Sow seeds about 1 cm deep, and space plants 45-60 cm apart to allow for proper growth.",
                "Water consistently and deeply, ensuring the soil stays moist but not soggy.",
                "Harvest tomatoes when they are fully colored and firm, typically 60-90 days after planting, depending on the variety."
            ],
        },
    },
    {
        id: 19,
        name: "Red Carrot",
        type: "Seeds",
        price: 35.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Red carrot plants produce sweet, crunchy, deeply colored roots. They grow best in loose, well-aerated soil. Rich in vitamins and perfect for fresh use. A popular winter vegetable with high nutrition.",
            how_to_use:[
                "Red carrots prefer loose, sandy loam soil with full sunlight.",
                "Sow seeds 1 cm deep, spaced 2-3 cm apart.",
                "Water regularly, and harvest the red carrots when they are mature and around 15-20 cm long."
            ],
        },
    },
    {
        id: 20,
        name: "Beetroot",
        type: "Seeds",
        price: 75.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief: "Beetroot seeds grow into plants that produce sweet, nutrient-rich roots. They thrive in cool climates and loose soil. Beetroots are rich in color, flavor, and antioxidants. They are easy to grow and perfect for home gardening.",
            how_to_use: [
                "Choose a well-drained, sunny spot with rich, loamy soil.",
                "Sow seeds about 1-2 cm deep, spaced 5-10 cm apart, and water regularly for steady growth.",
                "Thin seedlings to 10-15 cm apart when they are large enough, and harvest roots once they reach a mature size (5-10 cm)."
            ],
        },
    },
    {
        id: 21,
        name: "Brinjal",
        type: "Seeds",
        price: 25.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Brinjal seeds produce glossy, flavorful eggplants of various sizes. The plants are hardy and thrive in warm conditions. They allow long harvesting cycles with proper care. Brinjals are widely used in daily cooking.",
            how_to_use:[
                "Brinjal requires a sunny location with fertile, well-drained soil.",
                "Sow seeds 1-2 cm deep in rows, keeping space 40-50 cm between plants.",
                "Water regularly and provide support for the plant as it grows.",
                "Harvest fruits when they are firm and glossy, typically 70-80 days after planting."
            ],
        },
    },
    {
        id: 22,
        name: "Capsicum",
        type: "Seeds",
        price: 35.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Capsicum plants produce bright, crisp bell peppers rich in vitamins. They grow best in mild, protected environments. The fruits are sweet, colorful, and versatile in cooking. Ideal for kitchen gardens and greenhouse setups.",
            how_to_use:[
                "Plant capsicum seeds in rich, loamy soil with full sun exposure.",
                "Sow seeds 1-2 cm deep and space plants about 30 cm apart.",
                "Water consistently and maintain a temperature of 18-25°C.",
                "Harvest peppers once they are fully colored and firm."
            ],
        },
    },
    {
        id: 23,
        name: "Bottle Gourd (Lauki)",
        type: "Seeds",
        price: 35.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Bottle gourd plants produce long, tender gourds with mild flavor. They climb vigorously and yield well with proper support. The fruits are low-calorie and highly nutritious. Ideal for warm seasons and spacious areas.",
            how_to_use:[
                "Plant bottle gourd seeds in a warm, sunny area with well-drained soil.",
                "Sow seeds about 2-3 cm deep, spacing them 30-40 cm apart.",
                "Provide a trellis for vines to climb, and water regularly.",
                "Harvest gourds when they reach maturity, usually 50-60 days after sowing."
            ],
        },
    },
    {
        id: 24,
        name: "Coriander",
        type: "Seeds",
        price: 25.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Coriander grows into fragrant leafy greens used for garnishing. It matures quickly and allows repeated harvesting. The plant does well in cool climates with light watering. Perfect for everyday cooking and salads.",
            how_to_use:[
                "Coriander thrives in well-drained soil and moderate sunlight.",
                "Sow seeds 1-2 cm deep, spaced 10 cm apart.",
                "Water regularly and harvest leaves when they are tender. You can also let the plants bolt and collect seeds for later use."
            ],
        },
    },
    {
        id: 25,
        name: "Cucumber",
        type: "Seeds",
        price: 20.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Cucumber plants produce juicy, refreshing fruits ideal for salads. They prefer warm weather and consistent moisture. The vines grow quickly and yield abundantly. A perfect choice for home and commercial gardening.",
            how_to_use:[
                "Cucumber plants grow best in warm, sunny areas with rich, well-drained soil.",
                "Sow seeds 2-3 cm deep, spacing them 30-45 cm apart.",
                "Water consistently, and use a trellis for vining varieties.",
                "Harvest cucumbers when they are firm and green, typically within 50-70 days."
            ],
        },
    },
    {
        id: 26,
        name: "Pumpkin",
        type: "Seeds",
        price: 47.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Pumpkin vines produce large, sweet, vitamin-rich fruits. They need space to spread and full sunlight. The plants are hardy and yield heavily. Excellent for both home and farm cultivation.",
            how_to_use:[
                "Pumpkins require large amounts of space, full sun, and fertile, well-drained soil.",
                "Sow seeds 2-3 cm deep, spacing them 90-100 cm apart.",
                "Water regularly, and harvest pumpkins once they are firm and fully colored, usually 80-90 days after planting."
            ],
        },
    },
    {
        id: 27,
        name: "French Beans",
        type: "Seeds",
        price: 50.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"French bean plants produce tender, fiber-rich green pods. They grow well in moderate temperatures and light soil. The plants yield steadily with regular picking. Great for nutritious home-grown vegetables.",
            how_to_use:[
                "Plant French beans in well-drained, fertile soil with full sunlight.",
                "Sow seeds about 2-3 cm deep, spaced 15-20 cm apart.",
                "Water regularly, and harvest pods when they are tender, typically 60-70 days after planting."
            ],
        },
    },
    {
        id: 28,
        name: "Bitter Gourd (Karela)",
        type: "Seeds",
        price: 55.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Karela produces dark green, ridged fruits with distinct bitterness. The climbing vines grow well with trellis support. It is known for its medicinal and nutritional value. A productive choice for warm climates.",
            how_to_use:[
                "Bitter Gourd (Karela) plants grow best in warm climates with full sun and well-drained soil.",
                "Sow seeds 2-3 cm deep, spaced 30-40 cm apart.",
                "Provide a trellis for climbing, and water regularly.",
                "Harvest when the gourd is mature and firm."
            ],
        },
    },
    {
        id: 29,
        name: "Okra (Bhindi)",
        type: "Seeds",
        price: 46.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Okra plants produce tender, nutritious pods rich in fiber. They grow vigorously in hot conditions with minimal care. The fruits are harvested continuously when young. A reliable vegetable for most home gardens.",
            how_to_use:[
                "Okra (Bhindi) grows best in full sun with well-drained, fertile soil.",
                "Sow seeds 2-3 cm deep, spaced 20-30 cm apart.",
                "Water regularly, and harvest pods when they are 5-7 cm long, typically 50-60 days after planting."
            ],
        },
    },
    {
        id: 30,
        name: "Green Chilli",
        type: "Seeds",
        price: 30.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Green chilli plants produce spicy, flavorful chilies throughout the season. They thrive in warm climates and require full sun. The fruits are used in nearly all daily dishes. Plants offer long-lasting and continuous harvests.",
            how_to_use:[
                "Green chili plants thrive in warm climates with well-drained, loamy soil.",
                "Sow seeds about 1 cm deep, spacing them 30 cm apart.",
                "Water consistently, and harvest chilies once they are firm and fully green."
            ],
        },
    },
    {
        id: 31,
        name: "Fenugreek (Methi)",
        type: "Seeds",
        price: 55.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Fenugreek grows into soft, aromatic green leaves rich in nutrients. It matures rapidly and can be harvested multiple times. The plant thrives in cool climates and loose soil. Ideal for home gardens and healthy meals.",
            how_to_use:[
                "Fenugreek prefers sunny locations with fertile, well-drained soil.",
                "Sow seeds 1 cm deep, spacing them about 10 cm apart.",
                "Water regularly, and harvest leaves when young or allow the plant to mature for seed collection."
            ],
        },
    },
    {
        id: 32,
        name: "Ridge Gourd (Dhari Torai)",
        type: "Seeds",
        price: 32.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Ridge gourd produces long, ridged, tender fruits. The climbing vines need support for best growth. It yields steadily throughout the warm season. Known for its light taste and health benefits.",
            how_to_use:[
                "Ridge gourd prefers a sunny location with well-drained, fertile soil.",
                "Sow seeds 2-3 cm deep, spacing them 30-40 cm apart.",
                "Provide a trellis for climbing vines, water regularly, and harvest when the fruits are tender."
            ],
        },
    },
    {
        id: 33,
        name: "Sweetcorn",
        type: "Seeds",
        price: 24.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Sweetcorn plants yield golden, sweet, juicy cobs. They need abundant sunlight and steady watering. The plants are tall and productive with proper spacing. Ideal for fresh eating and cooking.",
            how_to_use:[
                "Sweetcorn prefers well-drained, fertile soil with full sun exposure.",
                "Sow seeds 2-3 cm deep, spaced 20-30 cm apart, in rows 75-90 cm apart to allow proper growth.",
                "Water regularly, especially during dry periods, ensuring the soil is moist but not waterlogged.",
                "Harvest the cobs when they are plump and the kernels are milky, about 60-100 days after planting, depending on variety."
            ],
        },
    },
    {
        id: 34,
        name: "Radish (Red Long)",
        type: "Seeds",
        price: 55.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Red long radish produces bright, crisp roots with strong flavor. It matures quickly and grows well in cool climates. The roots stay tender when harvested on time. Ideal for fast, fresh vegetable production.",
            how_to_use:[
                "Red long radish thrives in loose, well-drained soil with moderate sunlight.",
                "Sow seeds about 1-2 cm deep, spacing them 5-10 cm apart.",
                "Water regularly, and harvest the red long radishes when they are 10-15 cm long, usually within 30-40 days."
            ],
        },
    },
    {
        id: 35,
        name: "Spinach (Palak)",
        type: "Seeds",
        price: 95.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Spinach grows into soft, nutrient-dense green leaves. It thrives in cool temperatures and fertile soil. The leaves can be harvested repeatedly. Great for salads, cooking, and healthy diets.",
            how_to_use:[
                "Spinach grows best in cool weather with temperatures between 10-20°C, and requires well-drained, fertile soil.",
                "Sow seeds about 1-2 cm deep, spacing them 5-10 cm apart in rows, leaving 25-30 cm between each row.",
                "Water regularly, keeping the soil consistently moist but not waterlogged.",
                "Harvest the leaves when they are young and tender, typically 30-40 days after sowing, or allow plants to mature for full leaves."
            ],
        },
    },
    {
        id: 36,
        name: "Spring Onion",
        type: "Seeds",
        price: 65.00,
        availability: "Online & Offline",
        img: "",
        desc:{
            brief:"Spring onions produce mild, tender green stalks. They grow quickly and thrive in most soils. The flavor is fresh and perfect for garnishing. A must-have in kitchen and market gardens.",
            how_to_use:[
                "Spring onions grow best in well-drained soil with plenty of sunlight.",
                "Sow seeds about 1 cm deep, spacing them 2-3 cm apart in rows 20-30 cm apart.",
                "Water regularly, keeping the soil moist, but avoid overwatering to prevent rot.",
                "Harvest the green tops once they are 15-20 cm tall, typically 30-50 days after sowing."
            ],
        },
    },
]

function normalizeName(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');     // remove parentheses
}

for(const product of products) {

    for(const path in images) {
        const filename = path.split('/').pop().split('.')[0]
        const parts = path.split('/')
        const folder = parts[parts.length -2]

        
        if(normalizeName(product.name).includes(normalizeName(filename)) && folder === product.type.toLowerCase()) {
            product.img = images[path].default
            break;
        }
    }
}

export default products;