
// Get all service cards
const serviceCards = document.querySelectorAll(".service-card");

// Store the customer's selected service
let selectedService = "";

// Store the customer's selected appliance
let selectedAppliance = "";


// Add a click event to every service card
serviceCards.forEach(function (card) {

    card.addEventListener("click", function () {

        // Remove the selected style from all cards
        serviceCards.forEach(function (item) {
            item.classList.remove("selected");
        });

        // Add selected style to the card that was clicked
        card.classList.add("selected");

        // Get the service name from the data-service attribute
        selectedService = card.dataset.service;

        console.log("Selected service:", selectedService);
    });

});


// Get the appliance dropdown
const applianceSelect = document.getElementById("appliance");

// Get the continue button
const continueBtn = document.getElementById("continueBtn");


// Handle continue button click
continueBtn.addEventListener("click", function () {

    // Check whether a service was selected
    if (selectedService === "") {

        alert("Please select a service.");

        return;
    }

    // Check whether an appliance was selected
    if (applianceSelect.value === "") {

        alert("Please select an appliance.");

        return;
    }

    // Store the selected appliance
    selectedAppliance = applianceSelect.value;

    console.log("Service:", selectedService);
    console.log("Appliance:", selectedAppliance);


    // Hide Step 1
    document.querySelector(".intro-section").classList.add("hidden");

    document.querySelector(".booking-container").querySelectorAll(".booking-section").forEach(function (section) {
        section.classList.add("hidden");
    });

    document.querySelector(".continue-container").classList.add("hidden");


    // Show Calendar
    calendarSection.classList.remove("hidden");

});

// back to customer details from review
const backToDetails = document.getElementById("backToDetails");

backToDetails.addEventListener("click", function () {

    // hide review
    reviewSection.classList.add("hidden");

    //show customer details
    detailsSection.classList.remove("hidden");
});

