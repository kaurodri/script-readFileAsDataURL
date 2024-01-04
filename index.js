const fs = require('fs');
const path = require('path');

function base(filePath) {
    try {
        const data = fs.readFileSync(filePath);
        const base64Data = data.toString('base64');
        const mimeType = 'application/pdf';
        const dataURL = `data:${mimeType};base64,${base64Data}`;
        return dataURL;
    } catch (error) {
        console.error("Erro ao ler o arquivo:", error);
        return null;
    }
}

function readFileAsDataURL(file) {
    const filePath = path.join(__dirname, file);
    const dataURL = base(filePath);
    return dataURL;
}

module.exports = readFileAsDataURL;