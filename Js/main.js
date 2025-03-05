$(document).ready(function() {
    // Initialize bxSlider with horizontal transition
    $('.bxslider').bxSlider({
        mode: 'horizontal',  // Slide images from right to left
        auto: true,          // Enable auto sliding
        speed: 800,          // Transition speed in milliseconds
        pause: 5000,         // Time between slides (5 seconds)
        controls: false,     // Hide navigation arrows
        pager: true,         // Show dots navigation
        adaptiveHeight: true // Adjust height based on content
    });

    $(".menu-trigger").click(function() {
        $("#menu").fadeToggle(300);
        $(this).toggleClass("active");
    });

    $('.info-request, .get-contact').fancybox();
    $("select").crfs(); 

    $(".table td").mouseenter(function(){    
        $(this).find(".holder").stop(true, true).fadeIn(600);
        $(this).find(">div").addClass('hover');
        return false;
    });

    $('.table td').mouseleave(function(){  
        $(this).find(".holder").stop(true, true).fadeOut(400);
        $(this).find(">div").removeClass('hover');
        return false;
    });

    $(".table td .holder").click(function() {
        $(this).stop(true, true).fadeOut(400);
        $(this).parent().parent().removeClass('hover');
        return false;
    });

    const events = {
        "2025-02-24": "Scholarship Program",
        "2025-02-25": "Scholarship Program",
        "2025-03-11": "Mission Team from the UK",
        "2025-03-12": "Mission Team from the UK",
        "2025-03-13": "Mission Team from the UK",
        "2025-03-14": "Mission Team from the UK",
        "2025-03-15": "Mission Team from the UK",
        "2025-07-04": "Independence Day Celebration",
        "2025-12-25": "Christmas Gathering"
    };

    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function updateCalendar() {
        $("#calendar-title").text(`${monthNames[currentMonth]} ${currentYear}`);

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
        firstDay = firstDay === 0 ? 7 : firstDay; 

        let lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
        let prevLastDate = new Date(currentYear, currentMonth, 0).getDate();

        let calendarHTML = `<tr>
            <th class="col-1">Mon</th>
            <th class="col-2">Tue</th>
            <th class="col-3">Wed</th>
            <th class="col-4">Thu</th>
            <th class="col-5">Fri</th>
            <th class="col-6">Sat</th>
            <th class="col-7">Sun</th>
        </tr><tr>`;

        let dayCount = 1;
        let nextMonthDay = 1;

        for (let i = 0; i < 7; i++) {
            if (i < firstDay - 1) {
                calendarHTML += `<td class="col-${i + 1} disable"><div>${prevLastDate - (firstDay - 2) + i}</div></td>`;
            } else if (dayCount <= lastDate) {
                let dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
                let eventClass = events[dateKey] ? "event-day" : "";
                let eventTooltip = events[dateKey] ? `title="${events[dateKey]}"` : "";
                
                calendarHTML += `<td class="col-${i + 1} ${eventClass}" ${eventTooltip} data-event="${events[dateKey] || ''}">
                                    <div>${dayCount}</div>
                                </td>`;
                dayCount++;
            }
        }

        calendarHTML += "</tr>";

        while (dayCount <= lastDate) {
            calendarHTML += "<tr>";
            for (let i = 0; i < 7; i++) {
                if (dayCount <= lastDate) {
                    let dateKey = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(dayCount).padStart(2, '0')}`;
                    let eventClass = events[dateKey] ? "event-day" : "";
                    let eventTooltip = events[dateKey] ? `title="${events[dateKey]}"` : "";

                    calendarHTML += `<td class="col-${i + 1} ${eventClass}" ${eventTooltip} data-event="${events[dateKey] || ''}">
                                        <div>${dayCount}</div>
                                    </td>`;
                } else {
                    calendarHTML += `<td class="col-${i + 1} disable"><div>${nextMonthDay}</div></td>`;
                    nextMonthDay++;
                }
                dayCount++;
            }
            calendarHTML += "</tr>";
        }

        $(".table table").html(calendarHTML);

        $(".event-day").hover(function() {
            let eventName = $(this).attr("data-event");
            if (eventName) {
                $(this).append(`<span class="event-tooltip">${eventName}</span>`);
            }
        }, function() {
            $(".event-tooltip").remove();
        });
    }

    $(".prev").click(function(e) {
        e.preventDefault();
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        updateCalendar();
    });

    $(".next").click(function(e) {
        e.preventDefault();
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        updateCalendar();
    });

    updateCalendar();
});

// Belief section animation (unchanged)
document.addEventListener("DOMContentLoaded", function () {
    const beliefs = document.querySelectorAll(".belief");

    function checkScroll() {
        const triggerPoint = window.innerHeight * 0.85;

        beliefs.forEach((belief) => {
            const beliefTop = belief.getBoundingClientRect().top;
            const beliefBottom = belief.getBoundingClientRect().bottom;

            if (beliefTop < triggerPoint && beliefBottom > 0) {
                belief.classList.add("show");
            } else {
                belief.classList.remove("show"); // Reset when out of view
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load in case already in view
});


/*Js for top-bar*/
document.addEventListener("DOMContentLoaded", function () {
    const topBar = document.getElementById("top-bar");
    const header = document.getElementById("header");
    const topBarPlaceholder = document.getElementById("top-bar-placeholder");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) { 
            topBar.style.transform = "translateY(-100%)"; 
            header.style.top = "0"; 
            topBarPlaceholder.style.display = "none"; // Hide placeholder when scrolling down
        } else if (window.scrollY === 0) { 
            topBar.style.transform = "translateY(0)"; 
            header.style.top = "50px"; 
            topBarPlaceholder.style.display = "block"; // Show placeholder when scrolling up
        }
    });
});


/*Js for top-bar ends*/

/*Js for splitting text h2*/
document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector(".animated-title");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    title.classList.add("visible");
                } else {
                    title.classList.remove("visible"); // Reset when out of view
                }
            });
        },
        { threshold: 0.5 } // Triggers when 50% of the element is visible
    );

    observer.observe(title);
});

/*Js for splitting text h2 ends*/

document.addEventListener("DOMContentLoaded", function () {
    const sermonTitle = document.querySelector(".animated-title2");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    sermonTitle.classList.add("reveal");
                } else {
                    sermonTitle.classList.remove("reveal"); // Reset when out of view
                }
            });
        },
        { threshold: 0.5 } // Triggers when 50% of the text is visible
    );

    observer.observe(sermonTitle);
});


/*Javascript - causes the section to expan*/

document.addEventListener("DOMContentLoaded", function () {
    const elementsToObserve = document.querySelectorAll(".request, .contents, .particles");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("expand");
                } else {
                    entry.target.classList.remove("expand"); // Remove if you want it to shrink again
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    elementsToObserve.forEach((element) => {
        if (element) {
            observer.observe(element);
        } else {
            console.error("Element not found");
        }
    });
});

/*Causes the button to shake every 20 seconds */
document.addEventListener("DOMContentLoaded", function () {
    const donateButton = document.querySelector(".donate-button");

    function shakeButton() {
        donateButton.classList.add("shake");

        // Remove the class after the animation to allow restarting
        setTimeout(() => {
            donateButton.classList.remove("shake");
        }, 600); // Matches animation duration (0.6s)
    }

    // Run shake every 20 seconds
    setInterval(shakeButton, 20000);
});


setTimeout(() => {
        document.getElementById("bookPopup").style.right = "5px";
    }, 5000);

    // Function to close the pop-up
    function closePopup() {
        document.getElementById("bookPopup").style.right = "-300px"; // Slide out
        setTimeout(() => {
            document.getElementById("nuggingIcon").style.display = "flex"; // Show the nugging icon
        }, 500);
    }

    // Function to open the pop-up again
    function openPopup() {
        document.getElementById("bookPopup").style.right = "20px"; // Slide in
        document.getElementById("nuggingIcon").style.display = "none"; // Hide nugging icon
    }


    document.addEventListener("DOMContentLoaded", function () {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function () {
            const moreText = this.previousElementSibling.querySelector(".more-text");

            if (moreText.style.display === "inline") {
                moreText.style.display = "none";
                this.textContent = "Read More";
            } else {
                moreText.style.display = "inline";
                this.textContent = "Read Less";
            }
        });
    });
});

