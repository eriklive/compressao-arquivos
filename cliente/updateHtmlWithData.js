const updateHtmlWithData = (originalAsString, encodedAsString) => {
    const htmlTableBody = document.getElementById("tbody");

    const row = document.createElement("tr");

    const collumOne = document.createElement("td");
    const collumTwo = document.createElement("td");
    const collumThree = document.createElement("td");
    const collumFour = document.createElement("td");

    const txtOne = document.createTextNode(originalAsString.length / 1000);
    const txtTwo = document.createTextNode(encodedAsString.length / 1000);
    const txtThree = document.createTextNode((originalAsString.length - encodedAsString.length) / 1000);
    const txtFour = document.createTextNode(((originalAsString.length - encodedAsString.length) * 100 / (originalAsString.length)).toFixed(2));

    collumOne.appendChild(txtOne);
    collumTwo.appendChild(txtTwo);
    collumThree.appendChild(txtThree);
    collumFour.appendChild(txtFour);

    row.appendChild(collumOne);
    row.appendChild(collumTwo);
    row.appendChild(collumThree);
    row.appendChild(collumFour);
    htmlTableBody.appendChild(row)
}