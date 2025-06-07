import path from "path";



const navbarNavigations = [
    {
        title: "Home",
        dropdown: false,
        path: "/" ,
        child: [
            
            { title: "Our Clients", icons: "3", path: "/",},
            // { title: "Trust", icons: "1", path: "/" },
            // { title: "Teams", icons: "2", path: "/" },
          
            // { title: "Connect With Us", icons: "4", path: "/contact" },
         
        ],
    },
    { title:" About", icons: "5", path: "/about", },
    {
        title: "Products",
        dropdown: true,
        path: "products" ,
        child: [
            {
                title: "Pressure Measurement",path:"/pressureMeasurement",
                icons: "6",
                smChild: [
                    // { title: "-- Digital Transformation", path: "/" },
                    // { title: "-- Research & Development", path: "/" },
                    // { title: "-- Product Strategy", path: "/" },
                    // { title: "-- Legacy App Modernization", path: "/" },
                ],
            },
            {
                title: "Temperature Measurement",path:'/temperatureMeasurement',
                icons: "7",
                smChild: [
                    // { title: "-- UI Design", path: "/" },
                    // { title: "-- UX Design", path: "/" },
                    // { title: "-- UX Audits", path: "/" },
                    // { title: "-- Product Workshop", path: "/" },
                ],
            },
            {
                title: "Level Measurement",path:'/levelMeasurement',
                icons: "8",
                smChild: [
                    // { title: "-- Web App Development", path: "/" },
                    // { title: "-- Mobile App Development", path: "/" },
                    // { title: "-- Website Development", path: "/" },
                    // { title: "-- SaaS Development", path: "/" },
                    // { title: "-- Product Development", path: "/" },
                    // { title: "-- DevOps", path: "/" },
                    // { title: "-- MVP Development", path: "/" },
                ],
            },
            { title: "Pressure Accessories", icons: "9", path: "/pressureAccessories" },
            {
                title: "Temperature Accessories ", path:'/temperatureAccessories',
                icons: "10",
            },
            {
                title: "Automation", path:'/automation',
                icons: "11",
            },
            {
                title: "Measuring Instruments ", path:'/measuringInstruments',
                icons: "12",
            },
            {
                title: "Air Velocity Measurement ", path:'/airVelocityMeasurement',
                icons: "13",
            },
            
        ],
    },
    // {
    //     title: "Technologies",
    //     dropdown: true,
    //     path: "#" ,
    //     child: [
    //         {
    //             title: "Mobile",
    //             icons: "11",
    //             smChild: [
    //                 { title: "-- React Native", path: "/" },
    //                 { title: "-- Flutter", path: "/" },
    //                 { title: "-- IONIC", path: "/" },
    //             ],
    //         },
    //         {
    //             title: "Front End",
    //             icons: "12",
    //             smChild: [
    //                 { title: "-- React Js", path: "/" },
    //                 { title: "-- Next Js", path: "/" },
    //                 { title: "-- Angular", path: "/" },
    //                 { title: "-- VUE Js", path: "/" },
    //             ],
    //         },
    //         {
    //             title: "Back End",
    //             icons: "13",
    //             smChild: [
    //                 { title: "-- Node Js", path: "/" },
    //                 { title: "-- .NET", path: "/" },
    //                 { title: "-- C#", path: "/" },
    //                 { title: "-- Laravel", path: "/" },
    //                 { title: "-- PHP", path: "/" },
    //             ],
    //         },
    //         {
    //             title: "Content Management",
    //             icons: "14",
    //             smChild: [{ title: "-- WordPress", path: "/" }],
    //         },
    //     ],
    // },
    {
        title: "Contact",
        dropdown: false,
        path: "/contact" ,
        child: [
            {
                title: "Education",
                icons: "15",
                smChild: [
                    { title: "-- Overseas Education CRM", path: "/" },
                    { title: "-- School Management", path: "/" },
                    { title: "-- Tuition Centre Management", path: "/" },
                ],
            },
            {
                title: "Finance",
                icons: "16",
                smChild: [
                    { title: "-- Share Trading", path: "/" },
                    { title: "-- Loan Management", path: "/" },
                ],
            },
            {
                title: "Healthcare",
                icons: "17",
                smChild: [
                    { title: "-- Doctor Patient Solution", path: "/" },
                    { title: "-- Diagnostic Management", path: "/" },
                ],
            },
            {
                title: "Startup",
                icons: "18",
                smChild: [
                    { title: "-- Laundry Management", path: "/" },
                    { title: "-- Scrap Management", path: "/" },
                    { title: "-- Healing & Wallet Management", path: "/" },
                ],
            },
            {
                title: "Retail",
                icons: "19",
                smChild: [
                    { title: "-- Book Manufacturing", path: "/" },
                    { title: "-- School Dress Manufacturing", path: "/" },
                ],
            },
            {
                title: "Ecommerce",
                icons: "20",
                smChild: [
                    { title: "-- Interior Decoration", path: "/" },
                    { title: "-- Ladies Garment", path: "/" },
                    { title: "-- Kids Garment", path: "/" },
                ],
            },
            {
                title: "Others",
                icons: "21",
                smChild: [
                    { title: "-- Cab Booking", path: "/" },
                    { title: "-- Fleet Auction & Tracking", path: "/" },
                    { title: "-- Solar Project Auction Management", path: "/" },
                ],
            },
        ],
    },
    { title: "OurClients", dropdown: false, path: "/ourclients" },
    { title: "Gallery", dropdown: false, path: "/gallery" },
    // { title: "Consulting", dropdown: false, path: "/consulting" },
];



const navbarNavigationsFooter = [
    {title: "telegram",},
    {title: "whatsapp",},
    {title: "instagram",},
    {title: "linkdin",},
]
const navbarNavigationsFooter2 = [
    {title: "behance"},
    {title: "dribbble"},
]

export {navbarNavigations, navbarNavigationsFooter, navbarNavigationsFooter2};