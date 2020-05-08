try
{
    let fail=0;
    $.ajax("https://raw.githubusercontent.com/Bhpsngum/img-src/master/main.js")
    .done(function (data) {
        eval("function data(){"+data+"}");
    })
    .fail(() => {console.log(e);fail=1;});
    
    if (fail) throw "Fetching failed";
    
    let parsed = new data();
    
    function checkTicks(game)
    {
        return parsed.tick(game)
    }
    
    function checkEvents(event, game)
    {
        return parsed.event(event, game);
    }
    game.modding.tick = function(t) {
        var e;
        if (this.game.tick(t), e = Date.now(), checkTicks(this.game), null != this.context.tick && this.context.tick(this.game), e = Date.now() - e, this.max_tick_time = Math.max(this.max_tick_time, e), this.tick_time += e, this.tick_count += 1, this.tick_count >= 600) return this.terminal.echo("Tick CPU time: average " + Math.round(this.tick_time / this.tick_count) + " ms ; max " + Math.round(this.max_tick_time) + " ms"), this.terminal.echo("Data sent: " + Math.round(this.I1I0I.log_sent / this.tick_count * 60) + " bytes per second"), this.tick_count = 0, this.tick_time = 0, this.max_tick_time = 0, this.I1I0I.log_sent = 0
    }
    lOlO0.prototype.eventReceived = function(t) {
        var e, i, s, n, r;
        if (null != t.data) {
            null != t.data.ship && (r = this.modding.game.findShip(t.data.ship), t.data.ship = r), null != t.data.killer && (n = this.modding.game.findShip(t.data.killer), t.data.killer = n), null != t.data.alien && (e = this.modding.game.findAlien(t.data.alien), t.data.alien = e), null != t.data.asteroid && (i = this.modding.game.findAsteroid(t.data.asteroid), t.data.asteroid = i), null != t.data.collectible && (s = this.modding.game.findCollectible(t.data.collectible), t.data.collectible = s);
            try {
                checkEvents(t.data, this.modding.game), null != this.modding.context.event && this.modding.context.event(t.data, this.modding.game)
            } catch (t) {
                t
            }
            switch (t.data.name) {
                case "asteroid_destroyed":
                    if (null != i) return i.killed = !0;
                    break;
                case "alien_destroyed":
                    if (null != e) return e.killed = !0;
                    break;
                case "collectible_picked":
                    if (null != s) return s.killed = !0
            }
        }
    }
}
catch(e)
{
    game.modding.terminal.error("An error occured while executing the Modding+ extensions!");
}