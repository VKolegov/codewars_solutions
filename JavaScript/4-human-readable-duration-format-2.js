const timeUnits = [
    {
        name: 'year',
        plural: 'years',
        seconds: 365 * 24 * 60 * 60,
    },
    {
        name: 'day',
        plural: 'days',
        seconds: 24 * 60 * 60,
    },
    {
        name: 'hour',
        plural: 'hours',
        seconds: 60 * 60,
    },
    {
        name: 'minute',
        plural: 'minutes',
        seconds: 60,
    },
    {
        name: 'second',
        plural: 'seconds',
        seconds: 1,
    },
]

function formatDuration(seconds) {

    if (!seconds) {
        return 'now';
    }
    
    const resultValues = [];

    for (let timeUnit of timeUnits) {
        if (seconds < timeUnit.seconds) {
            continue;
        }

        const unitVal = Math.floor(seconds / timeUnit.seconds);
        const ending = unitVal > 1 ? timeUnit.plural : timeUnit.name;

        resultValues.push(
            `${unitVal} ${ending}`
        );

        seconds %= timeUnit.seconds;
    }
    const valuesCount = resultValues.length;

    if (valuesCount === 1) {
        return resultValues[0];
    } else {
        return resultValues
            .slice(0, valuesCount - 1)
            .join(', ')
            + ' and ' + resultValues[valuesCount - 1];
    }
}
