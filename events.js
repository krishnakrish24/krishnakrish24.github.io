AFRAME.registerComponent('markerhandler', {

    init: function() {
        var clicks = false;
        const animatedMarker = document.querySelector("#animated-marker");
        const aEntity = document.querySelector("#MailPress");
        document.querySelector("#animated-marker").addEventListener('markerFound', (evt) => {
                clicks = true;
                //console.log("Mail Marker Found!");
            })
        document.querySelector("#animated-marker").addEventListener('markerLost', (evt) => {
                clicks = false;
                //console.log("Mail Marker Lost!");
            }) 
        
        animatedMarker.addEventListener('click', function(ev, target){
            const intersectedElement1 = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity && intersectedElement1 === aEntity) {
                console.log("Mail:"+clicks);
                console.log(intersectedElement1);
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
                mclicks = true;
                //console.log("Mob Marker Found!");
            })
        document.querySelector("#mob-marker").addEventListener('markerLost', (evt) => {
                mclicks = false;
                //console.log("Mob Marker Lost!");
            }) 
        
        mobMarker.addEventListener('click', function(ev, target){
            const intersectedElement2 = ev && ev.detail && ev.detail.intersectedEl;
            if (bEntity && intersectedElement2 === bEntity) {
                console.log("Mob:"+mclicks);
                console.log(intersectedElement2);
                if(mclicks) {
                    window.location.href="tel:04422358957";
                }
            }
        });
}});

AFRAME.registerComponent('maphandler', {

    init: function() {
        var mpclicks = false;
        const mapMarker = document.querySelector("#map-marker");
        const cEntity = document.querySelector("#MapPress");
        document.querySelector("#map-marker").addEventListener('markerFound', (evt) => {
                mpclicks = true
            })
        document.querySelector("#map-marker").addEventListener('markerLost', (evt) => {
                mpclicks = false
            }) 
        
        document.querySelector("#map-marker").addEventListener('click', function(ev, target){
            const intersectedElement3 = ev && ev.detail && ev.detail.intersectedEl;
            if (cEntity && intersectedElement3 === cEntity) {
                console.log("Map:"+mpclicks);
                console.log(intersectedElement3);
                if(mpclicks) {
                    window.location.href="https://goo.gl/maps/GNpCM9bwkJcxz9n36";
                }
            }
        });
}});

AFRAME.registerComponent('pichandler', {

    init: function() {
        var pclicks = false;
        const animatedMarker4 = document.querySelector("#pic-marker");
        const aEntity4 = document.querySelector("#PhotoPress");
        document.querySelector("#pic-marker").addEventListener('markerFound', (evt) => {
                pclicks = true
            })
        document.querySelector("#pic-marker").addEventListener('markerLost', (evt) => {
                pclicks = false
            }) 
        
        animatedMarker4.addEventListener('click', function(ev, target){
            const intersectedElement4 = ev && ev.detail && ev.detail.intersectedEl;
            if (aEntity4 && intersectedElement4 === aEntity4) {
                console.log("Pic:"+pclicks);
                if(pclicks) {
                    window.location.href="https://www.annauniv.edu/PrintingTech/";
                }
            }
        });
}});

AFRAME.registerComponent('vidhandler', {

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