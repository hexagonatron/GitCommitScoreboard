var people = [
    ["Ben", "hexagonatron"],
    ["Trent", "trentstollery"],
    ["Linus Torvalds", "torvalds"]
];

getContributions = (person) => {
    var url = `https://www.github.com/${person[1]}`

    const fetchUrl = fetch(url);

    fetchUrl.then( response => {
        console.log(response);
    });
}

people.forEach(person => {
    var contribs = getContributions(person);
})

