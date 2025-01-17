import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'


type Tsystem = 'metric' | 'imperial'
type TweightInMetric = {
    kg: number
}
type TheightInMetric = {
    cm: number
}
type TweightInImperial = {
    st: number,
    lb: number
}
type TheightInImperial = {
    ft: number,
    in: number
}



export function useBMI() {

    const system = ref<Tsystem>('metric')
    const weightInMetric = computed<TweightInMetric>({
        get: () => ({ kg: _weightInKg.value }),
        set: (newValue) => {
            _weightInKg.value = newValue.kg
        }
    })
    const weightInImperial = computed<TweightInImperial>({
        get: () => {
            const lb = _weightInKg.value * 2.20462262
            return {
                st: Math.floor(lb / 14),
                lb: lb % 14
            }
        },
        set: (newValue) => {
            const lb = newValue.st * 14 + newValue.lb
            _weightInKg.value = lb / 2.20462262
        }
    })


    const heightInMetric = computed<TheightInMetric>({
        get: () => ({ cm: _heightInCm.value }),
        set: (newValue) => {
            _heightInCm.value = newValue.cm
        }
    })
    const heightInImperial = computed<TheightInImperial>({
        get: () => {
            const inInches = _heightInCm.value / 2.54
            return {
                ft: Math.floor(inInches / 12),
                in: inInches % 12
            }
        },
        set: (newValue) => {
            const inInches = newValue.ft * 12 + newValue.in
            _heightInCm.value = inInches * 2.54
        }
    })


    const _weightInKg = ref<number>(0)
    const _heightInCm = ref<number>(0)
    /**
     * 
     */
    const bmi = computed(() => calcBMI(weight.value, height.value))

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