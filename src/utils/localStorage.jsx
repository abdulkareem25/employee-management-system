const employees = [
    {
        "Id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Prepare Sales Report",
                "taskDescription": "Compile the monthly sales report for the team.",
                "taskDate": "2025-02-14",
                "category": "Reports",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Meeting",
                "taskDescription": "Discuss Q1 targets with the client.",
                "taskDate": "2025-02-15",
                "category": "Meetings",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Update CRM Data",
                "taskDescription": "Ensure all client details are up-to-date.",
                "taskDate": "2025-02-13",
                "category": "Data Entry",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "Id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Code Review",
                "taskDescription": "Review code for the new feature release.",
                "taskDate": "2025-02-14",
                "category": "Development",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Fix Bug #345",
                "taskDescription": "Resolve the login issue on the platform.",
                "taskDate": "2025-02-12",
                "category": "Bug Fixing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Write Unit Tests",
                "taskDescription": "Increase test coverage for API endpoints.",
                "taskDate": "2025-02-16",
                "category": "Testing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Team Standup",
                "taskDescription": "Daily standup meeting with developers.",
                "taskDate": "2025-02-14",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "Id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Design UI Mockups",
                "taskDescription": "Create wireframes for the new dashboard.",
                "taskDate": "2025-02-17",
                "category": "Design",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Client Feedback Session",
                "taskDescription": "Gather feedback from users on recent updates.",
                "taskDate": "2025-02-13",
                "category": "Meetings",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskTitle": "Create Marketing Banner",
                "taskDescription": "Design a new banner for the upcoming campaign.",
                "taskDate": "2025-02-15",
                "category": "Marketing",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "Id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Write Blog Post",
                "taskDescription": "Draft a technical blog post on AI trends.",
                "taskDate": "2025-02-18",
                "category": "Content Writing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "SEO Optimization",
                "taskDescription": "Improve search ranking for blog posts.",
                "taskDate": "2025-02-14",
                "category": "SEO",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "Id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskTitle": "Database Backup",
                "taskDescription": "Perform a full database backup.",
                "taskDate": "2025-02-16",
                "category": "Database Management",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskTitle": "Optimize SQL Queries",
                "taskDescription": "Improve performance of slow queries.",
                "taskDate": "2025-02-14",
                "category": "Database Management",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
]

const admin = [
    {
        "Id": 1,
        "email": "admin@example.com",
        "password": "123"
    }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    console.log(employees, admin)
}