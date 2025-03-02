// Function that takes one parameter and returns a greeting
function introduction(name) {
    return `Hi, my name is ${name}.`;
}

// Function that takes two parameters and returns a greeting with a programming language
function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Function that takes two parameters, with the second parameter having a default value
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Export the functions for testing in Node.js
if (typeof module !== "undefined" && module.exports) {
    module.exports = { 
        introduction, 
        introductionWithLanguage, 
        introductionWithLanguageOptional 
    };
}
