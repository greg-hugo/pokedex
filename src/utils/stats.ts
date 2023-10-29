export const visualizeStats = (stat: number) => {
    const percentage = Math.ceil((stat / 252) * 100);
    let color = "";
    
    if (percentage <= 30){
        color = "#FF5252";
    }
    else if (percentage > 30 && percentage <= 55){
        color = "#FFD600";
    }
    else if (percentage > 55){
        color = "#00BFA5"
    }

    return { percentage, color };
};