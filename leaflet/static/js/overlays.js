var stateList = []
for (let i = 0; i < parksHapiness.features.length; i++) {
    state = parksHapiness.features[i].properties
    stateList.push(state)  
}
console.log('stateListOG',stateList)
console.log('dc',stateList[8])

// stateList = stateList.splice(8,1);


console.log('no DC',stateList)


const nameList = []
Array.from(stateList).forEach((name) => nameList.push(name.State));

const crimeList = []
Array.from(stateList).forEach((name) => crimeList.push(name.crime_rank));

const univList = []
Array.from(stateList).forEach((name) => univList.push(name.col_rank));

const parkList = []
Array.from(stateList).forEach((name) => parkList.push(name.park_rank));

const happyList = []
Array.from(stateList).forEach((name) => happyList.push(name.inv_hap_rank));

const incomeList = []
Array.from(stateList).forEach((name) => incomeList.push(name.inc_rank));

const dogList =[]
let dogRanks = stateList.map(e => e['dog ownership']).sort((a,b) => a-b)
let dogRanked = stateList.map( e=> ({...e, dog_rank: (dogRanks.indexOf(e['dog ownership'])+1)}));
Array.from(dogRanked).forEach((name) => dogList.push(name.dog_rank)
);

const catList =[]
let catRanks = stateList.map(e => e['cat ownership']).sort((a,b) => a-b);
let catRanked = stateList.map( e=> ({...e, cat_rank: (catRanks.indexOf(e['cat ownership'])+1)}));
Array.from(catRanked).forEach((name) => catList.push(name.cat_rank)
);

const petsList =[]
let petRanks = stateList.map(e => e['pet ownership']).sort((a,b) => a-b)
let petRanked = stateList.map( e=> ({...e, pet_rank: (petRanks.indexOf(e['pet ownership'])+1)}));
Array.from(petRanked).forEach((name) => petsList.push(name.pet_rank)
);

console.log("petlist", petsList)

const data = {
    labels: nameList,
    datasets: [{
        label: 'Parks',
        backgroundColor: '#042b0b',
        borderColor: '#042b0b',
        data: parkList
    },
    {
        label: 'Ranked Universities',
        backgroundColor: '#fffc00',
        borderColor: '#fffc00',
        data: univList
    },
    {
        label: 'Violent Crime',
        backgroundColor: '#ff7200',
        borderColor: '#ff7200',
        data: crimeList
    },
    {
        label: 'Happiness',
        backgroundColor: '#191184',
        borderColor: '#191184',
        data: happyList
    },
    {
        label: 'Income',
        backgroundColor: '#00ff00',
        borderColor: '#00ff00',
        data: incomeList
    },
    {
        label: 'All Pets',
        backgroundColor: '#ff0018',
        borderColor: '#ff0018',
        data: petsList
    },
    {
        label: 'Cats',
        backgroundColor: '#fd03dd',
        borderColor: '#fd03dd',
        data: catList
    },
    {
        label: 'Dogs',
        backgroundColor: '#9603fd',
        borderColor: '#9603fd',
        data: dogList
    },

    ]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        spanGaps: true,
        // indexAxis: 'y',
        responsive: true,
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
