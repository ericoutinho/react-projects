import {useState} from "react"

const useCountdown = (date) => {

    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const countDown = () => {

        const countDate = new Date(date).getTime()
        const now = new Date().getTime()
        const diff = countDate - now

        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const days = hours * 24

        const dayNumber = Math.floor(diff / days)
        const hourNumber = Math.floor((diff % days) / hours)
        const minuteNumber = Math.floor((diff % hours) / minutes)
        const secondNumber = Math.floor((diff % minutes) / seconds)

        setDay(dayNumber)
        setHour(hourNumber)
        setMinute(minuteNumber)
        setSecond(secondNumber)

    }

    setInterval(countDown, 1000)

    return [day, hour, minute, second]

}

export default useCountdown