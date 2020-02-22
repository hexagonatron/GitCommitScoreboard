var people = [
    ["Ben", "hexagonatron"],
    ["Trent", "trentstollery"],
    ["Linus Torvalds", "torvalds"]
];

getContributions = (person) => {
    var url = `https://api.github.com/users/${person[1]}/repos`

    console.log(url);

    const fetchUrl = fetch(url, {mode: 'no-cors'});

    console.log(fetchUrl);

    fetchUrl.then( response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });
}

people.forEach(person => {
    var contribs = getContributions(person);
});