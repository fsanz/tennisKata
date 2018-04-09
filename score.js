angular.module('scoreApp', [])
    .controller('ScoreController', function () {
        var score = this;
        score.players = [
            { name: 'Player 1', score: 0, disabled: false },
            { name: 'Player 2', score: 0, disabled: false }];


        score.addPoint = function addPoint(player) {
            player.score += 1;
            if ((score.players[0].score == score.players[1].score) && score.players[0].score == 3) score.status = "Deuce";
            else if ((score.players[0].score >= 4) || (score.players[1].score >= 4)) {
                var diff = score.players[0].score - score.players[1].score;
                if (diff >= 2) wins(1);
                if (diff == 1) advantage(1);
                if (diff == 0) scoreDeuce();
                if (diff == -1) advantage(2);
                if (diff <= -2) wins(2);
            }
        }

        score.reset = function () {
            score.players = [
                { name: 'Player 1', score: 0, disabled: false },
                { name: 'Player 2', score: 0, disabled: false }];
            score.status = " ";
        };

        function resetDeuce() {
            score.players = [
                { name: 'Player 1', score: 3, disabled: false },
                { name: 'Player 2', score: 3, disabled: false }];
        };

        function scoreDeuce() {
            score.status = "Deuce";
            resetDeuce();
        }

        function advantage(numPlayer) {
            score.status = "Advantage for Player " + numPlayer;
        }

        function wins(numPlayer) {
            score.status = "Player " + numPlayer + " wins";
        }

    });