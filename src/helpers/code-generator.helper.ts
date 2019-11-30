const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export function getUniqueID(sizeOfID: number): string {
    let uniqueID;
    for(let i=0; i<sizeOfID; i++){
        uniqueID = uniqueID + possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
    return uniqueID;
}