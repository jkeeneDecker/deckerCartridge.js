(function () {
    //Course codes to look for
    var courseCodes = [
        'pfl',
    ]

    var applyJs = false;

    var windowUrl = window.location.href;
    if (windowUrl.includes('/courses')) {
        var courseTitle = ENV.COURSE_TITLE.toString().toLowerCase();

        for (let i = 0; i < courseCodes.length; i++) {
            if (courseTitle.includes(courseCodes[i])) {
                applyJs = true;
                break;
            }
        }
    }

    if (applyJs) {
        var script = document.createElement('script');
        script.id = 'custom-script';
        script.src = 'https://script.google.com/macros/s/AKfycbyBFQWyOTdZhqymqPh8V_O1pP3SyfG0naxLLNZPq_hpg_dh1wOi67pKcC81JeXCwtZC/exec';
        document.head.appendChild(script);
    }
})();