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
            calcBMI(weightInLb.value, length(heightInIn.value), true)
        return { bmiValue, bmiCategory }
    })

    const idealWeightInKg = computed(() => 20 * Math.pow(length(heightInCm.value).from('cm').to('m').value, 2))
    const idealWeightInLb = computed(() => mass(20 * Math.pow(length(heightInIn.value).from('in').to('m').value, 2)).from('kg').to('lb').value)

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
