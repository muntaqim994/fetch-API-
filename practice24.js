fetch("https://randomuser.me/api/?results=5")
    .then((rawdata) => rawdata.json())
    .then((rawdata) => console.log(rawdata.results))
    .catch((err) => {
        console.log(err);

    })