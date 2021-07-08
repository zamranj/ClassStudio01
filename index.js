//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
  constructor(name, mass, scores){
    this.name = name;
    this.mass = mass;
    this.scores = scores;
  }
  addScore(score){
    this.scores.push(score);
  }
  average(){
    let total = 0;
    for(let i=0; i<this.scores.length; i++){
      total += this.scores[i];
    } 
    return Math.round(total/this.scores.length*10)/10
  }

  status(){
    if(this.average() >= 90 ){
      return `${this.name} earned an average test score of ${this.average()}% and has a status of Accepted.`;
    }else if(this.average()< 90 && this.average() > 80){
      return `${this.name} earned an average test score of ${this.average()}% and has a status of Reserve.`;
    }else if(this.average() < 80 && this.average() > 70){
      return `${this.name} earned an average test score of ${this.average()}% and has a status of Probationary.`;
    }else{
      return `${this.name} earned an average test score of ${this.average()}% and has a status of Rejected.`;
    }
  }
}

let bubba = new CrewCandidate("Bubba Bear", 135, [88.85, 90]);
let merry = new CrewCandidate("Merry Maltese", 1.5, [93.88, 97]);
let glad = new CrewCandidate("Glad Gator", 225, [75.78, 62]);

console.log(bubba);
console.log(merry);
console.log(glad);



//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
bubba.addScore(83);
console.log();
console.log(bubba.scores);
console.log();



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

console.log(merry);
console.log();
console.log(merry.name+ "has an average score of "+merry.average())
console.log();
console.log(glad);
console.log();
console.log(glad.scores);
console.log();
console.log(glad.average());
console.log();
console.log(glad.status());
console.log();
for(let i = 0; i < 9; i++){
   glad.addScore(97.98)
}
console.log(glad.scores);
console.log(glad.average());
console.log(glad.status());

