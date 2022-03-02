function sides(literals, ...expressions) {
    const [a, p] = expressions;
    
    let answers = [];

    const s1 = (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;
    const s2 = (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;
    answers.push(s1, s2);

    return answers.sort()
}