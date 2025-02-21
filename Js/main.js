$(document).ready(function() {
    $('.bxslider').bxSlider();
    
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

    // 📅 Events Data (Mapping Events to Dates)
    const events = {
        "2025-02-24": "Schorlarship Program",
        "2025-02-25": "Schorlarship Program",
        "2025-03-11": "Mission Team from the UK",
        "2025-03-12": "Mission Team from the UK",
          "2025-03-13": "Mission Team from the UK",
           "2025-03-14": "Mission Team from the UK",
            "2025-03-15": "Mission Team from the UK",
        "2025-07-04": "Independence Day Celebration",
        "2025-12-25": "Christmas Gathering"
    };

    let today = new Date();
    let currentMonth = today.getMonth(); // Dynamically get current month
    let currentYear = today.getFullYear(); // Dynamically get current year
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function updateCalendar() {
        $("#calendar-title").text(`${monthNames[currentMonth]} ${currentYear}`);

        let firstDay = new Date(currentYear, currentMonth, 1).getDay();
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

        // 🖱️ Add Hover Effect for Events
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

    updateCalendar(); // Initial Render with current date
});