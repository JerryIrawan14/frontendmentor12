document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.input');
    const daysSpan = document.getElementById('days');
    const monthsSpan = document.getElementById('months');
    const yearsSpan = document.getElementById('years');

    // Function to calculate age
    const getBirthday = (day, month, year) => {
        const now = new Date();
        const birthDate = new Date(year, month - 1, day);

        let dayNow = now.getDate() - birthDate.getDate();
        let monthNow = now.getMonth() - birthDate.getMonth();
        let yearNow = now.getFullYear() - birthDate.getFullYear();

        if (dayNow < 0) {
            monthNow--;
            const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            dayNow += lastMonth.getDate();
        }
        if (monthNow < 0) {
            yearNow--;
            monthNow += 12;
        }

        return {
            days: dayNow,
            months: monthNow,
            years: yearNow
        };
    };

    // Update age display function
    const updateAgeDisplay = () => {
        const day = parseInt(document.getElementById('day').value, 10);
        const month = parseInt(document.getElementById('month').value, 10);
        const year = parseInt(document.getElementById('year').value, 10);

        if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
            const age = getBirthday(day, month, year);
            yearsSpan.textContent = `${age.years}`;
            monthsSpan.textContent = `${age.months}`;
            daysSpan.textContent = `${age.days}`;
        } else {
            // Clear the display if any input is invalid or missing
            yearsSpan.textContent = `--`;
            monthsSpan.textContent = `--`;
            daysSpan.textContent = `--`;
        }
    };

    // Attach event listeners to inputs
    inputs.forEach(input => {
        input.addEventListener('input', updateAgeDisplay);
    });

    // Initialize display
    updateAgeDisplay();


    
});