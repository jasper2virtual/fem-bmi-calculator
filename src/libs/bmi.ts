import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'

type Tsystem = 'metric' | 'imperial'

export function useBMI() {

    /**
     * Metric and Imperial Systems
     * 
     * If 'imperial', weight is interpreted as pounds, and height as inches.  
     * If 'metric', weight is interpreted as kilograms, and height as meters.  
    */
    const system = ref<Tsystem>('metric')
    const weight = ref<number>(0)
    const height = ref<number>(0)
    const bmi = computed(() => calcBMI(weight.value, height.value, system.value === 'imperial'))

    /**
     * Ideal Weight
     * Weight in pounds = 5 x BMI + (BMI divided by 5) x (Height in inches minus 60)
     * Weight in kilograms = 2.2 x BMI + (3.5 x BMI) x (Height in meters minus 1.5)
    */
    const idealWeight = computed(() => {
        if (system.value === 'imperial') {
            return 5 * bmi.value.value + (bmi.value.value / 5) * (height.value - 60)
        } else {
            return 2.2 * bmi.value.value + (3.5 * bmi.value.value) * (height.value - 1.5)
        }
    })

    return {
        system,
        weight,
        height,
        bmi,
        idealWeight
    }
}