async function getQuestions() {
    try {
        const response = await fetch("http://localhost:3000/");
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


export default getQuestions;


//https://quiz-f2atcpfzdccddbac.brazilsouth-01.azurewebsites.net/