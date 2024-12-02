document.addEventListener('DOMContentLoaded', () => {
    const lookupButton = document.getElementById('lookup');
    const lookupCitiesButton = document.getElementById('lookup-cities');
    const resultDiv = document.getElementById('result');

    const fetchData = (lookup) => {
        const country = document.getElementById('country').value;
        fetch(`world.php?country=${country}&lookup=${lookup}`)
            .then(response => response.text())
            .then(data => {
                resultDiv.innerHTML = data;
            })
            .catch(error => console.error('Error:', error));
    };

    lookupButton.addEventListener('click', () => fetchData('country'));
    lookupCitiesButton.addEventListener('click', () => fetchData('cities'));
});
