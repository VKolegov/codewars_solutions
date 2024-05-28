const endings = [
    ['second', 'seconds'],
    ['minute', 'minutes'],
    ['hour', 'hours'],
    ['day', 'days'],
    ['year', 'years'],
];


function getWithEnding(n, singular, plural) {
    switch (n) {
        case 0:
            return '';
        case 1:
            return `${n} ${singular}`;
        default:
            return `${n} ${plural}`
    }
}

function formatDuration(seconds) {

    if (!seconds) {
        return 'now';
    }

    let minutes = 0;
    let hours = 0;
    let days = 0;
    let years = 0;

    let result = '';
  

    while (seconds >= 60) {
        seconds -= 60;
        minutes++;

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        if (hours >= 24) {
            days++;
            hours = 0;
        }

        if (days >= 365) {
            years++;
            days = 0;
        }
    }

    const timeComponents = [seconds, minutes, hours, days, years];

    let firstEntry = true;
    for (let i = 0; i < timeComponents.length; i++) {
        if (!timeComponents[i]) {
            continue;
        }

        if (result) {
            result = (firstEntry ? ' and ' : ', ') + result;
            firstEntry = false;
        }

        result = getWithEnding(timeComponents[i], ...endings[i]) + result;
    }

    return result;
}