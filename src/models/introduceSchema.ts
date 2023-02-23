import * as yup from 'yup'
import { translate } from '../util/Common'

export const introduceDefault = {
    name: ''
}

export const introduceSchema = yup.object().shape({
    name: yup
      .string()
      .required(translate('nameIsRequired'))
      .max(35, translate('nameMax35'))
})

export interface IIntroduce {
    name: string
}