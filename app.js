var profileDataArgs = process.argv.slice(2, process.argv.lenght);
console.log(profileDataArgs);

const printProfileData = profileDataArgs => {
    profileDataArgs.forEach((profileItem) => {
        console.log(profileItem)
    });
};

printProfileData(profileDataArgs);
