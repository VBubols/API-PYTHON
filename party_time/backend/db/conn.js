const mongoose = require("mongoose")

async function main() {
    try {
        mongoose.set("strictQuery", true);

        await mongoose.connect(
            "mongodb+srv://vitorbubols:dGNgoyMI3Il0Gvqx@cluster0.kpwhm7f.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Conectado no banco")
    }   catch (error) {
        console.log(`Erro: ${error}`);
    }
}

module.exports = main;