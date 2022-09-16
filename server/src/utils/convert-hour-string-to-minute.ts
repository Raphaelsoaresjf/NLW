export function convertHourStringToMinutes(hourString: string) {
    const [hours, minute] = hourString.split(':').map(Number);

    const minutesAmout = (hours * 60) + minute;

    return minutesAmout;

}