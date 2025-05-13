 document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('cgpa-form');
            const subjectsContainer = document.getElementById('subjects');
            const addSubjectBtn = document.getElementById('add-subject');
            const resultDiv = document.getElementById('result');
            const particlesContainer = document.getElementById('particles');
            
            // Create floating particles
            function createParticles() {
                const particleCount = 100;
                for (let i = 0; i < particleCount; i++) {
                    const particle = document.createElement('div');
                    particle.classList.add('particle');
                    
                    // Random size between 2px and 6px
                    const size = Math.random() * 4 + 2;
                    particle.style.width = `${size}px`;
                    particle.style.height = `${size}px`;
                    
                    // Random position
                    particle.style.left = `${Math.random() * 100}%`;
                    particle.style.top = `${Math.random() * 100}%`;
                    
                    // Random animation duration between 10s and 20s
                    const duration = Math.random() * 10 + 10;
                    particle.style.animationDuration = `${duration}s`;
                    
                    // Random delay
                    particle.style.animationDelay = `${Math.random() * 5}s`;
                    
                    particlesContainer.appendChild(particle);
                }
            }
            
            // Create confetti effect
            function createConfetti() {
                const colors = ['#4361ee', '#4cc9f0', '#4895ef', '#3f37c9', '#f72585'];
                const confettiCount = 50;
                
                for (let i = 0; i < confettiCount; i++) {
                    const confetti = document.createElement('div');
                    confetti.classList.add('confetti');
                    
                    // Random color
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Random size between 5px and 10px
                    const size = Math.random() * 5 + 5;
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size}px`;
                    
                    // Random shape (square or circle)
                    if (Math.random() > 0.5) {
                        confetti.style.borderRadius = '50%';
                    } else {
                        confetti.style.borderRadius = '0';
                    }
                    
                    // Random position
                    confetti.style.left = `${Math.random() * 100}%`;
                    
                    // Random animation duration between 2s and 4s
                    const duration = Math.random() * 2 + 2;
                    confetti.style.animationDuration = `${duration}s`;
                    
                    document.body.appendChild(confetti);
                    
                    // Remove confetti after animation completes
                    setTimeout(() => {
                        confetti.remove();
                    }, duration * 1000);
                }
            }
            
            // Add subject
            addSubjectBtn.addEventListener('click', function() {
                const newSubject = document.querySelector('.subject').cloneNode(true);
                const inputs = newSubject.querySelectorAll('select, input');
                
                // Clear values
                inputs.forEach(input => {
                    input.value = '';
                });
                
                // Make remove button visible for new subjects
                const removeBtn = newSubject.querySelector('.remove-subject');
                removeBtn.style.opacity = '1';
                
                subjectsContainer.appendChild(newSubject);
                
                // Add animation class
                newSubject.classList.add('animate__animated', 'animate__fadeIn');
                
                // Scroll to the new subject
                setTimeout(() => {
                    newSubject.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 100);
            });
            
            // Remove subject
            subjectsContainer.addEventListener('click', function(e) {
                if (e.target.classList.contains('remove-subject')) {
                    // Don't allow removing the last subject
                    if (subjectsContainer.children.length > 1) {
                        const subjectToRemove = e.target.closest('.subject');
                        subjectToRemove.classList.add('animate__animated', 'animate__fadeOut');
                        
                        setTimeout(() => {
                            subjectToRemove.remove();
                        }, 500);
                    } else {
                        showResult('You need at least one subject!', 'error');
                    }
                }
            });
            
            document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cgpa-form');
    const subjectsContainer = document.getElementById('subjects');
    const addSubjectBtn = document.getElementById('add-subject');
    const resultDiv = document.getElementById('result');
    const particlesContainer = document.getElementById('particles');
    
    // Create floating particles
    function createParticles() {
        const particleCount = 20;
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = `${duration}s`;
            
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }
    
    // Create confetti effect
    function createConfetti() {
        const colors = ['#4361ee', '#4cc9f0', '#4895ef', '#3f37c9', '#f72585'];
        const confettiCount = 50;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const size = Math.random() * 5 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%';
            } else {
                confetti.style.borderRadius = '0';
            }
            
            confetti.style.left = `${Math.random() * 100}%`;
            
            const duration = Math.random() * 2 + 2;
            confetti.style.animationDuration = `${duration}s`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, duration * 1000);
        }
    }
    
    // Add subject
    addSubjectBtn.addEventListener('click', function() {
        const newSubject = document.querySelector('.subject').cloneNode(true);
        const inputs = newSubject.querySelectorAll('select, input');
        
        inputs.forEach(input => {
            input.value = '';
        });
        
        const removeBtn = newSubject.querySelector('.remove-subject');
        removeBtn.style.opacity = '1';
        
        subjectsContainer.appendChild(newSubject);
        newSubject.classList.add('animate__animated', 'animate__fadeIn');
        
        setTimeout(() => {
            newSubject.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);

    });
    
    // Remove subject
    subjectsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-subject')) {
            if (subjectsContainer.children.length > 1) {
                const subjectToRemove = e.target.closest('.subject');
                subjectToRemove.classList.add('animate__animated', 'animate__fadeOut');
                
                setTimeout(() => {
                    subjectToRemove.remove();
                }, 500);
            } else {
                showResult('You need at least one subject!', 'error');
            }
        }
    });
    
    // Calculate CGPA
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const subjects = subjectsContainer.querySelectorAll('.subject');
        let totalGradePoints = 0;
        let totalCredits = 0;
        let hasError = false;
        let hasFailedSubject = false;
        
        subjects.forEach(subject => {
            const gradeSelect = subject.querySelector('select[name="grade"]');
            const creditInput = subject.querySelector('input[name="credit"]');
            
            // Validate inputs
            if (!gradeSelect.value || !creditInput.value) {
                hasError = true;
                subject.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    subject.style.animation = '';
                }, 500);
                return;
            }
            
            const gradePoint = parseFloat(gradeSelect.value);
            const credits = parseFloat(creditInput.value);
            
            // Check for F grade (0.0)
            if (gradePoint === 0.0) {
                hasFailedSubject = true;
            }
            
            totalGradePoints += (gradePoint * credits);
            totalCredits += credits;
        });
        
        if (hasError) {
            showResult('Please fill all fields correctly!', 'error');
            return;
        }
        
        if (totalCredits === 0) {
            showResult('Please add at least one subject with valid credits!', 'error');
            return;
        }
        
        let cgpa;
        if (hasFailedSubject) {
            cgpa = '0.0 (Failed subject)';
        } else {
            cgpa = (totalGradePoints / totalCredits).toFixed(2);
        }
        
        showResult(`Your CGPA is: <span style="font-size: 1.8rem; color: var(--accent-color)">${cgpa}</span>`, 
                  hasFailedSubject ? 'error' : 'success');
        
        // Create confetti if CGPA is good and no failed subjects
        if (!hasFailedSubject && parseFloat(cgpa) >= 9.5) {
            createConfetti();
        }
    });
    
    function showResult(message, type) {
        resultDiv.innerHTML = message;
        resultDiv.className = type;
        resultDiv.style.display = 'block';
        resultDiv.classList.add('animate__animated', 'animate__fadeIn');
        
        setTimeout(() => {
            resultDiv.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
    
    createParticles();
});// Calculate CGPA
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const subjects = subjectsContainer.querySelectorAll('.subject');
                let totalGradePoints = 0;
                let totalCredits = 0;
                let hasError = false;
                let hasFailedSubject = false;

                subjects.forEach(subject => {
                    const gradeSelect = subject.querySelector('select[name="grade"]');
                    const creditInput = subject.querySelector('input[name="credit"]');
                    
                    // Validate inputs
                    if (!gradeSelect.value || !creditInput.value) {
                        hasError = true;
                        subject.style.animation = 'shake 0.5s';
                        setTimeout(() => {
                            subject.style.animation = '';
                        }, 500);
                        return;
                    }
                    
                    const gradePoint = parseFloat(gradeSelect.value);
                    const credits = parseFloat(creditInput.value);
                    if(gradePoint === 0.0) {
                        hasFailedSubject = true;
                    }
                    totalGradePoints += (gradePoint * credits);
                    totalCredits += credits;
                });
                if (hasFailedSubject) {
                    showResult('You have failed a subject!', 'error');
                    return;
                }

                if (hasError) {
                    showResult('Please fill all fields correctly!', 'error');
                    return;
                }
                
                if (totalCredits === 0) {
                    showResult('Please add at least one subject with valid credits!', 'error');
                    return;
                }
                
                const cgpa = (totalGradePoints / totalCredits).toFixed(2);
                showResult(`Your CGPA is: <span style="font-size: 1.8rem; color: var(--accent-color)">${cgpa}</span>`, 'success');
                
                // Create confetti if CGPA is good
                if (cgpa >= 9.5) {
                    createConfetti();
                }
            });
            
            function showResult(message, type) {
                resultDiv.innerHTML = message;
                resultDiv.className = type;
                resultDiv.style.display = 'block';
                // Add animation class
                resultDiv.classList.add('animate__animated', 'animate__fadeIn');
                
                // Scroll to result
                setTimeout(() => {
                    resultDiv.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
            
            // Initialize particles
            createParticles();
        });