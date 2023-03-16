"use-strict";

function writeNameParts(fullName) {
  //   const fullName = "LiSe Freja Jensen PEtcUleScu";

  const spaceFirst = fullName.indexOf(" ") + 1;
  console.log(spaceFirst);

  const spaceEnd = fullName.lastIndexOf(" ") + 1;
  console.log(spaceEnd);

  const firstName = capitalized(fullName.substring(0, spaceFirst - 1));
  console.log(`#${firstName}£`);

  let middleName = capitalized(fullName.substring(spaceFirst, spaceEnd - 1));
  console.log(`#${middleName}#`);

  const lastName = capitalized(fullName.substring(spaceEnd));
  console.log(`#${lastName}#`);

  if (middleName === " ") {
    middleName = undefined;
  }

  console.log(`Firstname: ${firstName}`);
  console.log(`Middlename: ${middleName}`);
  console.log(`Lastname: ${lastName}`);
  console.log({ firstName, middleName, lastName });

  return { firstName, middleName, lastName };
}

function capitalized(myName) {
  const capFirst = myName.substring(0, 1).toUpperCase();
  console.log(capFirst);

  const smallAfter = myName.substring(1).toLowerCase();
  console.log(smallAfter);

  const newName = `${capFirst}${smallAfter}`;
  console.log(newName);

  return newName;
}

writeNameParts("LiSe FReJA JeNsen PeTcUlescu");

// stack overflow fejl - just for fun
// function a() {
//   console.log("1");
//   a();
//   console.log("2");
// }
// a();
