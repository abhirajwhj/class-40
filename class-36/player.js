class Player{
    constructor(){
        this.index=null;
        this.Name=null;
        this.distance=0;
    }
    getPlayerCount(){
        var playerCountref=database.ref("PlayerCount") ;
        playerCountref.on("value",function (data)
        {
            playerCount=data.val();
        })   
    }
    updatePlayerCount(Count){
        database.ref('/').update(
            {
                PlayerCount:Count
            }
        )
    }
    updatePlayerinfo(){
        var psindex='players/player'+this.index;
        database.ref(psindex).set(
            {
                Name:this.Name,
                distance:this.distance
            }
        )
    }
    static getPlayerInfo(){
        var playerInforef=database.ref("players") ;
        playerInforef.on("value",(data)=>{
            allPlayers=data.val();
        });
    }
}