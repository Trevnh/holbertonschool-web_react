interface MajorCredits {
    credits: number;
    brand: 'Major';
}

interface MinorCredits {
    credits: number;
    brand: 'Minor';   
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credits + subject2.credits;
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credits + subject2.credits;
}

//tests
const Math = { credits: 5 } as MajorCredits;
const English = { credits: 3 } as MajorCredits;
const Art = { credits: 2 } as MinorCredits;
const Sport = { credits: 1 } as MinorCredits;

console.log(sumMajorCredits(Math, English));
console.log(sumMinorCredits(Art, Sport));
