const employees = [
    {
        "id": 1,
        "firstName": "Rahul",
        "email": "employee@gmail.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the monthly sales report for the team.",
                "taskDate": "14 feb 2025",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss Q1 targets with the client.",
                "taskDate": "15 feb 2025",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update CRM Data",
                "taskDescription": "Ensure all client details are up-to-date.",
                "taskDate": "13 feb 2025",
                "category": "Data Entry",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName": "Amit",
        "email": "employee2@gmail.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        },
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review code for the new feature release.",
                "taskDate": "14 feb 2025",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Bug #345",
                "taskDescription": "Resolve the login issue on the platform.",
                "taskDate": "12 feb 2025",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Increase test coverage for API endpoints.",
                "taskDate": "16 feb 2025",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Standup",
                "taskDescription": "Daily standup meeting with developers.",
                "taskDate": "14 feb 2025",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "firstName": "Neha",
        "email": "employee3@gmail.com",
        "password": "123",
        "taskCount": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Design UI Mockups",
                "taskDescription": "Create wireframes for the new dashboard.",
                "taskDate": "17 feb 2025",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Feedback Session",
                "taskDescription": "Gather feedback from users on recent updates.",
                "taskDate": "13 feb 2025",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Create Marketing Banner",
                "taskDescription": "Design a new banner for the upcoming campaign.",
                "taskDate": "15 feb 2025",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName": "Priya",
        "email": "employee4@gmail.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Draft a technical blog post on AI trends.",
                "taskDate": "18 feb 2025",
                "category": "Content Writing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve search ranking for blog posts.",
                "taskDate": "14 feb 2025",
                "category": "SEO",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstName": "Karan",
        "email": "employee5@gmail.com",
        "password": "123",
        "taskCount": {
            "active": 1,
            "newTask": 0,
            "completed": 1,
            "failed": 0
        },
        "tasks": [
            {
                "taskTitle": "Database Backup",
                "taskDescription": "Perform a full database backup.",
                "taskDate": "16 feb 2025",
                "category": "Database Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize SQL Queries",
                "taskDescription": "Improve performance of slow queries.",
                "taskDate": "14 feb 2025",
                "category": "Database Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];

const admins = [
    {
        "id": 1,
        "firstName": "Zahir",
        "email": "admin@gmail.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admins',JSON.stringify(admins))
}

export const getLocalStorage = () => {
    const admins = JSON.parse(localStorage.getItem('admins'))
    const employees = JSON.parse(localStorage.getItem('employees'))

    return {admins, employees};
}