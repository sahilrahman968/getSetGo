export const parseDuration = (durationString) => {
    const parts = durationString.split(' ');
    let totalMinutes = 0;
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === 'hour' || parts[i] === 'hours') {
            totalMinutes += parseInt(parts[i - 1]) * 60;
        } else if (parts[i] === 'minute' || parts[i] === 'minutes') {
            totalMinutes += parseInt(parts[i - 1]);
        }
    }
    return totalMinutes;
}

export const sortByFastestFirst = (flights) => {
    flights.sort((a, b) => {
        const durationA = parseDuration(a.duration);
        const durationB = parseDuration(b.duration);
        return durationA - durationB;
    });

    return flights;
}

export const sortByCheapestFirst = (flights) => {
    flights.sort((a, b) => {
        return a.price - b.price;
    });

    return flights;
}