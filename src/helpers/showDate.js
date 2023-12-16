function showDate(myDate){
    const newDate = new Date(myDate);
    const longOption = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    return newDate.toLocaleDateString('nl-NL', longOption);

}

export default showDate;