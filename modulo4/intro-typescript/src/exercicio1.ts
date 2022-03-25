function triangleType(a: string, b: string, c: string): string {
    if (a == b && b == c) {
        return "Equilateral";
    }
    else if (a == b || b == c || a == c) {
        return "Isosceles";
    }
    else {
        return "Scalene";
    }
}

triangleType("15", "10", "20");