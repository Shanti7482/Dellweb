const year1 = document.getElementById('result_year')
const month1 = document.getElementById('result_month')
const days = document.getElementById('result_day')

const calculateAge = ()=>{
    const userinput = document.getElementById("dob").value

    const dob =new Date(userinput)
    const now = new Date().getDate()
    const month_diif = Date.now() - dob.getTime();
    console.log(now)

    const convertInDateFor =new Date(month_diif)

    const year = convertInDateFor.getUTCFullYear();
    const month = convertInDateFor.getUTCMonth();
    const day = Math.abs(now-convertInDateFor.getUTCDay());

    const age =Math.abs(year - 1970)
    

    document.getElementById('disable').style.display = 'block'

    // document.getElementById('totalAge').innerHTML = age;

    year1.innerHTML = `You are ${age} years old`;
    month1.innerHTML =`You are ${month} Months old`;
    days.innerHTML = `You are ${day} days old `
}