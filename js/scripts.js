// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function (word) {
        if (!Number(word)) {
            wordCount++;
        }
    });
    return wordCount;
}

function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (element.toUpperCase().includes(word.toUpperCase())) {
            wordCount++
        }
    });
    return wordCount;
}

function censor(text) {
    const textArray = text.split(" ");
    let cleanText = ""
    textArray.forEach(function(element) {
        if (element.toUpperCase().includes("ZOINKS") || element.toUpperCase().includes("MUPPETEER") || element.toUpperCase().includes("BIFFARONI") || element.toUpperCase().includes("LOOPDALOOP")) {
            const beep = "*"
            cleanText += element.charAt(0) + beep.repeat(element.length - 1) + " ";
        } else cleanText += element + " ";
    });
    return cleanText.trim;
}