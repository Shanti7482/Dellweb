const tabLinks = document.getElementsByClassName('tab-links');
const tabContants = document.getElementsByClassName('tab-contants');
        // console.log(tabLinks)
        // console.log(tabContants)
const opentab = (tabname) => {
    for(tabLink of tabLinks)
    {
        tabLink.classList.remove('active-link')
    }

    for(tabContant of tabContants)
    {
        tabContant.classList.remove('active-tab')
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add('active-tab')
        }