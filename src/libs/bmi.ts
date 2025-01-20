import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'
import { length, mass } from 'units-converter'



export function useBMI() {


    const weightInKg = computed({
        get: () => _weightInKg.value,
        set: (value) => {
            _weightInKg.value = value
        }
    })
    const heightInCm = computed({
        get: () => _heightInCm.value,
        set: (value) => {
            _heightInCm.value = value
        }
    })
   
    const weightInLb = computed({
        get: () => mass(_weightInKg.value).from('kg').to('lb').value,
        set: (value) => {
            _weightInKg.value = mass(value).from('lb').to('kg').value
        }
    })
    const heightInIn = computed({
        get: () => length(_heightInCm.value).from('cm').to('in').value,
        set: (value) => {
            _heightInCm.value = length(value).from('in').to('cm').value
        }
    })

    const _weightInKg=ref<number>(0)
    const _heightInCm = ref<number>(0)

    const bmi = computed(() => {
        const { value: bmiValue, name: bmiCategory } = calcBMI(_weightInKg.value, length(_heightInCm.value).from('cm').to('m').value)
        return { bmiValue, bmiCategory }
    })

    const idealWeightInKg = computed(() => 20 * _heightInCm.value * _heightInCm.value)
    const idealWeightInLb = computed(() => mass(idealWeightInKg.value).from('kg').to('lb').value)


    return {
        weightInKg,
        heightInCm,
        weightInLb,
        heightInIn,
        bmi,
        idealWeightInKg,
        idealWeightInLb
    }
}
