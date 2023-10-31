const temp = document.querySelector('.temp')
const icon = document.querySelector('.icon')
const input = document.querySelector('.card-input')


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f8e3b14e5amsh7314f420893f03ap1e904bjsnced68534952c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const fetchData = async () => {
    try {
        const response = await fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${input.value}`, options);
        const result = await response.json();
        return result.temp;
    } catch (error) {
        console.error(error);
    }
}

const IsKeyEnter = async (e) =>{
    if(e.key === "Enter"){
        icon.classList.remove(...icon.classList);
        const resp = await fetchData();
        if(resp){
            if(resp <= 20){
                icon.classList.add(...['fa-regular','fa-snowflake', 'active']);
            }else if(resp > 20 && resp <= 25){
                icon.classList.add(...['fa-solid','fa-cloud-sun', 'active']);
            }else{
                icon.classList.add(...['fa-solid','fa-sun', 'active']);
            }
            temp.innerText = `${resp}°C`;
        }else{
            temp.innerText = `City not allowed`;
        }
    }
}

input.addEventListener("keypress", IsKeyEnter)