export const hectoToPounds = (hectograms: number) => {
    const pounds = hectograms * 0.22046;
    return Number(pounds.toFixed(2));
}

export const hectoToKg = (hectograms: number) => {
    return hectograms * 0.1;
}

export const decimeterToFeetAndInches = (decimeters: number) => {
    const totalInches = decimeters * 3.93701;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches % 12; 

    return `${feet}\'${Number(inches.toFixed(2))}\"`;
}

export const decimeterToCentimeter = (decimeters: number) => {
    return decimeters * 10;
}