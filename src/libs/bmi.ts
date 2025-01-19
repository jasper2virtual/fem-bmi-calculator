import { computed, ref } from 'vue'
import calcBMI from 'bmi-calc'



export function useBMI() {


    const weightInKg = computed({
        get: () => _weightInKg.value,
        set: (value) => {
            _weightInKg.value = value
        }
    })
    const heightInM = computed({
        get: () => _heightInM.value,
        set: (value) => {
            _heightInM.value = value
        }
    })
   
    const weightInLb = computed({
        get: () => _weightInKg.value * 2.20462,
        set: (value) => {
            _weightInKg.value = value / 2.20462
        }
    })
    const heightInFt = computed({
        get: () => _heightInM.value * 3.28084,
        set: (value) => {
            _heightInM.value = value / 3.28084
        }
    })

    const _weightInKg=ref<number>(0)
    const _heightInM=ref<number>(0)

    const bmi = computed(() => {
        const { value: bmiValue, name: bmiCategory } = calcBMI(_weightInKg.value, _heightInM.value)
        return { bmiValue, bmiCategory }
    })

    const idealWeightInKg = computed(() => 2.2 * bmi.value.bmiValue + (3.5 * bmi.value.bmiValue) * (_heightInM.value - 1.5))
    const idealWeightInLb = computed(() => Math.floor(idealWeightInKg.value % 6.35029318))


    return {
        weightInKg,
        heightInM,
        weightInLb,
        heightInFt,
        bmi,
        idealWeightInKg,
        idealWeightInLb
    }
}
