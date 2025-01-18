// Add event listener to scroll down button
document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');
    const section3 = document.getElementById('section3');

    if (scrollPosition >= section1.offsetTop) {
        section1.classList.add('active');
    } else {
        section1.classList.remove('active');
    }

    if (scrollPosition >= section2.offsetTop) {
        section2.classList.add('active');
    } else {
        section2.classList.remove('active');
    }

    if (scrollPosition >= section3.offsetTop) {
        section3.classList.add('active');
    } else {
        section3.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopButtons = document.querySelectorAll('.scroll-to-top');

    scrollToTopButtons.forEach(button => {
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
});

// Add event listener to form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
        } else {
            console.log('Form submitted!');
        }
    });
});

// event listener to navigation menu links
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
window.onscroll = function() {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    let documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollPosition / documentHeight) * 100;
    document.getElementById("scrollIndicator").style.width = scrollPercentage + "%";
};
window.addEventListener('scroll', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Add event listener to chart
const skillsCtx = document.getElementById('skillsChart').getContext('2d');
new Chart(skillsCtx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    datasets: [{
      label: 'Skill Level',
      data: [90, 90, 75, 50, 30],
      backgroundColor: ['#007bff', '#6c757d', '#28a745', '#ffc107', '#dc3545'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#333'
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#333'
        },
        grid: {
          color: '#ccc'
        }
      },
      y: {
        ticks: {
          color: '#333'
        },
        grid: {
          color: '#ccc'
        },
        beginAtZero: true
      }
    }
  }
});


