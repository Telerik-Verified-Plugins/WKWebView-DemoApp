var demoURL =  'https://www.scirra.com/demos/c2/particles/';

(function (global) {
    var DemoViewModel,
        app = global.app = global.app || {};

    DemoViewModel = kendo.data.ObservableObject.extend({

        wkwebviewDemo: function () {
            if (!this.checkSimulator()) {
              document.getElementById('webglFrame').src = demoURL;
            }
        },

        uiwebviewDemo: function () {
            if (!this.checkSimulator()) {
               var ref = window.open(demoURL, '_blank', 'location=yes,presentationstyle=formsheet,enableViewportScale=no,closebuttoncaption=Close');
            }
        },

        checkSimulator: function() {
            if (window.navigator.simulator === true) {
                alert('This plugin is not available in the simulator.');
                return true;
            } else {
                return false;
            }
        }
    });

    app.demoService = {
        viewModel: new DemoViewModel()
    };
})(window);