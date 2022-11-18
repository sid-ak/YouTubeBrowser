
export class StringHelper {
    
    /**
     * Checks if string is undefined or empty.
     * @param value 
     * @returns 
     */
    static isNullOrEmpty(value: string): boolean {
        return (value == undefined
            || value.trim().length === 0)
    }
}
