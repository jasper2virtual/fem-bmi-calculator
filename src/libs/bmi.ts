import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'
import convert from 'convert'


export function useBMI() {

    const system = ref<'metric' | 'imperial'>('metric')
    const weightInKg = ref<number>(0)
    const heightInCm = ref<number>(0)
    const weightInLb = ref<number>(0)
    const heightInIn = ref<number>(0)

    const bmi = computed(() => {
        const { value: bmiValue, name: bmiCategory } = system.value == 'metric' ?
            calcBMI(weightInKg.value, convert(heightInCm.value,'cm').to('m')) :
            calcBMI(weightInLb.value, heightInIn.value, true)
        return { bmiValue, bmiCategory }
    })

    const idealWeightInKg = computed(() => ({
        min: getWeight(18.5, convert(heightInCm.value,'cm').to('m')),
        max: getWeight(24.9, convert(heightInCm.value,'cm').to('m'))
    }))
    const idealWeightInLb = computed(() => ({
        min: convert(getWeight(18.5, convert(heightInIn.value,'in').to('m')),'kg').to('lb'),
        max: convert(getWeight(24.9, convert(heightInIn.value,'in').to('m')),'kg').to('lb')
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
