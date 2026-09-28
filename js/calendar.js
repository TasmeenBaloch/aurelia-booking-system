// CALENDAR

// Get calendar elements
const calendarSection = document.getElementById("calendarSection");
const calendarDays = document.getElementById("calendarDays");
const currentMonth = document.getElementById("currentMonth");

const previousMonthBtn = document.getElementById("previousMonth");
const nextMonthBtn = document.getElementById("nextMonth");

const selectedDateDisplay = document.getElementById("selectedDate");

// Customer details section
const detailsSection = document.getElementById("detailsSection");

// Review section
const reviewSection = document.getElementById("reviewSection");


// Keep track of the month currently being displayed
let calendarDate = new Date();

// Store the selected booking date
let selectedBookingDate = null;

// Store the selected booking time
let selectedBookingTime = "";


// Generate the calendar
function generateCalendar() {

    // Clear the previous dates
    calendarDays.innerHTML = "";

    // Get current month and year
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);

    // Get the number of days in the month
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();

    // Convert Sunday-based index to Monday-based index
    let startingDay = firstDay.getDay();

    if (startingDay === 0) {
        startingDay = 6;
    } else {
        startingDay = startingDay - 1;
    }


    // Display month and year
    currentMonth.textContent = calendarDate.toLocaleDateString(
        "en-US",
        {
            month: "long",
            year: "numeric"
        }
    );


    // Add empty spaces before the first day
    for (let i = 0; i < startingDay; i++) {

        const emptyDay = document.createElement("div");

        calendarDays.appendChild(emptyDay);
    }


    // Create buttons for each day
    for (let day = 1; day <= daysInMonth; day++) {

        const dayButton = document.createElement("button");

        dayButton.textContent = day;

        dayButton.type = "button";

        dayButton.classList.add("calendar-day");


        // When a date is clicked
        dayButton.addEventListener("click", function () {

            // Remove previous date selection
            document.querySelectorAll(".calendar-day")
                .forEach(function (button) {
                    button.classList.remove("selected");
                });


            // Select clicked date
            dayButton.classList.add("selected");


            // Store selected date
            selectedBookingDate = new Date(year, month, day);


            // Display selected date
            selectedDateDisplay.textContent =
                selectedBookingDate.toLocaleDateString(
                    "en-US",
                    {
                        weekday: "long",
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                );


            console.log("Selected date:", selectedBookingDate);


            // Show available appointment times
            const timeSlots = document.getElementById("timeSlots");

            timeSlots.innerHTML = "";

            // Reset previously selected time
            selectedBookingTime = "";


            const availableTimes = [
                "10:00 AM",
                "11:30 AM",
                "2:00 PM",
                "4:00 PM"
            ];


            availableTimes.forEach(function (time) {

                const timeButton = document.createElement("button");

                timeButton.textContent = time;

                timeButton.type = "button";

                timeButton.classList.add("time-slot");


                // When a time is clicked
                timeButton.addEventListener("click", function () {

                    // Remove previous time selection
                    document.querySelectorAll(".time-slot")
                        .forEach(function (slot) {
                            slot.classList.remove("selected");
                        });


                    // Select this time
                    timeButton.classList.add("selected");

                    // Store selected time
                    selectedBookingTime = time;


                    console.log("Selected time:", selectedBookingTime);
                });


                timeSlots.appendChild(timeButton);
            });

        });


        calendarDays.appendChild(dayButton);
    }
}


// Previous month
previousMonthBtn.addEventListener("click", function () {

    calendarDate.setMonth(calendarDate.getMonth() - 1);

    generateCalendar();

});


// Next month
nextMonthBtn.addEventListener("click", function () {

    calendarDate.setMonth(calendarDate.getMonth() + 1);

    generateCalendar();

});


// Generate calendar when page loads
generateCalendar();


// BACK TO SERVICE SELECTION

const backToService = document.getElementById("backToService");

backToService.addEventListener("click", function () {

    // Hide calendar
    calendarSection.classList.add("hidden");

    // Show Step 1
    document.querySelector(".intro-section").classList.remove("hidden");

    document.querySelectorAll(".booking-section")
        .forEach(function (section) {
            section.classList.remove("hidden");
        });

    document.querySelector(".continue-container")
        .classList.remove("hidden");

});


// CONTINUE TO CUSTOMER DETAILS

const continueToDetails =
    document.getElementById("continueToDetails");

continueToDetails.addEventListener("click", function () {

    // Check whether a date has been selected
    if (!selectedBookingDate) {

        alert("Please select a date.");

        return;
    }


    // Check whether a time has been selected
    if (selectedBookingTime === "") {

        alert("Please select an appointment time.");

        return;
    }


    // Hide calendar
    calendarSection.classList.add("hidden");


    // Show customer details
    detailsSection.classList.remove("hidden");

});


// BACK TO CALENDAR

const backToCalendar =
    document.getElementById("backToCalendar");

backToCalendar.addEventListener("click", function () {

    // Hide customer details
    detailsSection.classList.add("hidden");


    // Show calendar
    calendarSection.classList.remove("hidden");

});


// CUSTOMER DETAILS VALIDATION

const continueToReview =
    document.getElementById("continueToReview");

const customerName =
    document.getElementById("customerName");

const customerEmail =
    document.getElementById("customerEmail");

const customerPhone =
    document.getElementById("customerPhone");

const customerAddress =
    document.getElementById("customerAddress");


continueToReview.addEventListener("click", function () {

    // Check Full Name
    if (customerName.value.trim() === "") {

        alert("Please enter your full name.");

        customerName.focus();

        return;
    }


    // Check Email
    if (customerEmail.value.trim() === "") {

        alert("Please enter your email address.");

        customerEmail.focus();

        return;
    }


    // Check Phone Number
    if (customerPhone.value.trim() === "") {

        alert("Please enter your phone number.");

        customerPhone.focus();

        return;
    }


    // Check Address
    if (customerAddress.value.trim() === "") {

        alert("Please enter your address.");

        customerAddress.focus();

        return;
    }



    // SHOW INFORMATION IN REVIEW SECTION

    document.getElementById("reviewService").textContent =
        selectedService;

    document.getElementById("reviewAppliance").textContent =
        selectedAppliance;


    document.getElementById("reviewDate").textContent =
        selectedBookingDate.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );


    document.getElementById("reviewTime").textContent =
        selectedBookingTime;


    document.getElementById("reviewName").textContent =
        customerName.value;


    document.getElementById("reviewEmail").textContent =
        customerEmail.value;


    document.getElementById("reviewPhone").textContent =
        customerPhone.value;


    document.getElementById("reviewAddress").textContent =
        customerAddress.value;


    // Hide Customer Details
    detailsSection.classList.add("hidden");


    // Show Review
    reviewSection.classList.remove("hidden");

});

// Confirm Booking

const confirmBooking = document.getElementById("confirmBooking");

const confirmationSection = document.getElementById("confirmationSection");

const bookingReference = document.getElementById("bookingReference");

const confirmationService = document.getElementById("confirmationService");

const confirmationAppliance = document.getElementById("confirmationAppliance");

const confirmationDate = document.getElementById("confirmationDate");

const confirmationTime = document.getElementById("confirmationTime");


confirmBooking.addEventListener("click", function() {

    // Create a simple booking reference
    const referenceNumber =
        "AUR-" + Math.floor(100000 + Math.random() * 900000);

    // Display booking reference
    bookingReference.textContent = referenceNumber;

    // Display booking information
    confirmationService.textContent = selectedService;

    confirmationAppliance.textContent = selectedAppliance;

    confirmationDate.textContent =
        selectedBookingDate.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric"
            }
        );

    confirmationTime.textContent = selectedBookingTime;


    // Hide Review
    reviewSection.classList.add("hidden");

    // Show Confirmation
    confirmationSection.classList.remove("hidden");

});


// BOOK ANOTHER SERVICE

const bookAnotherService =
    document.getElementById("bookAnotherService");

bookAnotherService.addEventListener("click", function() {

    // Hide confirmation
    confirmationSection.classList.add("hidden");

    // Show Step 1
    document.querySelector(".intro-section").classList.remove("hidden");

    document.querySelectorAll(".booking-container .booking-section")
        .forEach(function(section) {
            section.classList.remove("hidden");
        });

    document.querySelector(".continue-container")
        .classList.remove("hidden");

    // Reset service selection
    selectedService = "";

    serviceCards.forEach(function(card) {
        card.classList.remove("selected");
    });

    // Reset appliance
    selectedAppliance = "";
    applianceSelect.value = "";

});