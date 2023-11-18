document.addEventListener("DOMContentLoaded", function () {
    // Function to create habit items with 7-day history
    function createHabitItem(habitName, pastStatuses) {
        const habitItem = document.createElement("div");
        habitItem.classList.add("habit-item");
        habitItem.innerHTML = `
            <h3>${habitName}</h3>
            <div class="habit-status">
                <p>Today's Status:</p>
                <select class="today-status">
                    <option value="done">Done</option>
                    <option value="not-done">Not Done</option>
                    <option value="none">None</option>
                </select>
            </div>
            <div class="history">
                <p>Last 7 Days:</p>
                <div class="past-status">
                    <!-- Past 7 days' status will be generated here dynamically -->
                </div>
            </div>
        `;
        const habitsList = document.getElementById("habitsList");
        habitsList.appendChild(habitItem);

        // Event listener to show past statuses on clicking a habit
        habitItem.addEventListener("click", function () {
            const pastStatusDiv = habitItem.querySelector(".past-status");
            pastStatusDiv.innerHTML = ""; // Clear previous statuses

            pastStatuses.forEach(status => {
                const statusItem = document.createElement("span");
                statusItem.classList.add("past-status-item");
                statusItem.textContent = status;
                pastStatusDiv.appendChild(statusItem);
            });
        });
    }

    // Create example habits with past status data (modify as needed)
    const habitsData = [
        {
            name: "Reading",
            pastStatuses: ["None", "Done", "Not Done", "Done", "None", "Done", "None"]
        },
        {
            name: "Exercise",
            pastStatuses: ["Done", "Done", "Not Done", "Not Done", "None", "None", "Done"]
        }
    ];

    const habitsList = document.getElementById("habitsList");

    habitsData.forEach(habitData => {
        createHabitItem(habitData.name, habitData.pastStatuses);
    });
});
