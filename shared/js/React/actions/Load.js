import axios from 'axios';
import store from "shared/js/React/Store/store";
var _ = require('lodash');

export function FetchData(){

    /** Set Methods */ 
    // 1. Fetch Data
    this.start = () => {

        // Json Path 
        // '<%= path %>/json/App.json', 
        this.init=['https://interactive.guim.co.uk/docsdata/1YpIG_I1H-ejXTZFOYhFtR9wdX0qf1cjF8zHaQi2sbPw.json']
        // Fetch Json Data for build and load into Reducers
        axios.all(this.init.map(l => axios.get(l)))

        .then(axios.spread(function (...res) { 
                const {
                    Client,
                    Header,
                    BodyCopy,
                    PartnerZone,
                    Sonos_Audio,
                    Sonos_Section_Copy,
                    Sonos_Movies_Quotes,
                    Sonos_Sports_Quotes,
                    Sonos_Podcast_Quotes,
                    Sonos_Movies_Images,
                    Sonos_Sport_Images,
                    Sonos_Podcast_Images
                } = res[0].data.sheets

                console.log("DATA RESPONSE");

                store.dispatch({ type:"STORE_META", payload:[Header,BodyCopy,PartnerZone,Client] });
                store.dispatch({ type:"STORE_APPLICATION", payload:[
                        Sonos_Audio,        // 0 
                        Sonos_Section_Copy,// 1
                        Sonos_Movies_Quotes, // 2
                        Sonos_Sports_Quotes, // 3 
                        Sonos_Podcast_Quotes, // 4 
                        Sonos_Movies_Images, // 5
                        Sonos_Sport_Images, // 6
                        Sonos_Podcast_Images // 7
                ] });
                store.dispatch({ type:"STORE_APPLICATIONREADY", payload:true });
 
            })
        )
        .catch(function (error) { 
            console.log("ERROR", error); 
        });
    }
}