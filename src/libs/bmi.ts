import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'
import { length, mass } from 'units-converter'



export function useBMI() {

    const system = ref<'metric' | 'imperial'>('metric')
    const weightInKg = ref<number>(0)
    const heightInCm = ref<number>(0)
    const weightInLb = ref<number>(0)
    const heightInIn = ref<number>(0)

    const bmi = computed(() => {
        const { value: bmiValue, name: bmiCategory } = system.value == 'metric' ?
            calcBMI(weightInKg.value, length(heightInCm.value).from('cm').to('m').value) :
            calcBMI(weightInLb.value, heightInIn.value, true)
        return { bmiValue, bmiCategory }
    })

    const idealWeightInKg = computed(() => ({
        min: getWeight(18.5, length(heightInCm.value).from('cm').to('m').value),
        max: getWeight(24.9, length(heightInCm.value).from('cm').to('m').value)
    }))
    const idealWeightInLb = computed(() => ({
        min: mass(getWeight(18.5, length(heightInIn.value).from('in').to('m').value)).from('kg').to('lb').value,
        max: mass(getWeight(24.9, length(heightInIn.value).from('in').to('m').value)).from('kg').to('lb').value
    }))

    const getWeight = (bmi: number, height_m: number) => bmi * Math.pow(height_m, 2)

    return {
        system,
        weightInKg,
        heightInCm,
        weightInLb,
        heightInIn,
        bmi,
        idealWeightInKg,
        idealWeightInLb
    }
}
