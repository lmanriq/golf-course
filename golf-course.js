class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }

  checkInGroup(group) {
    if (group.length < this.openings) {
      this.openings -= group.length;
      for (var i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
    }
  }

  recommendTees(golfer) {
    var difficulty;
    if (golfer.handicap <= 10) {
      difficulty = 'Difficult';
    } else if (golfer.handicap >= 15) {
      difficulty = 'Forward';
    } else {
      difficulty = 'Middle';
    }
    return `You should play from the ${difficulty} Tees.`;
  }
}

module.exports = GolfCourse;
