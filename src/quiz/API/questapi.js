async function getQuestions() {
    try {
        const response = await fetch("https://quiz-f2atcpfzdccddbac.brazilsouth-01.azurewebsites.net/");
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}


export default getQuestions;