import { format } from 'date-fns'
import { translate } from '../util/Common'
import airports from './airports.json'
import flights from './flights.json'

export const getLocations = (text: string) => {
    try {
        let filter = text.toLocaleLowerCase()

        return airports.filter((element: any) => {
            const { city, phonetic1, phonetic2, phonetic3, phonetic4 } = element

            const attempt0 = city.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            const attempt1 = phonetic1.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            const attempt2 = phonetic2.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            const attempt3 = phonetic3.toLowerCase().indexOf(filter.toLowerCase()) !== -1
            const attempt4 = phonetic4.toLowerCase().indexOf(filter.toLowerCase()) !== -1

            if(attempt0 || attempt1 || attempt2 || attempt3 || attempt4){
                return element
            }else{
                return null
            }
        })
    } catch (error: any) {
        alert(error)
    }
}

export const getFlights = (startDates: Date[], endDates: Date[], origin: string, destination: string) => {
    try {
        let filterOrigin = origin.toLocaleLowerCase()
        let filterDestination = destination.toLocaleLowerCase()

        let destinationData = flights.find(x => x.origin.toLowerCase() === filterOrigin && x.destination.toLowerCase() === filterDestination)

        if(!destinationData){
            alert(translate('msgNoRecordCityOriginAndDestination'))
            return []
        }

        let dates = destinationData.dates.find(x => {
            const { start, end } = x

            let dateStart1 = startDates.length >= 1 ? format(startDates[0], 'dd/MM/yyyy') === start : false
            let dateStart2 = startDates.length >= 2 ? format(startDates[1], 'dd/MM/yyyy') === start : false
            let dateStart3 = startDates.length >= 3 ? format(startDates[2], 'dd/MM/yyyy') === start : false
            let dateStart4 = startDates.length >= 4 ? format(startDates[3], 'dd/MM/yyyy') === start : false

            let dateEnd1 = endDates.length >= 1 ? format(endDates[0], 'dd/MM/yyyy') === end : false
            let dateEnd2 = endDates.length >= 2 ? format(endDates[1], 'dd/MM/yyyy') === end : false
            let dateEnd3 = endDates.length >= 3 ? format(endDates[2], 'dd/MM/yyyy') === end : false
            let dateEnd4 = endDates.length >= 4 ? format(endDates[3], 'dd/MM/yyyy') === end : false

            return (dateStart1 || dateStart2 || dateStart3 || dateStart4) && (dateEnd1 || dateEnd2 || dateEnd3 || dateEnd4)
        })

        if(!dates){
            alert(translate('msgNoDataOriginAndDestination'))
            return []
        }

        return dates.flights || []
    } catch (error: any) {
        alert(error)
    }
}