window.onload = function(){
    AFRAME.registerComponent('markerhandler', {

    init: function() {
        var clicks = false;
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#MailPress");
        document.querySelector("#animated-marker").addEventListener('markerFound', (evt) => {
                clicks = true
            })
        document.querySelector("#animated-marker").addEventListener('markerLost', (evt) => {
                clicks = false
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement === aEntity) {
                console.log("Mail:"+clicks);
                if(clicks) {
                    window.location.href="mailto:hodprinting@annauniv.edu";
                }
            }
        });
}});

AFRAME.registerComponent('mobhandler', {

    init: function() {
        var mclicks = false;
        const mobMarker = document.querySelector("#mob-marker");
        const bEntity = document.querySelector("#MobPress");
        document.querySelector("#mob-marker").addEventListener('markerFound', (evt) => {
                mclicks = true
            })
        document.querySelector("#mob-marker").addEventListener('markerLost', (evt) => {
                mclicks = false
            }) 
        
        mobMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (bEntity && intersectedElement === bEntity) {
                console.log("Mob:"+mclicks);
                if(mclicks) {
                    window.location.href="tel:04422358957";
                }
            }
        });
}});

AFRAME.registerComponent('maphandler', {

    init: function() {
        var pclicks = false;
        const mapMarker = document.querySelector("#map-marker");
        const cEntity = document.querySelector("#MapPress");
        document.querySelector("#map-marker").addEventListener('markerFound', (evt) => {
                pclicks = true
            })
        document.querySelector("#map-marker").addEventListener('markerLost', (evt) => {
                pclicks = false
            }) 
        
        mapMarker.addEventListener('click', function(ev, target){
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (cEntity && intersectedElement === cEntity) {
                console.log("Map:"+pclicks);
                if(pclicks) {
                    window.location.href="https://goo.gl/maps/GNpCM9bwkJcxz9n36";
                }
            }
        });
}});

AFRAME.registerComponent('vidhandler', {
    // ...
    init: function () {
        this.toggle = false;
        this.vid = document.querySelector("#video")
        this.vid.pause();
    },
    tick: function () {
        if (this.el.object3D.visible == true) {
            if (!this.toggle) {
                this.toggle = true;
                this.vid.play();
            }
        } else {
            this.toggle = false;
            this.vid.pause();
        }
    }
});
}
