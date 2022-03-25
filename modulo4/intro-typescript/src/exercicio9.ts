const labenuSignUp = (age: number, highSchool: boolean, freeHours: number, course: string): boolean => {
    if (age >= 18 && highSchool && (freeHours >= 40 && course === "integral" || freeHours >= 20 && course === "noturno")) {
        return true
    } else {
        return false
    }
}

console.log(labenuSignUp(18, true, 40, "integral"))