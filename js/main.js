"use strict";
exports.__esModule = true;
var batsman_1 = require("./batsman");
var scorer_1 = require("./scorer");
var scorer = new scorer_1.Scorer();
var batsman1 = new batsman_1.Batsman('K L Rahul');
var batsman2 = new batsman_1.Batsman('Rohit Sharma');
scorer.addBatsman(batsman1);
scorer.addBatsman(batsman2);
scorer.calculateScore([1, 2, 0, 0, 4, 1, 6, 2, 1, 3]);
scorer.printScore();
