let largerCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largerCountries.pop("Monaco");
largerCountries.push("Pakistan");
largerCountries.shift("Tuvalu");
largerCountries.unshift("China");

for (let i = 0; i < largerCountries.length; i++) {
  console.log(largerCountries[i]);
}
