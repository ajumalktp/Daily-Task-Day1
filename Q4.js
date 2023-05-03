function camelize(input){

        return input.replace(/[\s_-](\w)/g, (_, letter) => letter.toUpperCase());
}


console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));
