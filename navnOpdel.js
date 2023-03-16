"use-strict";

const fullName = "Lise Freja Jensen Petculescu";

const spaceFirst = fullName.indexOf(" ") + 1;
console.log(spaceFirst);

const spaceEnd = fullName.lastIndexOf(" ") + 1;
console.log(spaceEnd);

const firstName = fullName.substring(0, spaceFirst - 1);
console.log(`#${firstName}£`);

const middleName = fullName.substring(spaceFirst, spaceEnd - 1);
console.log(`#${middleName}#`);

const lastName = fullName.substring(spaceEnd);
console.log(`#${lastName}#`);

console.log(`Firstname: ${firstName}`);
console.log(`Middlename: ${middleName}`);
console.log(`Lastname: ${lastName}`);
