const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

app.use(cors());

let rappers = {
    "21 savage": {
        age: 28,
        birthName: "Aziz Abdul Karim Jabbar",
        birthLocation: "London, England",
    },
    "chance the rapper": {
        age: 27,
        birthName: "Dikembe Mutombo",
        birthLocation: "Little Rock, Arcansas",
    },
    dylan: {
        age: 33,
        birthName: "dylan",
        birthLocation: "dylan",
    },
};

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/api/rappers/:rapperName", (request, response) => {
    const rapName = request.params.rapperName.toLocaleLowerCase();
    console.log(rapName);
    if (rappers[rapName]) {
        response.json(rappers[rapName]);
    } else response.json(rappers['dylan']);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
