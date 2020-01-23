import {reactive, computed} from '@vue/composition-api'

export function useForm(props) {
  const form = reactive({
    title: '',
    description: ''
  })

  const submit = () => {
    const recipe = {
      title: form.title.trim(),
      description: form.description.trim(),
      id: Date.now().toString()
    }

    form.title = form.description = ''

    props.onAdd(recipe)
  }

  const valid = computed(() => {
    return form.title.trim() && form.description.trim()
  })

  return {form, submit, valid}
}
