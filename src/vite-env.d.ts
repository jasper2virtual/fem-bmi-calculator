/// <reference types="vite/client" />

// Custom type definition for bmi-calc
declare module 'bmi-calc' {
    /**
     * Calculates the Body Mass Index (BMI) based on weight and height.
     * 
     * @param weight - The weight of the individual.  
     *   ( in pounds when **isImperial** is true, otherwise in kilograms )
     * 
     * @param height - The height of the individual.  
     *   ( in inches when **isImperial** is true, otherwise in meters )
     * 
     * @param isImperial - A boolean indicating if the measurements are in imperial units (true) or metric units (false).  
     *   (optional, default is false)
     * 
     * @returns An object containing:
     * - `value`: The calculated BMI value.
     * - `name`: The BMI category name.
    */
    export default function calcBMI(weight: number, height: number, isImperial: boolean): { value: number, name: string };
}