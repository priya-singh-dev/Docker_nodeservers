
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  var jsonString = {
    "name": "Österr. Bundesliga 2017/18",
    "rounds": [
      {
        "name": "Runde 1",
        "matches": [
          {
            "date": "2017-07-22",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": 2,
            "score2": 2
          },
          {
            "date": "2017-07-22",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": 0,
            "score2": 2
          },
          {
            "date": "2017-07-22",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": 3,
            "score2": 0
          },
          {
            "date": "2017-07-23",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": 3,
            "score2": 0
          },
          {
            "date": "2017-07-23",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": 3,
            "score2": 2
          }
        ]
      },
      {
        "name": "Runde 2",
        "matches": [
          {
            "date": "2017-07-29",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": 1,
            "score2": 1
          },
          {
            "date": "2017-07-29",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": 1,
            "score2": 4
          },
          {
            "date": "2017-07-29",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": 1,
            "score2": 0
          },
          {
            "date": "2017-07-30",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": 2,
            "score2": 3
          },
          {
            "date": "2017-07-30",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": 4,
            "score2": 1
          }
        ]
      },
      {
        "name": "Runde 3",
        "matches": [
          {
            "date": "2017-08-05",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-05",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-06",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-06",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-06",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 4",
        "matches": [
          {
            "date": "2017-08-12",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-12",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-12",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-12",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-13",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 5",
        "matches": [
          {
            "date": "2017-08-19",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-19",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-19",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-19",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-20",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 6",
        "matches": [
          {
            "date": "2017-08-26",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-26",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-26",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-26",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-08-26",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      
      {
        "name": "Runde 16",
        "matches": [
          {
            "date": "2017-11-25",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-25",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-25",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-25",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-25",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 17",
        "matches": [
          {
            "date": "2017-11-28",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-28",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-28",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-28",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-11-28",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 18",
        "matches": [
          {
            "date": "2017-12-02",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-02",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-02",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-02",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-02",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 19",
        "matches": [
          {
            "date": "2017-12-09",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-09",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-09",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-09",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-09",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 20",
        "matches": [
          {
            "date": "2017-12-16",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-16",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-16",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-16",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2017-12-16",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 21",
        "matches": [
          {
            "date": "2018-02-03",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-03",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-03",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-03",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-03",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 22",
        "matches": [
          {
            "date": "2018-02-10",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-10",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-10",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-10",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-10",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 23",
        "matches": [
          {
            "date": "2018-02-17",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-17",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-17",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-17",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-17",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 24",
        "matches": [
          {
            "date": "2018-02-24",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-24",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-24",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-24",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-02-24",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 25",
        "matches": [
          {
            "date": "2018-03-03",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-03",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-03",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-03",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-03",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 26",
        "matches": [
          {
            "date": "2018-03-10",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-10",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-10",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-10",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-10",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 27",
        "matches": [
          {
            "date": "2018-03-17",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-17",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-17",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-17",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-17",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 28",
        "matches": [
          {
            "date": "2018-03-31",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-31",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-31",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-31",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-03-31",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 29",
        "matches": [
          {
            "date": "2018-04-07",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-07",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-07",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-07",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-07",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 30",
        "matches": [
          {
            "date": "2018-04-14",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-14",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-14",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-14",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-14",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 31",
        "matches": [
          {
            "date": "2018-04-21",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-21",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-21",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-21",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-21",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 32",
        "matches": [
          {
            "date": "2018-04-28",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-28",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-28",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-28",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-04-28",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 33",
        "matches": [
          {
            "date": "2018-05-05",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-05",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-05",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-05",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-05",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 34",
        "matches": [
          {
            "date": "2018-05-08",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-08",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-08",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-08",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-08",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 35",
        "matches": [
          {
            "date": "2018-05-13",
            "team1": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "team2": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-13",
            "team1": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "team2": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-13",
            "team1": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "team2": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-13",
            "team1": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "team2": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-13",
            "team1": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "team2": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "score1": null,
            "score2": null
          }
        ]
      },
      {
        "name": "Runde 36",
        "matches": [
          {
            "date": "2018-05-20",
            "team1": {
              "key": "austria",
              "name": "FK Austria Wien",
              "code": "AUS"
            },
            "team2": {
              "key": "salzburg",
              "name": "FC RB Salzburg",
              "code": "RBS"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-20",
            "team1": {
              "key": "altach",
              "name": "SCR Altach",
              "code": "ALT"
            },
            "team2": {
              "key": "sturm",
              "name": "SK Sturm Graz",
              "code": "STU"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-20",
            "team1": {
              "key": "wac",
              "name": "Wolfsberger AC",
              "code": "WAC"
            },
            "team2": {
              "key": "rapid",
              "name": "SK Rapid Wien",
              "code": "RAP"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-20",
            "team1": {
              "key": "admira",
              "name": "FC Admira Wacker",
              "code": "ADM"
            },
            "team2": {
              "key": "stpoelten",
              "name": "SKN St. Pölten",
              "code": "SKN"
            },
            "score1": null,
            "score2": null
          },
          {
            "date": "2018-05-20",
            "team1": {
              "key": "mattersburg",
              "name": "SV Mattersburg",
              "code": "MAT"
            },
            "team2": {
              "key": "lask",
              "name": "LASK Linz",
              "code": "ASK"
            },
            "score1": null,
            "score2": null
          }
        ]
      }
    ]
  }
  //var jsonObj = JSON.parse(jsonString);

  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(jsonString));
  //console.log(jsonObj);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//"test": "PORT-3000 node ./server1.js"
