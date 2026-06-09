fetch("../fiche-projets.json")
  .then((response) => response.json())
  .then((data) => {
    // Create a table to store random indexes
    const randomIndexes = [];

    // Get 3 random indexes
    while (randomIndexes.length < 3) {
      const index = Math.floor(Math.random() * data.length);
      if (!randomIndexes.includes(index)) {
        randomIndexes.push(index);
      }
    }
    // Create an array to get indexes of projects
    const randomProjects = randomIndexes.map((index) => data[index]);
    console.log(randomIndexes);
  });
