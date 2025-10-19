
export const categories = [
    {
        id: 1,
        title: "Dessert",
        description: "",
        subcategories: []
    },

    {
        id: 2,
        title: "Dinner",
        description: "You know, things that are not bread",
        subcategories: [
            {
                id: 1,
                title: "Pasta",
                description: "My favorite food",
            },
            {
                id: 2,
                title: "Potatoes",
            },
            {
                id: 3,
                title: "Bread",
            },
            {
                id: 4,
                title: "Rice",
            }
        ]
    },
    {
        id: 3,
        title: "Lunch",
        description: "Bread is the only right option",
    },
    {
        id: 4,
        title: "Snacks",
        subcategories: [
            {
                id: 1,
                title: "Sweet",
            },
            {
                id: 2,
                title: "Savory",
            },
        ]
    },
]