// Course functionality
document.addEventListener('DOMContentLoaded', function() {
    // Courses array
    const courses = [
        {
            subject: 'CSE',
            number: 110,
            title: 'Introduction to Programming',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
            technology: ['Python'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 130,
            title: 'Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
            technology: ['HTML', 'CSS'],
            completed: true
        },
        {
            subject: 'CSE',
            number: 111,
            title: 'Programming with Functions',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
            technology: ['Python'],
            completed: false
        },
        {
            subject: 'CSE',
            number: 210,
            title: 'Programming with Classes',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
            technology: ['C#'],
            completed: false
        },
        {
            subject: 'WDD',
            number: 131,
            title: 'Dynamic Web Fundamentals',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: true
        },
        {
            subject: 'WDD',
            number: 231,
            title: 'Frontend Web Development I',
            credits: 2,
            certificate: 'Web and Computer Programming',
            description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
            technology: ['HTML', 'CSS', 'JavaScript'],
            completed: false
        }
    ];
    
    // DOM elements
    const coursesContainer = document.getElementById('coursesContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const totalCredits = document.getElementById('totalCredits');
    
    // Function to render courses
    function renderCourses(filter = 'all') {
        // Clear container
        coursesContainer.innerHTML = '';
        
        // Filter courses
        let filteredCourses = [];
        if (filter === 'all') {
            filteredCourses = courses;
        } else {
            filteredCourses = courses.filter(course => course.subject === filter);
        }
        
        // Calculate total credits
        const credits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
        totalCredits.textContent = credits;
        
        // Create course cards
        filteredCourses.forEach(course => {
            const courseCard = document.createElement('div');
            const statusClass = course.completed ? 'completed' : 'in-progress';
            const statusText = course.completed ? 'Completed' : 'In Progress';
            
            courseCard.className = course-card ${statusClass};
            
            courseCard.innerHTML = `
                <div class="course-header">
                    <div class="course-code">${course.subject} ${course.number}</div>
                    <div class="course-name">${course.title}</div>
                </div>
                <div class="course-body">
                    <div class="course-info">
                        <div class="course-credits">${course.credits} Credits</div>
                        <div class="course-status ${statusClass}">${statusText}</div>
                    </div>
                    <p class="course-description">${course.description}</p>
                    <div class="tech-badges">
                        ${course.technology.map(tech => <span class="tech-badge">${tech}</span>).join('')}
                    </div>
                </div>
            `;
            
            coursesContainer.appendChild(courseCard);
        });
    }
    
    // Initial render
    renderCourses();
    
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Render courses with selected filter
            renderCourses(this.dataset.filter);
        });
    });
});