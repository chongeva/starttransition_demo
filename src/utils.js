export const generateDummyResults = (count: number) => {
  var firstWordChoices = ['Berg', 'Alt', 'Neu', 'Grün', 'Rote', 'Schöne', 'Rosen', 'Lichten', 'Breite', 'Haupt'];
  var secondWordChoices = ['wald', 'mann', 'stern', 'platz', 'tor', 'see', 'meer', 'bach', 'dorf', 'brücke'];
  var thirdWordChoices = ['straße', 'allee'];

  const rows = Array.from(Array(count), (_, index) => {
    var streetNamePart1 = firstWordChoices[Math.floor(Math.random() * firstWordChoices.length)];
    var streetNamePart2 = secondWordChoices[Math.floor(Math.random() * secondWordChoices.length)];
    var streetNamePart3 = thirdWordChoices[Math.floor(Math.random() * thirdWordChoices.length)];
    var houseNumber = Math.floor(Math.random() * 100);
    var address = `${streetNamePart1}${streetNamePart2}${streetNamePart3} ${houseNumber}`;
    return address;
  });
  return rows;
};
