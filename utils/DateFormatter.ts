export default (initialDate: Date | String) => {

    let date: Date;
    if (typeof initialDate === 'string') {
        date = new Date(initialDate)
    } else {
        date = initialDate as Date
    }

    return {
        getFormattedDay(): String {

            const day = date.getDate().toString()

            return `${day.length === 1 ? '0' : ''}${day}`
        },
        getFormattedMonth(monthSum = true): String {
            const month = (date.getMonth() + Number(monthSum)).toString()

            return `${month.length === 1 ? '0' : ''}${month}`
        },
        getFormattedYear(): String {
            return date.getFullYear().toString()
        },
        getFormattedDate(monthSum = true): String {
            return `${
                this.getFormattedDay()
            }/${
                this.getFormattedMonth(monthSum)
            }/${
                this.getFormattedYear()
            }`
        },
        getFormattedDayAndMonth(monthSum = true): String {
            return `${
                this.getFormattedDay()
            }/${
                this.getFormattedMonth(monthSum)
            }`
        }
    }
}