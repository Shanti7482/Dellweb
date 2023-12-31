import React, { useEffect ,useState} from 'react';

const Statewise =()=>{
     const [data ,setData] =useState([]);

    const getCovidData = async () =>
    {
        const res =await fetch('https://data.covid19india.org/data.json')
        const actualData = await res.json();

        console.log(actualData.statewise);
        setData(actualData.statewise);
    }


    useEffect(()=>{
        getCovidData();

    },[]);

    return (
        <>
            <div className='container-fluid mt-5'>
                <div className='main-heading'>
                <h1 className='mb-5 text-center'><span className='font-weight-bold'>INDIA</span>COVID-19 Dashboard</h1>
                </div>
                <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead>
                        <tr >
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>

                        </tr>
                    </thead>
                    <tbody>
        
                    {
                        data.map((currentValue,index) =>{
                            return (
                            <tr key={index}>
                                <td>{currentValue.state}</td>
                                <td>{currentValue.confirmed}</td>
                                <td>{currentValue.recovered}</td>
                                <td>{currentValue.deaths}</td>
                                <td>{currentValue.active}e</td>
                                <td>{currentValue.lastupdatedtime}</td>
                            </tr>
                            )

                        })
                    }
                    </tbody>

                </table>

                </div>
            </div>
        </>
    )
}


export default Statewise;