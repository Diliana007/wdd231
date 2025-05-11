const courses = [
    { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, completed: true },
    { code: 'CSE 111', name: 'Programming Basics', credits: 4, completed: false },
    // Add more courses
];

function createCourseCard(course) {
    const card = document.createElement('div');
    card.className = `course-card ${course.completed ? 'completed' : ''}`;
    card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
    `;
    return card;
}

function renderCourses(filter = 'all') {
    const container = document.getElementById('course-container');
    container.innerHTML = '';
    
    const filtered = courses.filter(course => {
        if (filter === 'wdd') return course.code.startsWith('WDD');
        if (filter === 'cse') return course.code.startsWith('CSE');
        return true;
    });
    
    filtered.forEach(course => {
        container.appendChild(createCourseCard(course));
    });
    
    document.getElementById('creditTotal').textContent = 
        filtered.reduce((sum, course) => sum + course.credits, 0);
}

// Add event listeners for filter buttons
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        renderCourses(e.target.dataset.filter);
    });
});

// Initial render
renderCourses();