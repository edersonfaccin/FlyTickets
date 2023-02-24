import airports from './airports.json'

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