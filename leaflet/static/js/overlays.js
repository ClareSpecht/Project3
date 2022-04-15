const stateList = []
for (let i = 0; i < parksHapiness.features.length; i++) {

    state = parksHapiness.features[i].properties
    stateList.push(state)
}

const nameList = []

Array.from(stateList).forEach((name) => nameList.push(name.State)
);

const crimeList = []

Array.from(stateList).forEach((name) => crimeList.push(name.Crime)
);

const univList = []

Array.from(stateList).forEach((name) => univList.push(name.col_rank)
);

const parkList = []

Array.from(stateList).forEach((name) => parkList.push(name.park_rank)
);

const happyList = []

Array.from(stateList).forEach((name) => happyList.push(name.Happiness_Rank)
);


const data = {
    labels: nameList,
    datasets: [{
    label: 'Parks',
    backgroundColor: 'rgb(255, 99, 132)',
    borderColor: 'rgb(255, 99, 132)',
    data: parkList
}, 
{
    label: 'Ranked Universities',
    backgroundColor: 'rgb(81,66,245)',
    borderColor: 'rgb(81,66,245)',
    data: univList
}]
};

const config = {
    type: 'bar',
    data: data,
    options: {spanGaps: true,
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart').getContext('2d'),
    config
);
