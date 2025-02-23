//  1. Constantele care stim ca nu se vor schimba niciodata in proiectul nostru putem sa le pastram cu 'const' iar denumirea lor poate fi scrisa uperCase
//  2. API Key-urile sau token-urile nu ar trebui sa stea intr-un fisier text - de ce - pentru ca nu este sigur. Aceste key-uri ar trebui sa stea pe un server - dar in cazul nostru cum api-ul de la OpenWeather este gratuit atunci e ok sa-l tinem asa
const API_KEY = "262f0fd84064e4f5bedb849edd9d34de";
// Construim link-urile (end-point - urile) servelor care vom face call-urile ca sa primim date despre vreme
function getCurrentWeatherEndpoint(city) {
    // Cand se foloseste ? dupa url inseamna ca avem de aface cu query params (query string) - asta inseamna ca API-ul va lua in considerare acei parametri pentru a ne intoarce data in functeie de ei
    // 1. q = este folosit pentru a identifica orasul
    //  2. lang - este folosit pentru a-i pune API-ul sa ne intoarca datele in limba romana
    //  3. units
    //  4. appid
return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
}
function getForecastEndpoint(city){
return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`
}

