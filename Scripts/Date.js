
const x = (BirthdateYear,BirthdateMonth,BirthdateDate)=>{
    const now_time = new Date()

    const StringBirthDayMonth = BirthdateMonth < 10 ? "0"+BirthdateMonth.toString() : BirthdateMonth.toString()
    const StringBirthDayDate = BirthdateDate < 10 ? "0"+BirthdateDate.toString() : BirthdateDate.toString()

    const target_time = new Date(BirthdateYear.toString()+"-"+StringBirthDayMonth+"-"+StringBirthDayDate)

    console.log((now_time - target_time) / (1000*60*60*24*365))
    return 20 < (now_time - target_time) / (1000 * 60 * 60 * 24 * 365);

}

x(2001,10,28)

