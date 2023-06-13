function simpleDate(date: string, format: string = 'DD-MM-YYYY'): string {
    const dateObj = new Date(date);

    const formattedDate = format.replace(/(DD|MM|YYYY)/g, (match) => {
        switch (match) {
            case 'DD':
                return dateObj.toLocaleString(undefined, { day: '2-digit' });
            case 'MM':
                return dateObj.toLocaleString(undefined, { month: '2-digit' });
            case 'YYYY':
                return dateObj.toLocaleString(undefined, { year: 'numeric' });
            default:
                return match;
        }
    });

    return formattedDate;
}

function simpleTime(date: string, format: string = 'HH:mm'): string {
    const dateObj = new Date(date);

    const formattedDate = format.replace(/(HH|mm|ss)/g, (match) => {
        switch (match) {
            case 'HH':
                return dateObj.toLocaleString(undefined, { hour: '2-digit' });
            case 'mm':
                return dateObj.toLocaleString(undefined, { minute: '2-digit' });
            case 'ss':
                return dateObj.toLocaleString(undefined, { second: '2-digit' });
            default:
                return match;
        }
    });

    return formattedDate;
}

export {
    simpleDate,
    simpleTime
}
