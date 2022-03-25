
class DateFormat {

    formatDate(newDate) {
        const months = {
            0: 'Jan',
            1: 'Feb',
            2: 'March',
            3: 'April',
            4: 'May',
            5: 'June',
            6: 'July',
            7: 'Aug',
            8: 'Sept',
            9: 'Oct',
            10: 'Nov',
            11: 'Dec',
        }
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        let d = String(newDate).split('T')
        d = new Date(d[0])
        const year = d.getFullYear()
        const date = d.getDate()
        const monthIndex = d.getMonth()
        const monthName = months[monthIndex]
        const dayName = days[d.getDay()] // Thu
        const formatted = `${dayName}, ${date} ${monthName} ${year}`
        return formatted.toString()
    }
    daysLeft(d1, d2) {
        // To set two dates to two variables
        var date1 = new Date(d1);
        var date2 = new Date(d2);

        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days.toFixed()
    }

    email_validate(email) {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (reg.test(email) === false) {
            return (false);
        }
        else
            return true;
    }

    password_validate(passowrd) {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#\$%\^&\*])(?=.{6,})");
        if (strongRegex.test(passowrd))
            return true;
        return false;
    }
}




export default new DateFormat()