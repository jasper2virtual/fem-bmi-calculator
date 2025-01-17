/// <reference types="vite/client" />

// Custom type definition for bmi-calc
declare module 'bmi-calc' {
    /**
     * Calculates the Body Mass Index (BMI) based on weight and height.
     *
     * @param weight - The weight of the individual.
     * @param height - The height of the individual.
     * @param isImperial - A boolean indicating if the measurements are in imperial units (true) or metric units (false).
     * @returns An object containing:
     * - `value`: The calculated BMI value.
     * - `name`: The BMI category name.
    */
    export default function calcBMI(weight: number, height: number, isImperial: boolean): { value: number, name: string };
}