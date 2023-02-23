import * as yup from 'yup'
import { translate } from '../util/Common'

export const introduceDefault = {
    name: ''
}

export const barberSchema = yup.object().shape({
    name: yup
      .string()
      .required(translate('nameIsRequired'))
      .max(35, translate('nameMax35'))
})