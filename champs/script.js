document.addEventListener('DOMContentLoaded', function () {
    fetch('champs.json')
        .then(response => response.json())
        .then(data => {
            const championsContainer = document.getElementById('champions');

            for (const category in data) {
                const champion = data[category];
                const championList = document.createElement('ul');
                championList.className = 'list-group mt-3';

                if (typeof champion === 'object') {
                    for (const name in champion) {
                        const title = champion[name];
                        const listItem = document.createElement('li');
                        listItem.className = 'list-group-item';
                        listItem.innerHTML = `<span class="badge text-bg-primary">BSW</span> ${name}: ${title}`;
                        championList.appendChild(listItem);
                    }
                } else {
                    const listItem = document.createElement('li');
                    listItem.className = 'list-group-item';
                    listItem.innerHTML = `<span class="badge text-bg-primary">BSW</span> ${category}: ${champion}`;
                    championList.appendChild(listItem);
                }

                championsContainer.appendChild(championList);
            }
        })
        .catch(error => console.error(error));
});
