const year = document.getElementById('result_year')
const month = document.getElementById('result_month')
const days = document.getElementById('result_day')

const calculateAge = ()=>{
    const dob =new Date(document.getElementById("dob").value)//user input
    const now = new Date()
    const ageInms = now-dob;
    const ageInYear = ageInms/(1000*60*60*24*365)
    const ageInMonths = ageInYear/12;
    const ageInDays = ageInms/(1000*60*60*24)

    console.log(ageInms)
    console.log(ageInYear);
    console.log(ageInMonths);
    console.log(ageInDays);


    document.getElementById('disable').style.display = 'block'

    year.innerHTML = `You are ${ageInYear.toFixed(2)} years old`;
    month.innerHTML =`You are ${ageInMonths.toFixed(2)} Months old`;
    days.innerHTML = `You are ${ageInDays.toFixed(2)} days old `
}