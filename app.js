const profileDataArgs = process.argv.slice(2);

const printProfileData = profileDataArr => {
    for (let i = 0; i < profileDataArr.lenth; i++) {
        console.log(profileDataArr);
    }

    console.log("===============");

    // Is the same as this ...
    profileDataArr.forEach(profileItem => console.log(profileItem))
  };
  
  printProfileData(profileDataArgs);