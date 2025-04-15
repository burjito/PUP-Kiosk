// Store information for each area (title as a key, description and image as values)
const areaInfo = {
    "Amphitheater": {
        image: "./images/1ampitheater.png",
        description: "A great outdoor space where events, performances, and gatherings take place. It’s a perfect spot for students to express their talents, enjoy cultural activities, or attend university events."
    },
    "Water Pump Facility": {
        image: "./images/2waterpumpfacility.jpg",
        description: "This ensures the campus always has a reliable water supply. It plays a big role in maintaining cleanliness and hygiene across the university, keeping everyone comfortable and healthy."
    },
    "Campus Development and Maintenance Building": {
        image: "./images/3campusmaintenance.png",
        description: "Manages repairs, improvements, and maintenance to ensure a safe and functional environment for students."
    },
    "Catwalk": {
        image: "./images/4pupcatwalk.png",
        description: "A raised walkway that helps students move between buildings, especially in rainy weather, offering convenience in campus life."
    },
    "Lagoon Gate": {
        image: "./images/5lagoongate.jpg",
        description: "One of the main access points to the campus, organizing and streamlining the flow of people."
    },
    "Charlie del Rosario Hall": {
        image: "./images/6charlie.png",
        description: "An academic building housing classrooms and lecture halls, essential for the university’s academic life."
    },
    "Oval Gate": {
        image: "./images/7ovalgate.png",
        description: "The entrance to the Oval, the university’s main space for sports and recreation, promoting physical activities and events."
    },
    "Flagpole": {
        image: "./images/8flagpole.jpg",
        description: "A symbol of school pride, where flag-raising ceremonies take place, offering students a sense of unity and tradition."
    },
    "Grandstand": {
        image: "./images/9grandstand.png",
        description: "A large seating area for events like sports competitions and concerts, where students can cheer and support their peers."
    },
    "Gymnasium and Sports Center": {
        image: "./images/10gymnasium.jpg",
        description: "A place for students to practice sports, work out, or attend fitness classes, supporting a healthy lifestyle."
    },
    "Interfaith Chapel": {
        image: "./images/11interfaith.jpg",
        description: "A quiet space for prayer, reflection, and spiritual activities for students of all faiths, fostering personal growth."
    },
    "Laboratory High School": {
        image: "./images/12labhigh.jpg",
        description: "A science and technology-focused high school preparing students for higher education with a taste of academic life at the university."
    },
    "Lagoon": {
        image: "./images/13lagoon.jpg",
        description: "The hotspot for affordable and delicious food in PUP. It’s where students can enjoy a variety of budget-friendly meals and snacks while taking a break from their busy schedules."
    },
    "Main Building Dome": {
        image: "./images/14maindome.jpg",
        description: "A landmark at the heart of the university, housing important offices and serving as a recognizable spot for students and visitors."
    },
    "Main Building East Wing": {
        image: "./images/15east.jpg",
        description: "Hosts classrooms and offices, an essential part of day-to-day academic life for students and faculty."
    },
    "Main Building North Wing": {
        image: "./images/16north.jpg",
        description: "Another section of the Main Building with classrooms and offices, helping to keep campus operations organized."
    },
    "Main Building South Wing": {
        image: "./images/17south.jpg",
        description: "A section of the Main Building offering additional classrooms and student services, integral to the academic experience."
    },
    "Main Building West Wing": {
        image: "./images/18west.jpg",
        description: "The west section of the Main Building, providing more classrooms and faculty offices, supporting learning and academic development."
    },
    "Main Gate": {
        image: "./images/19maingate.jpg",
        description: "The primary entrance to the university, managing access and maintaining security for students, faculty, and visitors."
    },
    "Freedom Park": {
        image: "./images/20freedompark.jpg",
        description: "A large open area where students can relax, socialize, or have casual study sessions in a peaceful environment."
    },
    "Ninoy Aquino Library and Learning Resource Center": {
        image: "./images/21ninoy.jpg",
        description: "The heart of academic resources, offering books, research materials, and study areas for academic success."
    },
    "Outdoor Basketball and Volleyball Court": {
        image: "./images/22outdoor.jpg",
        description: "Courts for playing basketball and volleyball, providing students with a space for fitness and friendly competition."
    },
    "Nutrition and Food Science Building": {
        image: "./images/23nutrition.jpg",
        description: "A facility where students learn about food science and nutrition, combining theory and practical skills in health and wellbeing."
    },
    "Oval": {
        image: "./images/24oval.jpg",
        description: "A large open space for physical activities like jogging, sports events, and group activities, also a place to relax and unwind."
    },
    "Physical Education Building": {
        image: "./images/25chk.jpg",
        description: "The hub for physical education activities, offering facilities for fitness classes, sports practice, and workouts."
    },
    "Pasig River": {
        image: "./images/26pasig.jpg",
        description: "A scenic part of the university’s surroundings, often used for fieldwork and environmental studies, allowing students to connect with nature."
    },
    "Santa Mesa Ferry Station": {
        image: "./images/27ferry.jpg",
        description: "A transport hub that makes commuting to campus easier for students from nearby areas."
    },
    "Apolinario Mabini Shrine Catwalk": {
        image: "./images/28mabini.jpg",
        description: "A catwalk leading to the Mabini Shrine, offering a reflective spot tied to the university’s commitment to national history and pride."
    },
    "Student Canteen": {
        image: "./images/29univcanteen.jpg",
        description: "A place for students to grab meals or snacks, socialize, and recharge between classes."
    },
    "Linear Park": {
        image: "./images/30linear.jpg",
        description: "A green space for walking, jogging, or relaxing, offering a break from the busyness of campus life."
    },
    "Guard House": {
        image: "./images/31guard.jpg",
        description: "The security hub of the campus, ensuring the safety of everyone by monitoring access points and managing campus security."
    },
    "Mabini Monument PUP Obelisk": {
        image: "./images/32mabiniobelisk.jpg",
        description: "A monument honoring Apolinario Mabini, a place of reflection and pride, reinforcing the university’s deep national heritage."
    },
    "Property Building": {
        image: "./images/33property.jpg",
        description: "Manages university supplies and resources, ensuring all materials and equipment are available for campus operations."
    },
    "Pylon": {
        image: "./images/34pylon.jpg",
        description: "A tall structure that helps students and visitors navigate the campus, serving as a landmark for easier navigation."
    },
    "University Canteen Sampaguita Building": {
        image: "./images/35canteen.jpg",
        description: "Another canteen offering a variety of food options for students, a popular spot to take a break and eat."
    },
    "Souvenir Shop": {
        image: "./images/36souvenir.jpg",
        description: "The go-to place for PUP merchandise. It offers a variety of items like shirts, mugs, and other souvenirs that let students and visitors take a piece of the university home."
    },
    "Swimming Pool": {
        image: "./images/37pool.jpg",
        description: "A facility for students who enjoy swimming, offering a refreshing way to stay active and take a break from academic life."
    },
    "Tennis Court": {
        image: "./images/38tennis.jpg",
        description: "A court for tennis enthusiasts, providing a space for practice, competition, and physical activity."
    },
    "RC Overhead Water Tank": {
        image: "./images/39watertank.jpg",
        description: "A crucial campus infrastructure ensuring a steady water supply across the university for various needs."
    },
    "Gymnasium Gate": {
        image: "./images/40gymgate.png",
        description: "The entrance to the gymnasium, where students access the sports facilities for fitness classes, training, and workouts."
    }
};

 // Function to scale the image map dynamically
function scaleImageMap() {
    const img = document.querySelector('img[usemap]');
    if (!img) return;

    const mapName = img.getAttribute('usemap')?.replace('#', '');
    const map = document.querySelector(`map[name="${mapName}"]`);
    if (!map) return;

    const areas = map.querySelectorAll('area');
    const rect = img.getBoundingClientRect(); // Get the image's actual position and size on screen

    const originalWidth = img.naturalWidth; // Natural width of the image
    const originalHeight = img.naturalHeight; // Natural height of the image
    const widthRatio = rect.width / originalWidth; // Scaling factor for width
    const heightRatio = rect.height / originalHeight; // Scaling factor for height

    // Loop through all areas and adjust their coordinates according to the scaling ratio
    areas.forEach(area => {
        if (!area.dataset.originalCoords) {
            area.dataset.originalCoords = area.coords; // Save original coordinates
        }

        const coords = area.dataset.originalCoords.split(',').map(Number);
        const scaledCoords = coords.map((value, index) =>
            Math.round(index % 2 === 0 ? value * widthRatio : value * heightRatio) // Scale x and y separately
        );
        area.coords = scaledCoords.join(',');
    });
}

// Function to position the hover container and prevent it from being cut off
function positionHoverContainer(event, hoverContainer) {
    const hoverWidth = hoverContainer.offsetWidth;
    const hoverHeight = hoverContainer.offsetHeight;
    const pageWidth = window.innerWidth;
    const pageHeight = window.innerHeight;

    let left = event.pageX + 10;
    let top = event.pageY + 10;

    // Adjust position if hover container exceeds page boundaries
    if (left + hoverWidth > pageWidth) {
        left = pageWidth - hoverWidth - 10;
    }
    if (top + hoverHeight > pageHeight) {
        top = pageHeight - hoverHeight - 10;
    }

    hoverContainer.style.left = `${left}px`;
    hoverContainer.style.top = `${top}px`;
}

// Initialize hover interactions
document.addEventListener("DOMContentLoaded", function () {
    scaleImageMap(); // Initial scaling
    window.addEventListener('resize', scaleImageMap); // Rescale on window resize

    const areas = document.querySelectorAll('area');
    const hoverContainer = document.getElementById('hover-container');
    const hoverImg = document.getElementById('hover-img');
    const hoverName = document.getElementById('hover-name');
    const hoverDescription = document.getElementById('hover-description');

    areas.forEach(area => {
        area.addEventListener('mouseover', function (event) {
            const areaName = event.target.alt || event.target.title;

            // Check if areaInfo contains the area data
            if (!areaInfo[areaName]) {
                console.error(`No data found for area: ${areaName}`);
                return;
            }

            const { image, description } = areaInfo[areaName];

            hoverImg.src = image;
            hoverName.textContent = areaName;
            hoverDescription.textContent = description;

            hoverContainer.style.display = 'block';
            positionHoverContainer(event, hoverContainer);
        });

        area.addEventListener('mousemove', function (event) {
            positionHoverContainer(event, hoverContainer);
        });

        area.addEventListener('mouseout', function () {
            hoverContainer.style.display = 'none';
        });
    });
});